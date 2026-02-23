"use client"

import { useState } from "react"
import { electronics, categories } from "@/public/data"

export default function Categories({
        setOptions
    }: {
        setOptions: (options: any[]) => void,
}) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    return(
        <div className='mt-4 flex flex-row max-w-100 overflow-x-auto items-center gap-3 scrollbar-hide'>
            <button
                className={`text-sm font-medium px-3 py-1 rounded-lg mb-2 cursor-pointer
                ${selectedCategory === 'all' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white hover:bg-white hover:text-black'}
                 cursor-pointer transition `}
                onClick={() => {
                    setSelectedCategory('all')
                    setOptions(electronics)
                }}
            >
                All
            </button>
            {categories.map((cat) => (
                <button
                key={cat} 
                className={`text-sm font-medium px-3 py-1 rounded-lg mb-2
                ${selectedCategory === cat ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white hover:bg-white hover:text-black'}
                 cursor-pointer transition `}
                onClick={() => {
                    setSelectedCategory(cat)
                    setOptions(electronics.filter((e) => e.categorie === cat))
                }}
                >
                {cat}
                </button>
            ))}
        </div>
    )
}