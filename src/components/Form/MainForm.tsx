import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { Control, Controller, FieldErrors, UseFormRegister } from 'react-hook-form'

import { IFormData } from '@/apps/MainApp'

import { Button } from '../Button'
import Input from '../Input'
import { CitySelect } from '../Select'
import style from './styles/form.module.scss'

interface IMainFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  columns?: 1 | 2
  control: Control<any, any>
  register: UseFormRegister<any>
  errors: FieldErrors<IFormData>
  disabledSubmit?: boolean
}

const MainForm = forwardRef<HTMLFormElement, IMainFormProps>(
  (
    { columns = 1, control, register, errors, disabledSubmit, ...props }: IMainFormProps,
    ref
  ): React.ReactElement => {
    const classes = classNames(style.form, style[`form--col${columns}`])

    return (
      <form {...props} className={classes} ref={ref}>
        <Input
          placeholder='Name'
          autoComplete='new-password'
          {...register('name', { required: "Field can't be empty" })}
          error={errors?.name?.message ?? ''}
        />

        <Input
          placeholder='Surname'
          autoComplete='new-password'
          {...register('surname')}
          error={errors?.surname?.message ?? ''}
        />

        <Input
          placeholder='Age'
          autoComplete='new-password'
          {...register('age', { valueAsNumber: true })}
          type='number'
          error={errors?.age?.message ?? ''}
        />

        <Controller
          control={control}
          name='city'
          render={({ field: { value, ...field } }) => (
            <CitySelect {...field} value={value} error={errors?.city?.message ?? ''} />
          )}
        />

        <Button
          type='submit'
          disabled={disabledSubmit}
          className={style.form__submit}
          size='lg'
          fullWidth
        >
          Add
        </Button>
      </form>
    )
  }
)

export default MainForm
