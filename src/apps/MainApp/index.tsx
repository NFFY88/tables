import React from 'react'

import Container from '@/components/Container'
import Form from '@/components/Form'
import { Table } from '@/components/Table'
import { IRowData } from '@/components/Table/interfaces'

import style from './styles/main_app.module.scss'

const mockRows: IRowData[] = [
  { id: crypto.randomUUID(), name: 'name', surname: 'surname', age: 23, city: 'city' },
  { id: crypto.randomUUID(), name: 'name', surname: 'surname', age: 23, city: 'city' },
  { id: crypto.randomUUID(), name: 'name', surname: 'surname', age: 23, city: 'city' },
]

const MainApp = (): React.ReactElement => {
  return (
    <Container className={style.container}>
      <div className={style.formswrap}>
        <Form />
        <Form columns={2} />
      </div>

      <Table rows={mockRows} />
      <Table rows={mockRows} isDeletable />
    </Container>
  )
}

export default MainApp
