import Link from "next/link"
import { Star } from "lucide-react"
import Image from "next/image"
import { Game } from "@/lib/types"

export default function GameCard({ game } : { game: Game }) {
  return (
    <Link href={`/game/${game.slug}`}>
      <div className="rounded-xl overflow-hidden bg-zinc-900 hover:scale-[1.02] transition">
        <Image
          src={game.background_image}
          alt="game background"
          className="h-48 w-full object-cover"
          width={400}
          height={300}
        />

        <div className="p-4">
          <h3 className="font-semibold">{game.name}</h3>

          <div className="flex items-center gap-2 text-sm text-yellow-400">
            <Star size={16} />
            {game.rating}
          </div>

          <div className="text-xs text-gray-400 mt-2">
            {game.platforms?.map(p => p.platform.name).join(", ")}
          </div>
        </div>
      </div>
    </Link>
  )
}