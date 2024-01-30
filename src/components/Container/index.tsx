import React from 'react'

import classNames from 'classnames'

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
