import React from 'react'

import { Button, DeleteButton } from '@/components/Button'

import { IRowData } from '../../interfaces'
import Row from './Row'
import style from './styles/table.module.scss'

interface ITableProps {
  id: number
  isDeletable?: boolean
  rows: IRowData[]
  onChangeField: (row: IRowData) => void
  onDeleteField: (tableId: number, rowId: string) => void
  onCopyClick: (rows: IRowData[]) => void
  onDeleteClick: (tableId: number) => void
}

const Table = ({
  id,
  isDeletable = false,
  onChangeField,
  onDeleteField,
  rows,
  onCopyClick,
  onDeleteClick,
}: ITableProps): React.ReactElement => {
  const handleCopyClick = (): void => {
    onCopyClick(rows)
  }

  const handleDeleteTableClick = (): void => {
    onDeleteClick(id)
  }

  const handleDeleteField = (rowId: string) => {
    onDeleteField(id, rowId)
  }

  return (
    <div className={style.wrap}>
      <div className={style.head}>
        <Button onClick={handleCopyClick}>Copy table</Button>

        {isDeletable ? <DeleteButton onClick={handleDeleteTableClick} /> : null}
      </div>

      <table className={style.table}>
        <thead className={style.table__thead}>
          <tr>
            <th className={style.table__th}>Name</th>
            <th className={style.table__th}>Surname</th>
            <th className={style.table__th}>Age</th>
            <th className={style.table__th}>City</th>
            <th className={style.table__th}></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((el) => {
            return (
              <Row
                key={el.id}
                onChangeField={onChangeField}
                onDeleteField={handleDeleteField}
                data={el}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
