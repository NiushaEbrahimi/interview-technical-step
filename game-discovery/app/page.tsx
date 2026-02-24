import { fetchGames } from "@/lib/api"
import GameGrid from "@/components/GameGrid"
import Filters from "@/components/Filters"

export default async function Home({
  searchParams
}: {
  searchParams: Record<string, string>
}) {
  const data = await fetchGames()
  console.log(data?.data.results.count)

  
  return (
    <main className="container mx-auto px-6 py-8">
      <Filters />

      <GameGrid games={data?.data.results} />
    </main>
  )
}