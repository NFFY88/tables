import { zodResolver } from '@hookform/resolvers/zod'
import React, { forwardRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { IFormData } from '@/apps/MainApp'

import { defaultFormValues, validationSchema } from './const'
import Form from './Form'

interface IDefaultValues {
  name?: string
  surname?: string
  age?: number
  city?: { label?: string; value?: string } | null
}

interface ISlavedFormProps {
  className?: string
  defaultValues: IDefaultValues
  onSubmit: (params: IFormData) => void
}

const SlavedForm = forwardRef<HTMLFormElement, ISlavedFormProps>(
  ({ className, onSubmit, defaultValues }: ISlavedFormProps, ref): React.ReactElement => {
    const {
      register,
      control,
      handleSubmit,
      reset,
      trigger,
      formState: { errors, isValid },
    } = useForm<IFormData>({
      defaultValues: defaultValues,
      resolver: zodResolver(validationSchema),
      mode: 'onChange',
    })

    const submit = (data: IFormData) => {
      onSubmit(data)
      reset()
      reset(defaultFormValues)
    }

    useEffect(() => {
      reset(defaultValues)

      const defaulValuesKeys = Object.keys(defaultValues) as Array<keyof IDefaultValues>
      defaulValuesKeys.forEach((key) => {
        const value = defaultValues[key]
        const hasValue = value !== null && value !== undefined && value !== ''
        const isNaNValue = typeof value === 'number' && isNaN(value)
        if (hasValue && !isNaNValue) {
          trigger(key)
        }
      })
    }, [defaultValues])

    return (
      <Form
        columns={2}
        control={control}
        register={register}
        onSubmit={handleSubmit(submit)}
        errors={errors}
        disabledSubmit={!isValid}
        className={className}
        ref={ref}
      />
    )
  }
)

export default SlavedForm
