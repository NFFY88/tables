import React from 'react'

import Container from '@/components/Container'
import Table from '@/components/Table'

import { IRowData } from './interfaces'

import './styles/index.scss'

const mockRows: IRowData[] = [
  { id: crypto.randomUUID(), name: 'name', surname: 'surname', age: 23, city: 'city' },
  { id: crypto.randomUUID(), name: 'name', surname: 'surname', age: 23, city: 'city' },
  { id: crypto.randomUUID(), name: 'name', surname: 'surname', age: 23, city: 'city' },
]

function App(): React.ReactElement {
  return (
    <Container>
      <Table rows={mockRows} />
      <Table rows={mockRows} isDeletable />
    </Container>
  )
}

export default App
