import classNames from 'classnames'
import { PropsWithChildren, useCallback, useEffect, useRef } from 'react'

import { Portal } from '../Portal'
import { IBaseModalProps } from './interfaces'
import style from './styles/modal.module.scss'

const BaseModal = ({ isOpen, onClose, children }: PropsWithChildren<IBaseModalProps>) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const overlayRef = useRef<HTMLButtonElement>(null)

  const dialogClasses = classNames(style.modal, {
    [style['modal--closing']]: !isOpen,
  })

  const overlayClasses = classNames(style.overlay, {
    [style['overlay--closing']]: !isOpen,
  })

  const onCancel = useCallback(
    (e: any) => {
      e.preventDefault()
      onClose?.()
    },
    [onClose]
  )

  const onClick = useCallback(
    ({ target }: any) => {
      console.log('target === modalRef.current', target === modalRef.current)
      if (target === modalRef.current || target === overlayRef.current) onClose?.()
    },
    [onClose]
  )

  const onAnimationEnd = useCallback(() => {
    if (!isOpen) modalRef.current?.close()
  }, [isOpen])

  useEffect(() => {
    if (isOpen) modalRef.current?.show()
  }, [isOpen])

  return (
    <Portal>
      <button
        className={overlayClasses}
        onClick={onClick}
        ref={overlayRef}
        aria-label='Close modal'
      />
      <dialog
        ref={modalRef}
        className={dialogClasses}
        onClose={onClose}
        onCancel={onCancel}
        onClick={onClick}
        onAnimationEnd={onAnimationEnd}
      >
        <div className={style.modal__container}>{children}</div>
      </dialog>
    </Portal>
  )
}

export default BaseModal
