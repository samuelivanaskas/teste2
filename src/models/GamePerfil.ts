class GamePerfil {
  title: string
  description: string
  image: string
  button: string
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    button: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.button = button
  }
}

export default GamePerfil
