import { ReactElement, ReactNode } from 'react'
import ReactDOM from 'react-dom'

export const PortalBase = ({ children }: { children: ReactNode }): any => {
  return ReactDOM.createPortal(children, document.body)
}

export const Portal = ({ children }: { children: ReactNode }): ReactElement => {
  return <PortalBase>{children}</PortalBase>
}
