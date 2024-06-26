import { ReactNode } from 'react';

import create from 'zustand';

import { NotificationItemInfo } from '../../components/NotificationItem';

//! params base on <NotificationItem>
export interface NotificationStore {
  log(info: NotificationItemInfo): void
  logTxid(txid: string, title: string, options?: { isSuccess: boolean }): void
  logError(title: unknown, description?: ReactNode): void
  logWarning(title: string, description?: ReactNode): void
  logSuccess(title: string, description?: ReactNode): void
  logInfo(title: string, description?: ReactNode): void
}

/** zustand store hooks */
const useNotification = create<NotificationStore>(() => ({
  log: () => {},
  logTxid: () => {},
  logError: () => {},
  logWarning: () => {},
  logSuccess: () => {},
  logInfo: () => {},
}))

export default useNotification
