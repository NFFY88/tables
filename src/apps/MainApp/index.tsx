import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import Container from '@/components/Container'
import { MainForm } from '@/components/Form'
import { validationSchema } from '@/components/Form/const'
import { Table } from '@/components/Table'
import { getNextTableId } from '@/helpers'
import { IRowData, ITable } from '@/interfaces'

import style from './styles/main_app.module.scss'

const defaultFormValues = {
  name: undefined,
  surname: undefined,
  age: undefined,
  city: null,
}

export interface IFormData {
  name: string
  surname: string
  age: number
  city: { label: string; value: string } | null
}

const MAIN_TABLE_ID = 0

const MainApp = (): React.ReactElement => {
  const [tables, setTables] = useState<Map<number, ITable>>(new Map())
  console.log('tables', tables)

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormData>({
    defaultValues: defaultFormValues,
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  })

  const onSubmit = ({ city, ...params }: IFormData) => {
    if (city !== null) {
      const id = crypto.randomUUID()
      const newValue: IRowData = { id, city: city.value, ...params }
      const mainTableRows = tables.get(MAIN_TABLE_ID)?.rows ?? []
      setTables(
        tables.set(MAIN_TABLE_ID, { id: MAIN_TABLE_ID, rows: [...mainTableRows, newValue] })
      )
      reset()
    }
  }

  const handleCopyTable = (rows: IRowData[]): void => {
    const newTables = new Map([...tables])
    const tableId = getNextTableId()
    const newRows = structuredClone(rows)
    newTables.set(tableId, { id: tableId, rows: [...newRows] })
    setTables(newTables)
  }

  const handleDeleteTable = (tableId: number) => {
    const newTables = new Map([...tables])
    newTables.delete(tableId)
    setTables(newTables)
  }

  const handleChangeField = (row: IRowData) => {
    console.log('change', row)
  }

  const handleDeleteField = (tableId: number, rowId: string) => {
    const table = tables.get(tableId)

    if (table !== undefined) {
      const newRows = table.rows.filter((el) => el.id !== rowId)
      const newTables = new Map([...tables])

      newTables.set(tableId, {
        id: tableId,
        rows: newRows,
      })

      setTables(newTables)
    } else {
      throw new Error('Table row not found')
    }
  }

  const TablesList = (): JSX.Element[] => {
    const keys = [...tables.keys()]
    return keys.map((el) => {
      const table = tables.get(el)
      if (table !== undefined) {
        return (
          <Table
            key={el}
            id={table.id}
            rows={table.rows}
            onChangeField={handleChangeField}
            onDeleteField={handleDeleteField}
            isDeletable={table.id !== MAIN_TABLE_ID}
            onCopyClick={handleCopyTable}
            onDeleteClick={handleDeleteTable}
          />
        )
      } else return <></>
    })
  }

  return (
    <Container className={style.container}>
      <div className={style.formswrap}>
        <MainForm
          control={control}
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          disabledSubmit={!isDirty || !isValid}
        />
        {/* <Form
          columns={2}
          control={control}
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          disabledSubmit={!isDirty || !isValid}
        /> */}
      </div>

      {TablesList()}
    </Container>
  )
}

export default MainApp
