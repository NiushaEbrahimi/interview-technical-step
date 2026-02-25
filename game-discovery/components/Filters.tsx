"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function Filters() {
  const router = useRouter()
  const params = useSearchParams()

  function update(key: string, value: string) {
    const newParams = new URLSearchParams(params)
    newParams.set(key, value)
    router.push(`/?${newParams.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <input
        placeholder="Search games..."
        className="input"
        onChange={(e) => update("search", e.target.value)}
      />

      <select onChange={(e) => update("genres", e.target.value)}>
        <option value="">Genre</option>
        <option value="action">Action</option>
        <option value="rpg">RPG</option>
      </select>

      <select onChange={(e) => update("ordering", e.target.value)}>
        <option value="">Sort</option>
        <option value="-rating">Top Rated</option>
        <option value="-released">Newest</option>
      </select>
    </div>
  )
}