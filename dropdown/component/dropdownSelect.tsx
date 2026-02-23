"use client"

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Check, ChevronDown, ChevronUp, ListCheck, Trash } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const electronics = [
  { id: 1, name: 'Iphone', categorie : "Phone" },
  { id: 2, name: 'Ipad', categorie: "Tablet" },
  { id: 3, name: 'MacBook', categorie: "Laptop" },
  { id: 4, name: 'Asos', categorie: "Laptop" },
  { id: 5, name: 'MSI', categorie: "Laptop" },
  { id: 6, name: 'Samsung', categorie: "Phone" },
  { id: 7, name: 'Xiaomi', categorie: "Phone" },
  { id: 8, name: 'Huawei', categorie: "Phone" },
  { id: 9, name: 'Nokia', categorie: "Phone" },
]

export default function DropDownSelect() {
  const [selected, setSelected] = useState([electronics[0], electronics[1]])

  const handleSelectAll = () => {
    setSelected(electronics)
  }

  const handleDeselectAll = () => {
    setSelected([])
  }

  return (
    <div className="mx-auto w-100 border-2 rounded-lg border-gray-700 bg-purple-50 p-1 flex flex-col gap-2">

      <div className='flex flex-row justify-between'>
        <button 
          className='flex flex-row cursor-pointer bg-green-300 justify-center items-center border-2 border-gray-700 p-1.5 rounded-xl'
          onClick={handleSelectAll}
        >
          <ListCheck className="h-5 w-5" onClick={handleSelectAll} />
          Select All
        </button>
        <button 
          className='flex flex-row cursor-pointer bg-red-300 justify-center items-center border-2 border-gray-700 p-1.5 rounded-xl'
          onClick={handleDeselectAll}
        >
          <Trash className="h-5 w-5" onClick={handleDeselectAll} />
          Deselect All
        </button>
      </div>
      
      <Listbox multiple value={selected} onChange={setSelected} __demoMode>
        {({open})=>(
          <>
            <ListboxButton
              className="
                bg-white min-h-12 relative block w-full rounded-lg border-2 border-gray-700 py-1.5 pr-8 pl-3 text-left text-sm/6
              "
            >
              {selected.map((person) => person.name).join(', ')}
              {open ? <ChevronDown
                className="group pointer-events-none absolute top-2.5 right-2"
                aria-hidden="true"
              />: 
              <ChevronUp
                className="group pointer-events-none absolute top-2.5 right-2"
                aria-hidden="true"
              />
              }
            </ListboxButton>
            <AnimatePresence>
              {open &&(<ListboxOptions
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                anchor="bottom"
                className="origin-top mt-1 w-100 max-h-40 overflow-y-auto flex flex-col gap-2 rounded-lg border-2 border-gray-700 bg-purple-200 p-3 text-left text-sm/6"
              >
                {electronics.map((person) => (
                  <ListboxOption
                    key={person.name}
                    value={person}
                    className="group border-2 bg-white border-gray-700 flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus: white/10"
                  >
                    <Check className="invisible group-data-selected:visible" />
                    <div className="text-sm/6  ">{person.name}</div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            )}
          </AnimatePresence>
        </>
        )}
      </Listbox>
    </div>
  )
}
