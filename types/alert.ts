export type Alert = {
  id: number
  type: string
  location: string
  date: string
  status: string
  description: string
  coordinates: [number, number] // [latitude, longitude]
}
