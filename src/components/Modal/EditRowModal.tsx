import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { IFormData } from '@/apps/MainApp'
import { IRowData, ITable } from '@/interfaces'

import { MainForm } from '../Form'
import { validationSchema } from '../Form/const'
import { CITIES_LIST } from '../Select/const'
import BaseModal from './BaseModal'
import { IBaseModalProps } from './interfaces'

interface IEditRowModalProps extends IBaseModalProps {
  tables: Map<number, ITable>
  setTables: React.Dispatch<React.SetStateAction<Map<number, ITable>>>
  tableId: number
  rowData: IRowData
  handleClose: () => void
}

const EditRowModal = ({
  isOpen,
  onClose,
  tables,
  setTables,
  tableId,
  rowData,
  handleClose,
}: IEditRowModalProps): React.ReactElement => {
  const defaultValues: IFormData = {
    name: rowData.name,
    surname: rowData.surname,
    age: rowData.age,
    city: CITIES_LIST.find((el) => el.value === rowData.city) ?? null,
  }

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormData>({
    defaultValues: defaultValues,
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  })

  const onSubmit = ({ city, ...params }: IFormData): void => {
    const table = tables.get(tableId)
    if (city !== null && table !== undefined) {
      const newRowValue: IRowData = { id: rowData.id, city: city.value, ...params }
      const rows = [...table.rows]
      const index = rows.findIndex((el) => el.id === rowData.id)
      rows[index] = newRowValue

      const newTable: ITable = {
        id: tableId,
        rows: rows,
      }

      const newTables = new Map([...tables])
      newTables.set(tableId, newTable)
      setTables(newTables)
      handleClose()
    }
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <MainForm
        control={control}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
        disabledSubmit={!isDirty || !isValid}
        submitButtonText='Save'
      />
    </BaseModal>
  )
}

export default EditRowModal
