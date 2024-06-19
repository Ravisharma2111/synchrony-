import React, {
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

import useNotification from '../application/notification/useNotification';
import NotificationItem, { NotificationItemInfo } from './NotificationItem';

//#region ------------------- core definition -------------------
type PopInfo =
  | {
    is: 'notificationItem'
    info: NotificationItemInfo
  }

export default function NotificationSystemStack() {
  const [stack, setStack] = useState<PopInfo[]>([])

  const notificationItemInfos = useMemo(
    () => stack.filter((i) => i.is === 'notificationItem').map((i) => i.info) as NotificationItemInfo[],
    [stack]
  )
  useEffect(() => {
    const log = (info: NotificationItemInfo) => {
      setStack((s) => s.concat({ is: 'notificationItem', info }))
    }

    useNotification.setState({
      log,
      logTxid(txid: string, title?: string, options?: { isSuccess?: boolean }) {
        log({
          type: options?.isSuccess ? 'success' : 'info',
          title: title ?? 'Transaction sent',
          description: (
            <div>
              View on <a href={`https://solscan.io/tx/${txid}`}>Solscan</a>
            </div>
          )
        })
      },
      logError(title: string | Error | unknown, description?: ReactNode) {
        const errorTitle = title instanceof Error ? title.name : title ? String(title) : ''
        const errorDescription = title instanceof Error ? title.message : description ? String(description) : undefined
        log({ type: 'error', title: errorTitle, description: errorDescription })
      },
      logWarning(title: string, description?: ReactNode) {
        log({ type: 'warning', title, description })
      },
      logSuccess(title: string, description?: ReactNode) {
        log({ type: 'success', title, description })
      },
      logInfo(title: string, description?: ReactNode) {
        log({ type: 'info', title, description })
      }
    })
  }, [])

  return (
    <>
      <div
        className="items-end mobile:items-stretch pointer-events-none"
        style={{
          position: 'fixed',
          right: '0',
          bottom: '0',
          top: 'unset',
          left: 'unset',
          zIndex: 9999
        }}
      >
        {notificationItemInfos.map((info, idx) => (
          <NotificationItem key={idx} {...info} />
        ))}
      </div>
    </>
  )
}
