class Contact {
  id: number
  name: string
  number: string
  email: string

  constructor(
    id: number,
    name: string,
    number: string,
    email: string
  ) {
    this.id = id
    this.name = name
    this.number = number
    this.email = email
  }
}

export default Contact
