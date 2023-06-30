class Game {
  title: string
  description: string
  infos: string[]
  image: string
  button: string
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    infos: string[],
    image: string,
    button: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.infos = infos
    this.image = image
    this.button = button
  }
}

export default Game
