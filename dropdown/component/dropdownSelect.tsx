"use client"

import { Listbox, ListboxButton} from '@headlessui/react'
import { ChevronDown, ListCheck, Trash } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { electronics, categories } from '@/public/data'
import ListOfItems from './ListOfItems'

export default function DropDownSelect() {
  const [selected, setSelected] = useState([electronics[0], electronics[1]])
  const perPage = 20
  const total = electronics.length
  const [visibleCount, setVisibleCount] = useState(perPage)
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setVisibleCount((v) => Math.min(v, total))
  }, [total])

  const handleSelectAll = () => setSelected(electronics)
  const handleDeselectAll = () => setSelected([])

  return (
    <div className="mx-auto w-120 min-h-150 rounded-xl bg-gradient-to-br from-slate-900 via-indigo-700 to-cyan-600 p-5 shadow-2xl shadow-indigo-900">
      <div className="rounded-lg bg-white/6 ring-1 ring-white/10 p-4 backdrop-blur-sm">
        <div className='flex flex-row justify-between'>
          <div className="flex gap-3 mb-4">
            <button
              onClick={handleSelectAll}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-shadow shadow-sm"
            >
              <ListCheck className="h-5 w-5" />
              <span className="text-sm font-medium">Select All</span>
            </button>

            <button
              onClick={handleDeselectAll}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-shadow shadow-sm"
            >
              <Trash className="h-5 w-5" />
              <span className="text-sm font-medium">Deselect All</span>
            </button>
          </div>
          <div className='px-3 mb-4 flex text-center items-center rounded-lg bg-white/10 text-white'>
            <p className="text-white">{selected.length}</p>
          </div>
        </div>

        <Listbox multiple value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <ListboxButton
                className="w-full flex items-center justify-between gap-3 rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-md hover:shadow-lg transition"
              >
                <span className="truncate">
                  {selected.length ? selected.map((s) => s.name).join(', ') : 'Select devices'}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
                  aria-hidden="true"
                />
              </ListboxButton>

              <div className=' mt-4 flex flex-row max-w-100 overflow-x-scroll items-center gap-3'>
                {categories.map((cat) => (
                  <div key={cat} className='text-sm font-medium bg-white/10 text-slate-700 px-3 py-1 rounded-lg mb-2
                    hover:bg-white text-black cursor-pointer transition
                  '>
                    {cat}
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {open && (
                  <ListOfItems
                    listRef={listRef}
                    visibleCount={visibleCount}
                    total={total}
                    perPage={perPage}
                    setVisibleCount={setVisibleCount}
                  />
                )}
              </AnimatePresence>
            </>
          )}
        </Listbox>
      </div>
    </div>
  )
}
