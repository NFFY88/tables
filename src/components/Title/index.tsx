import classNames from 'classnames'
import React, { ReactNode } from 'react'

import style from './title.module.scss'

interface IProps {
  className?: string
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  theme?: string
  children: ReactNode | string
  hidden?: boolean
  noIndents?: boolean
}

const Title = ({
  children,
  type = 'h1',
  hidden = false,
  className = '',
  noIndents = false,
  ...props
}: React.PropsWithChildren<IProps>): React.ReactElement => {
  const CustomTag = type
  const { theme = type } = props

  const classes = classNames({
    [style[theme]]: theme,
    [style.no_indents]: noIndents,
    [className]: Boolean(className),
    visually_hidden: hidden,
  })

  return <CustomTag className={classes}>{children}</CustomTag>
}

export default Title
