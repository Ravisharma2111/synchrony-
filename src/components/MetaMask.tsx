import React, { useEffect, useState } from "react";
import styles from "./metamask-auth.module.css";
import MetaIcon from '../assets/icon/metamask.png';

function isMobileDevice() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function connect(onConnected) {
  if (!(window as any).ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await (window as any).ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {
  if ((window as any).ethereum) {
    const accounts = await (window as any).ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}


export default function MetaMaskAuth({ onAddressChanged }) {
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  useEffect(() => {
    onAddressChanged(userAddress);
  }, [userAddress, onAddressChanged]);

  return userAddress ? (
    <div>
      <Address userAddress={userAddress} /> <button className="disconnect" onClick={(e) => setUserAddress('')}>Disconnect</button>
    </div>
  ) : (
    <Connect setUserAddress={setUserAddress} />
  );
}


function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "metamask-auth.ilamanov.repl.co"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <a href={metamaskAppDeepLink}>
        <button className={styles.button}>
          Connect to MetaMask
        </button>
      </a>
    );
  }

  return (
    <button className={styles.metaButton} onClick={() => connect(setUserAddress)}>
      MetaMask <img src={MetaIcon} alt="" />
    </button>
  );
}

function Address({ userAddress }) {
  return (
    <span className={styles.address}>{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
  );
}