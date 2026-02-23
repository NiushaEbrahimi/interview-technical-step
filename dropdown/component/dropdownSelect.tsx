"use client"

import { Listbox, ListboxButton} from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { electronics } from '@/public/data'
import ListOfItems from './ListOfItems'
import DropdownHeader from './DropdownHeader'

export default function DropDownSelect() {
  const [options,setOptions] = useState(electronics)
  const [selected, setSelected] = useState([options[0], options[1]])
  const perPage = 20
  const total = options.length
  const [visibleCount, setVisibleCount] = useState<number>(perPage)
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount((v) => Math.min(v, total))
  }, [total])

  const handleSelectAll = () => setSelected(electronics)
  const handleDeselectAll = () => setSelected([])

  const handleSearch = (query: string) => {
    const q = query.trim()
    if (!q) {
      setOptions(electronics)
      setVisibleCount(perPage)
      return
    }

    const filtered = electronics.filter(
      (item) =>
        item.name.toLowerCase().includes(q.toLowerCase()) ||
        item.categorie.toLowerCase().includes(q.toLowerCase())
    )
    setOptions(filtered)
    setVisibleCount(perPage)
  }

  return (
    <div className="mx-auto w-120 min-h-150 rounded-xl bg-linear-to-br from-slate-900 via-indigo-700 to-cyan-600 p-5 shadow-2xl shadow-indigo-900">
      <div className="rounded-lg bg-white/6 ring-1 ring-white/10 p-4 backdrop-blur-sm">
        
        <DropdownHeader
          onSelectAll={handleSelectAll}
          onDeselectAll={handleDeselectAll}
          selectedCount={selected.length}
        />
        <Listbox multiple value={selected} onChange={setSelected}>
          {({open})=>(
            <>
              <div className="relative">
                <ListboxButton
                  className="w-full flex items-center justify-between gap-3 rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-md hover:shadow-lg transition"
                >
                  <>
                    <span className="truncate">
                      {selected.length ? selected.map((s) => s.name).join(', ') : 'Select devices'}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
                      aria-hidden="true"
                    />
                  </>
                </ListboxButton>
              </div>
              <AnimatePresence>
                {open && (
                  <ListOfItems
                    listRef={listRef}
                    visibleCount={visibleCount}
                    total={total}
                    perPage={perPage}
                    setVisibleCount={setVisibleCount}
                    options={options}
                    handleSearch={handleSearch}
                    setOptions={setOptions}
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
