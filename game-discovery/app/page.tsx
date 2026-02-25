import { fetchGames } from "@/lib/api"
import GameGrid from "@/components/GameGrid"
import Filters from "@/components/Filters"

export default async function Home() {
  
  const data = await fetchGames()
  
  return (
    <main className="container mx-auto px-6 py-8">
      <Filters />
      <GameGrid games={data?.results ?? []} />
    </main>
  )
}