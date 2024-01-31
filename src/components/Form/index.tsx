import React from 'react'

import { Button } from '../Button'
import Input from '../Input'
import { CitySelect } from '../Select'
import style from './styles/form.module.scss'

type IFormProps = React.FormHTMLAttributes<HTMLFormElement>

const Form = ({ ...props }: IFormProps): React.ReactElement => {
  return (
    <form {...props} className={style.form}>
      <Input name='name' placeholder='Name' autoComplete='off' />
      <Input name='surname' placeholder='Surname' autoComplete='off' />
      <Input name='age' placeholder='Age' autoComplete='off' />
      <CitySelect />

      <Button type='submit' className={style.form__submit} size='lg' fullWidth>
        Add
      </Button>
    </form>
  )
}

export default Form
