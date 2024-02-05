import classNames from 'classnames'
import React, { ReactNode } from 'react'

import style from './title.module.scss'

interface IProps {
  className?: string
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  theme?: string
  children: ReactNode | string
  hidden?: boolean
}

const Title = ({
  children,
  type = 'h1',
  hidden = false,
  ...props
}: React.PropsWithChildren<IProps>): React.ReactElement => {
  const CustomTag = type
  const { theme = type, className = '' } = props
  return (
    <CustomTag
      className={classNames({
        [style[theme]]: theme,
        [className]: Boolean(className),
        visually_hidden: hidden,
      })}
    >
      {children}
    </CustomTag>
  )
}

export default Title
