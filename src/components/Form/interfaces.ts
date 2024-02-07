export interface IFormData {
  name: string
  surname: string
  age: number
  city: { label: string; value: string } | null
}
