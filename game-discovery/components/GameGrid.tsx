import GameCard from "./GameCard"
import { Game } from "@/lib/types"

export default function GameGrid({ games } : { games: Game[] }) {
  return (
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-6
    ">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}