export interface Game {
  id: number
  name: string
  slug: string
  background_image: string
  rating: number
  platforms: {
    platform: {
      id: number
      name: string
    }
  }[]
}