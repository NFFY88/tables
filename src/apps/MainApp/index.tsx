import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import Container from '@/components/Container'
import { Form, SlavedForm } from '@/components/Form'
import { defaultFormValues, validationSchema } from '@/components/Form/const'
import { EditRowModal } from '@/components/Modal'
import { Table } from '@/components/Table'
import { getNextTableId } from '@/helpers'
import { useModal } from '@/hooks'
import { IRowData, ITable } from '@/interfaces'

import style from './styles/main_app.module.scss'

export interface IFormData {
  name: string
  surname: string
  age: number
  city: { label: string; value: string } | null
}

interface EditableRow {
  tableId: number
  rowData: IRowData
}

const MAIN_TABLE_ID = 0

const MainApp = (): React.ReactElement => {
  const [tables, setTables] = useState<Map<number, ITable>>(new Map())
  const [editedRow, setEditedRow] = useState<EditableRow>()

  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

  const closeEditModal = (): void => {
    handleCloseModal()

    // clear state after closing animation
    setTimeout(() => setEditedRow(undefined), 200)
  }

  const {
    register,
    control,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormData>({
    defaultValues: defaultFormValues,
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  })

  const slavedFormDefaultValues = watch()

  const onSubmit = ({ city, ...params }: IFormData): void => {
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

  const handleChangeField = (tableId: number, rowData: IRowData) => {
    setEditedRow({ tableId, rowData })
    handleOpenModal()
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
      <Form
        control={control}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
        disabledSubmit={!isDirty || !isValid}
        className={style.form}
      />

      {TablesList()}

      <SlavedForm
        onSubmit={onSubmit}
        className={style.form}
        defaultValues={slavedFormDefaultValues}
      />

      {editedRow !== undefined ? (
        <EditRowModal
          handleClose={closeEditModal}
          isOpen={isOpen}
          tables={tables}
          setTables={setTables}
          tableId={editedRow.tableId}
          rowData={editedRow.rowData}
        />
      ) : null}
    </Container>
  )
}

export default MainApp
