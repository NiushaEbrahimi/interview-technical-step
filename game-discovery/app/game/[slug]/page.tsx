import { fetchGame } from "@/lib/api"
import Image from "next/image"

export default async function GamePage({ params } : { params: { slug: string } }) {
  const game = await fetchGame(params.slug)

  return (
    <div className="container mx-auto px-6 py-10">
      <Image
        src={game.background_image}
        alt="game background"
        className="rounded-xl mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">
        {game.name}
      </h1>

      <p
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: game.description
        }}
      />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Rating</h2>
        {game.rating}
      </div>
    </div>
  )
}