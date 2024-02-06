import { useEffect } from 'react'

interface IUseScrollLock {
  handleScrollLock: () => void
  handleScrollUnlock: () => void
}

const useScrollLock = (): IUseScrollLock => {
  const handleScrollLock = (): void => {
    document.body.classList.add('scrolllock')
  }

  const handleScrollUnlock = (): void => {
    document.body.classList.remove('scrolllock')
  }

  useEffect(() => {
    return () => {
      handleScrollUnlock()
    }
  }, [])

  return {
    handleScrollLock,
    handleScrollUnlock,
  }
}

export default useScrollLock
