export interface Game {
  id: number
  name: string
  slug: string
  background_image: string
  rating :{
    id:number,
    title:string,
    count:number,
    percent:number,
  }[]
  platforms: {
    platform: {
      id: number
      name: string
    }
  }[]
}