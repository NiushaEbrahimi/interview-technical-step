// import { fetchGame } from "@/lib/api"
import Image from "next/image"

export default async function GamePage({ params } : { params: { slug: string } }) {
  // const game = await fetchGame(params.slug)
  const game = {
    id: 3498,
      slug: "grand-theft-auto-v",
      name: "Grand Theft Auto V",
      released: "2013-09-17",
      tba: false,
      background_image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      rating: 4.47,
      rating_top: 5,
      description: "<p>Grand Theft Auto V is an action-adventure game developed by Rockstar North and published by Rockstar Games. It was released in September 2013 for PlayStation 3 and Xbox 360, followed by a release for PlayStation 4 and Xbox One in November 2014, and finally for Microsoft Windows in April 2015.</p><p>The game is set in the fictional state of San Andreas, which is based on Southern California. Players control three protagonists: Michael De Santa, a retired bank robber; Franklin Clinton, a street gangster; and Trevor Philips, a violent and unpredictable criminal. The story follows their lives as they plan and execute a series of heists while navigating the criminal underworld.</p><p>Grand Theft Auto V features an open-world environment that allows players to explore the city of Los Santos and its surrounding areas. The game offers a wide range of activities, including driving, shooting, flying, and engaging in various side missions. It also includes an online multiplayer mode called Grand Theft Auto Online, where players can create their own characters and participate in various cooperative and competitive game modes.</p><p>Grand Theft Auto V received critical acclaim for its storytelling, open-world design, and gameplay mechanics. It has become one of the best-selling video games of all time, with millions of copies sold worldwide.</p>"
  }

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