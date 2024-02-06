export interface IRowData {
  id: string
  name: string
  surname: string
  age: number
  city: string
}

export interface ITable {
  id: number
  rows: IRowData[]
}

export interface ITableMap {
  [key: number]: ITable
}
