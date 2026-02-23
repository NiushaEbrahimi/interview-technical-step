"use client"

import { Check } from 'lucide-react'
import React from 'react'

export default function OptionItem({ device, selected }: { device: any; selected: boolean }) {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{device.name}</span>
        <span className={`text-xs ${selected ? 'text-white/90' : 'text-slate-400'}`}>{device.categorie}</span>
      </div>
      <Check className={`${selected ? 'inline-block h-5 w-5' : 'opacity-0 h-5 w-5'}`} />
    </>
  )
}
