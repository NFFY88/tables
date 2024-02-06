import { useState } from 'react'

interface IUseModal {
  isOpen: boolean
  handleOpenModal: () => void
  handleCloseModal: () => void
}

const useModal = (): IUseModal => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = (): void => {
    setIsOpen(true)
    document.body.classList.add('scrolllock')
  }

  const handleCloseModal = (): void => {
    setIsOpen(false)
    document.body.classList.remove('scrolllock')
  }

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  }
}

export default useModal
