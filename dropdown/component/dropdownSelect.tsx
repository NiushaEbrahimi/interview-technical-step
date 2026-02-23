"use client"

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Check, ChevronDown, ListCheck, Trash } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { electronics } from '@/public/data'

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
    <div className="mx-auto w-120 min-h-100 rounded-xl bg-gradient-to-br from-slate-900 via-indigo-700 to-cyan-600 p-5 shadow-2xl shadow-indigo-900">
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

              <AnimatePresence>
                {open && (
                  <ListboxOptions
                    as={motion.div}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="mt-3 p-2 max-h-72 w-full flex flex-col gap-2 rounded-lg"
                  >
                    <div
                      ref={listRef}
                      onScroll={(e) => {
                        const el = e.currentTarget
                        if (el.scrollTop + el.clientHeight >= el.scrollHeight - 24 && visibleCount < total) {
                          setVisibleCount((v) => Math.min(total, v + perPage))
                        }
                      }}
                      className="overflow-auto max-h-56 space-y-2 px-1"
                    >
                      {electronics.slice(0, visibleCount).map((person) => (
                        <ListboxOption
                          key={person.id}
                          value={person}
                          className={({ active, selected }) =>
                            `flex items-center justify-between gap-3 rounded-lg px-3 py-2 cursor-pointer transition ${
                              selected
                                ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
                                : 'bg-white text-slate-700'
                            } ${active ? 'ring-2 ring-cyan-300 ring-offset-2' : ''}`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">{person.name}</span>
                                <span className={`text-xs ${selected ? 'text-white/90' : 'text-slate-400'}`}>
                                  {person.categorie}
                                </span>
                              </div>
                              <Check className={`${selected ? 'inline-block h-5 w-5' : 'opacity-0 h-5 w-5'}`} />
                            </>
                          )}
                        </ListboxOption>
                      ))}
                    </div>
                  </ListboxOptions>
                )}
              </AnimatePresence>
            </>
          )}
        </Listbox>
      </div>
    </div>
  )
}
