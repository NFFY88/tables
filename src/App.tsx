import './styles/index.scss'

import React from 'react'

import Container from '@/components/Container'
import Form from '@/components/Form'
import Table from '@/components/Table'

import { IRowData } from './interfaces'

const mockRows: IRowData[] = [
  { id: crypto.randomUUID(), name: 'name', surname: 'surname', age: 23, city: 'city' },
  { id: crypto.randomUUID(), name: 'name', surname: 'surname', age: 23, city: 'city' },
  { id: crypto.randomUUID(), name: 'name', surname: 'surname', age: 23, city: 'city' },
]

function App(): React.ReactElement {
  return (
    <Container>
      <Form />

      <Table rows={mockRows} />
      <Table rows={mockRows} isDeletable />
    </Container>
  )
}

export default App
