import classNames from 'classnames'
import React from 'react'

import { Button } from '../Button'
import Input from '../Input'
import { CitySelect } from '../Select'
import style from './styles/form.module.scss'

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  columns?: 1 | 2
}

const Form = ({ columns = 1, ...props }: IFormProps): React.ReactElement => {
  const classes = classNames(style.form, style[`form--col${columns}`])

  return (
    <form {...props} className={classes}>
      <Input name='name' placeholder='Name' autoComplete='new-password' />
      <Input name='surname' placeholder='Surname' autoComplete='new-password' />
      <Input name='age' placeholder='Age' autoComplete='new-password' />
      <CitySelect />

      <Button type='submit' className={style.form__submit} size='lg' fullWidth>
        Add
      </Button>
    </form>
  )
}

export default Form
