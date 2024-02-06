import classNames from 'classnames'
import { PropsWithChildren, useCallback, useEffect, useRef } from 'react'

import { CrossIcon } from '../Icon'
import { Portal } from '../Portal'
import { IModalProps } from './interfaces'
import style from './styles/modal.module.scss'

interface IBaseModalProps extends IModalProps {
  dialogClassName?: string
  hideCloseButton?: boolean
}

const BaseModal = ({
  isOpen,
  onClose,
  children,
  dialogClassName,
  hideCloseButton = false,
}: PropsWithChildren<IBaseModalProps>) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const overlayRef = useRef<HTMLButtonElement>(null)

  const dialogClasses = classNames(style.modal, dialogClassName, {
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

  const handleClickOverlay = useCallback(
    ({ target }: any) => {
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
        onClick={handleClickOverlay}
        ref={overlayRef}
        aria-label='Close modal'
      />
      <dialog
        ref={modalRef}
        className={dialogClasses}
        onClose={onClose}
        onCancel={onCancel}
        onAnimationEnd={onAnimationEnd}
      >
        <div className={style.modal__container}>
          {!hideCloseButton ? (
            <button className={style.modal__close} onClick={onClose} aria-label='Close modal'>
              <CrossIcon />
            </button>
          ) : null}

          {children}
        </div>
      </dialog>
    </Portal>
  )
}

export default BaseModal
