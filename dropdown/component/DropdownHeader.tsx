"use client"

import { ListCheck, Trash } from 'lucide-react'

export default function DropdownHeader({
  onSelectAll,
  onDeselectAll,
  selectedCount,
}: {
  onSelectAll: () => void
  onDeselectAll: () => void
  selectedCount: number
}) {
  return (
    <>
    <div className="flex flex-row justify-between mb-3">
        <div className="flex gap-3 items-center">
          <button
            onClick={onSelectAll}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-shadow shadow-sm"
          >
            <ListCheck className="h-5 w-5" />
            <span className="text-sm font-medium">Select All</span>
          </button>

          <button
            onClick={onDeselectAll}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-shadow shadow-sm"
          >
            <Trash className="h-5 w-5" />
            <span className="text-sm font-medium">Deselect All</span>
          </button>
        </div>

        <div className="px-3 flex text-center items-center rounded-lg bg-white/10 text-white">
          <p className="text-white">{selectedCount}</p>
        </div>
      </div>

    </>
  )
}
