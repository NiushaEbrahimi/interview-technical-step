"use client"

import { Search, X } from 'lucide-react'
import React, { useState, useCallback } from 'react'

export default function SearchBar({
  onSearch,
  placeholder = 'Search devices...',
}: {
  onSearch: (query: string) => void
  placeholder?: string
}) {
  const [query, setQuery] = useState('')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setQuery(value)
      onSearch(value)
    },
    [onSearch]
  )

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className="relative flex items-center mb-4">
      <Search className="absolute left-3 h-5 w-5 text-slate-400 pointer-events-none" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full bg-white pl-10 pr-10 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 text-slate-400 hover:text-slate-600 transition"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
