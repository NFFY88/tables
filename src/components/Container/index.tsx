import classNames from 'classnames'
import React from 'react'

import style from './styles/container.module.scss'

interface IContainerProps {
  className?: string
}
const Container = ({
  className = '',
  children,
}: React.PropsWithChildren<IContainerProps>): React.ReactElement => {
  const classes = classNames(style.container, className)

  return <div className={classes}>{children}</div>
}

export default Container
