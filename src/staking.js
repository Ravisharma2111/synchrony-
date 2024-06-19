import {
	AccountInfo,
	signer,
	Connection,
	clusterApiUrl,
	Keypair,
	PublicKey,
	SYSVAR_CLOCK_PUBKEY,
	Transaction,
	TransactionInstruction,
	ConfirmOptions,
} from "@solana/web3.js";

import BN from "bn.js";
import { deserializeUnchecked, Schema, serialize } from "borsh";
import { Buffer } from 'buffer';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token"

export const VAULT_SEED = Buffer.from("___vault");

export const SCY_STAKING_PROGRAM_ID: PublicKey = new PublicKey(
	"SCYHjmmGpsykkuoVaA7zCyUvcETiNL6v16UgE2pz2SS"
);

export const SCY_MINT: PublicKey = new PublicKey(
	"SCYfrGCw8aDiqdgcpdGjV6jp4UVVQLuphxTDLNWu36f"
);

export const RENT_SYSVAR: PublicKey = new PublicKey(
	"SysvarRent111111111111111111111111111111111"
);

export const SYSTEM_PROGRAM_ID: PublicKey = new PublicKey(
	"11111111111111111111111111111111"
);

// const TEST_SECRET_KEY: Keypair = Keypair.fromSecretKey(new Uint8Array([98,129,160,113,213,159,168,48,132,177,253,131,82,148,219,190,197,191,141,57,130,210,227,195,33,204,213,97,38,217,47,164,29,238,214,180,104,194,111,107,51,59,238,51,241,45,52,41,41,221,101,250,151,185,66,239,90,11,84,71,108,32,10,131]));

//-----------------------u64 Typscript------------------------------------------
export class Numberu64 extends BN {
	/**
	 * Convert to Buffer representation
	 */
	toBuffer(): Buffer {
		const a = super.toArray().reverse();
		const b = Buffer.from(a);
		if (b.length === 8) {
			return b;
		}

		const zeroPad = Buffer.alloc(8);
		b.copy(zeroPad);
		return zeroPad;
	}

	/**
	 * Construct a Numberu64 from Buffer representation
	 */
	static fromBuffer(buffer: Buffer): any {
		return new BN(
			[...buffer]
			.reverse()
			.map((i) => `00${i.toString(16)}`.slice(-2))
			.join(""),
			16
		);
	}
}

//------------------------Structs----------------------------------------------
class StakeSchema {
	timestamp: Numberu64
	staker: PublicKey
	mint: PublicKey
	active: boolean
	withdraw: Numberu64
	harvested: Numberu64
	stakedAmount: Numberu64
	maxReward: Numberu64

	constructor(fields?: {
		timestamp: Numberu64,
		staker: PublicKey,
		mint: PublicKey,
		active: boolean,
		withdraw: Numberu64,
		harvested: Numberu64,
		stakedAmount: Numberu64,
		maxReward: Numberu64,
	}) {
		this.timestamp = fields.timestamp;
		this.staker = fields.staker;
		this.mint = fields.mint;
		this.active = fields.active;
		this.withdraw = fields.withdraw;
		this.harvested = fields.harvested;
		this.stakedAmount = fields.stakedAmount;
		this.maxReward = fields.maxReward;
	}

	static schema = new Map([[
		StakeSchema, { 
			kind: "struct", 
			fields: [
				['timestamp', 'u64'],
				['staker', ['u8', 32]],
				['mint', ['u8', 32]],
				['active', ['u8', 1]],
				['withdrawn', 'u64'],
				['harvested', 'u64'],
				['stakedAmount', 'u64'],
				['maxReward', 'u64'],
			]
		}
	]])

	serialize(): Uint8Array {
		return serialize(StakeSchema.schema, this);
	}

	printAll(): void {
		console.log(`Staking started: ${convertUnixTime(this.timestamp.toNumber())}`);
		console.log(`Staker Addr: ${new PublicKey(this.staker)}`);
		console.log(`Mint of Staked Token: ${new PublicKey(this.mint)}`);
		console.log(`Staking Active?: ${this.active}`);
		console.log(`Withdrawn Amount: ${this.withdraw}`);
		console.log(`Harvested Amount: ${this.harvested}`);
		console.log(`Staked Amount: ${this.stakedAmount.toNumber() / 10**9}`);
		console.log(`Maximum Potential Reward: ${this.maxReward.toNumber() / 10**9}`);
		return {"date":convertUnixTime(this.timestamp.toNumber()),"amount":(this.stakedAmount.toNumber() / 10**9)};
	}
}

class VaultSchema {
	mint: PublicKey
	minPeriod: Numberu64
	rewardPeriod: Numberu64
	rate: Numberu64
	earlyWithdrawalFee: Numberu64
	totalObligations: Numberu64
	totalStaked: Numberu64;

	constructor(fields?: {
		mint: PublicKey,
		minPeriod: Numberu64,
		rewardPeriod: Numberu64,
		rate: Numberu64,
		earlyWithdrawalFee: Numberu64, 
		totalObligations: Numberu64,
		totalStaked: Numberu64,
	}){
		this.mint = fields.mint;
		this.minPeriod = fields.minPeriod;
		this.rewardPeriod = fields.rewardPeriod;
		this.rate = fields.rate;
		this.earlyWithdrawalFee = fields.earlyWithdrawalFee;
		this.totalObligations = fields.totalObligations;
		this.totalStaked = fields.totalStaked;
	}

	static schema = new Map([[
		VaultSchema, {
			kind: "struct",
			fields: [ 
				['mint', ['u8', 32]],
				['minPeriod', 'u64'],
				['rewardPeriod', 'u64'],
				['rate', 'u64'],
				['earlyWithdrawalFee', 'u64'],
				['totalObligations', 'u64'],
				['totalStaked', 'u64']
			]
		}
	]])

	serialize(): Uint8Array {
		return serialize(VaultSchema.schema, this);
	}

	printAll(): void {
		console.log(`Mint Address: ${new PublicKey(this.mint)}`);
		console.log(`Minimum Period: ${this.minPeriod}`);
		console.log(`Reward Period: ${this.rewardPeriod}`);
		console.log(`APR: ${this.rate}`);
		console.log(`Early Withdrawal Fee: ${this.earlyWithdrawalFee}`);
		console.log(`Total Obligations: ${this.totalObligations.toNumber() / 10**9}`);
		console.log(`Total Tokens Staked: ${this.totalStaked.toNumber() / 10**9}`);
	}
}

//------------------------Get Account Data-----------------------------------

export function getVaultData(connection: Connection) {
	findVaultInfoAddress().then(
		r => {
			console.log(`Vault Info Addr: ${r.toBase58()}`)
			connection.getAccountInfo(r).then(

				r => {
					const val = deserializeUnchecked(
						VaultSchema.schema,
						VaultSchema,
						r.data,
					);
					val.printAll();
				},
				error => alert(error)
			);
		});
}

export async function getStakeData(connection: Connection, staker: PublicKey) {
	//console.log(`Staker Addr: ${staker.toBase58()}`);

	return await findStakeInfoAddress(staker).then(
		r => {
			console.log(`Staker Info Addr ${r.toBase58()}`)
			return connection.getAccountInfo(r).then(
				r => {
					const val = deserializeUnchecked(
						StakeSchema.schema,
						StakeSchema,
						r && r.data,
					);
					let stackeData = val.printAll();
					return  stackeData;
				},
				error => alert(error)
			)},
			error => alert(error)
	);

}

//------------------------Instructions-----------------------------------------
//

export class StakeInstruction {

}

export class createStakeInstruction {
	amount: Numberu64;
	static schema: Schema = new Map([[createStakeInstruction, {kind: "struct", fields: [["amount", "u64"]]},],]);

	constructor(obj: {
		amount: Numberu64;
	}) {
		this.amount = obj.amount;
	}

	serialize(): Uint8Array {
		return serialize(createStakeInstruction.schema, this);
	}

	deserialize(data: Buffer): createStakeInstruction {
			return deserializeUnchecked(createStakeInstruction.schema, createStakeInstruction, data);
	}

	async getInstruction(
		staker: PublicKey,
	): Promise<TransactionInstruction> {
		// console.log(`PK: ${TEST_SECRET_KEY.publicKey}`);
		const vaultInfoAddr = await findVaultInfoAddress();
		const stakeInfoAddr = await findStakeInfoAddress(staker);
		const stakerTokenAddr = await findAssociatedTokenAddress(staker, SCY_MINT);
		const vaultTokenAddr = await findAssociatedTokenAddress(vaultInfoAddr, SCY_MINT);

		const dataIx = Buffer.from(this.serialize());
		const data = Buffer.from(Uint8Array.of(1, ...dataIx));
		
		let keys = [
			{
				pubkey: staker,
				isSigner: true,
				isWritable: true,
			},
			{
				pubkey: stakeInfoAddr,
				isSigner: false,
				isWritable: true,
			},		
			{
				pubkey: stakerTokenAddr,
				isSigner: false,
				isWritable: true,
			},

			{
				pubkey: vaultInfoAddr,
				isSigner: false,
				isWritable: true,
			},
			{
				pubkey: vaultTokenAddr,
				isSigner: false,
				isWritable: true,
			},
			{
				pubkey: SCY_MINT,
				isSigner: false,
				isWritable: false,
			},
			{
				pubkey: TOKEN_PROGRAM_ID,
				isSigner: false,
				isWritable: false,
			},
			{
				pubkey: ASSOCIATED_TOKEN_PROGRAM_ID,
				isSigner: false,
				isWritable: false,
			},
			{
				pubkey: SYSTEM_PROGRAM_ID,
				isSigner: false,
				isWritable: false,
			},
			{
				pubkey: RENT_SYSVAR,
				isSigner: false,
				isWritable: false,
			},
		];

		return new TransactionInstruction({
			keys,
			programId: SCY_STAKING_PROGRAM_ID,
			data,
		});
	}
}
export class createUnstakeInstruction {
	static schema: Schema = new Map([[createUnstakeInstruction, {},],]);

	serialize(): Uint8Array {
		return serialize(createUnstakeInstruction.schema, this);
	}

	// Cant pass values from promises up a call chain
	// Call get instruction after a getStakeData call
	async getInstruction(
		staker: PublicKey,
	): Promise<TransactionInstruction> {
		const vaultInfoAddr = await findVaultInfoAddress();
		const stakeInfoAddr = await findStakeInfoAddress(staker);
		const stakerTokenAddr = await findAssociatedTokenAddress(staker, SCY_MINT);
		const vaultTokenAddr = await findAssociatedTokenAddress(vaultInfoAddr, SCY_MINT);
		

		const data = Buffer.from(Uint8Array.of(2));

		let keys = [
			{
				pubkey: staker,
				isSigner: true,
				isWritable: true,
			},
			{
				pubkey: stakeInfoAddr,
				isSigner: false,
				isWritable: true,
			},
			{
				pubkey: stakerTokenAddr,
				isSigner: false,
				isWritable: true,
			},
			{
				pubkey: vaultInfoAddr, 
				isSigner: false,        
				isWritable: true,
			},
			{
				pubkey: vaultTokenAddr,
				isSigner: false,
				isWritable: true,
			},
			{
				pubkey: SCY_MINT,
				isSigner: false,
				isWritable: false,
			},
			{
				pubkey: TOKEN_PROGRAM_ID,
				isSigner: false,
				isWritable: false,
			},
		];

		return new TransactionInstruction({
			keys,
			programId: SCY_STAKING_PROGRAM_ID,
			data,
		});
	}
}

//------------------------------------------------------------------------------

export const signAndSendTransactionInstructions = async (
	// sign and send transaction
	connection: Connection,
	signers: Array<Keypair>,
	feePayer: PublicKey,
	// opts?: ConfirmOptions,
	txInstructions: Array<TransactionInstruction>
): Promise<string> => {
	const tx = new Transaction();
	// const blockhash = await this.connection.getRecentBlockhash(
	// 			opts.preflightCommitment
	// 			);
	tx.feePayer = feePayer;
	signers.push(feePayer);
	tx.recentBlockhash = await connection._recentBlockhash(
		// @ts-ignore
		connection._disableBlockhashCaching
		);
	tx.add(...txInstructions);

	console.log("TXXX", tx);

	console.log(tx.signatures);
	console.log(tx.feePayer);
	console.log(tx.recentBlockhash);
	console.log(tx.lastValidBlockHeight);
	console.log(tx.nonceInfo);
	console.log(tx.instructions);

	// return await connection.sendTransaction(tx, signers);
	return tx;
};

export async function findStakeInfoAddress(
	walletAddress: PublicKey,
): Promise<PublicKey> {
	return (
		await PublicKey.findProgramAddress(
			[
				walletAddress.toBuffer(),
			],
			SCY_STAKING_PROGRAM_ID,
		)
	)[0];
}

export async function findVaultInfoAddress(): Promise<PublicKey> {
	return (
		await PublicKey.findProgramAddress(
			[VAULT_SEED], 
			SCY_STAKING_PROGRAM_ID
		)
	)[0];
}

export async function findAssociatedTokenAddress(
	walletAddress: PublicKey,
	tokenMintAddress: PublicKey
): Promise<PublicKey> {
	return (
		await PublicKey.findProgramAddress(
			[
				walletAddress.toBuffer(),
				TOKEN_PROGRAM_ID.toBuffer(),
				tokenMintAddress.toBuffer(),
			],
			ASSOCIATED_TOKEN_PROGRAM_ID
		)
	)[0];
}

function convertUnixTime(unix: number) {
  let a = new Date(unix * 1000),
      year = a.getFullYear(),
      months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
      month = months[a.getMonth()],
      date = a.getDate(),
      hour = a.getHours(),
      min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(),
      sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
  return `${month} ${date}, ${year}, ${hour}:${min}:${sec}`;
}
// initiate staking
export async function getAndCreateInstruction(amount: Numberu64, staker: PublicKey, connection: Connection) {
	let ix = new createStakeInstruction({amount: amount});
	let ixFinal = await ix.getInstruction(staker);
	let ixArr = [];
	let signers = [];
	let feePayer = staker;
	// signers.push(TEST_SECRET_KEY);
	// let feePayer = TEST_SECRET_KEY;
	ixArr.push(ixFinal);
	console.log("staker:",staker);
	try{
		let sig = await signAndSendTransactionInstructions(connection, signers, feePayer, ixArr);
		console.log(sig);
		console.log(ixFinal);
		return sig;
		
	}catch(e){
		console.log("error",e.message);
		return e.message;
	}
	
}

export async function getAndCreateUnstakeIx(staker: PublicKey, connection: Connection) {
	let ix = new createUnstakeInstruction();
	let ixFinal = await ix.getInstruction(staker);
	let ixArr = [];
	let signers = [];
	let feePayer = staker;
	// signers.push(TEST_SECRET_KEY);
	// let feePayer = TEST_SECRET_KEY;
	ixArr.push(ixFinal);
	try{
		let sig = await signAndSendTransactionInstructions(connection, signers, feePayer, ixArr);
		console.log(sig);
		return sig;
		//console.log(sig);
		return sig;
	}catch(e){
		//console.log("error",e.message);
		return e.message;
	}
	
}
