import { Check } from "lucide-react";
import { ListboxOption, ListboxOptions } from '@headlessui/react';
import { motion } from "framer-motion";
import { electronics } from "@/public/data";

export default function ListOfItems({ listRef, visibleCount, total, perPage, setVisibleCount }: { listRef: React.RefObject<HTMLDivElement>, visibleCount: number, total: number, perPage: number, setVisibleCount: (count: number) => void }) {
    
    return(
        <ListboxOptions
            as={motion.div}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-3 p-5 max-h-120 w-full flex flex-col gap-2 rounded-lg"
            >
            <div
                ref={listRef}
                onScroll={(e) => {
                const el = e.currentTarget
                if (el.scrollTop + el.clientHeight >= el.scrollHeight - 24 && visibleCount < total) {
                    setVisibleCount((v) => Math.min(total, v + perPage))
                }
                }}
                className="overflow-auto max-h-120 space-y-2 px-1"
            >
                {electronics.slice(0, visibleCount).map((device) => (
                <ListboxOption
                    key={device.id}
                    value={device}
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
                        <span className="text-sm font-medium">{device.name}</span>
                        <span className={`text-xs ${selected ? 'text-white/90' : 'text-slate-400'}`}>
                            {device.categorie}
                        </span>
                        </div>
                        <Check className={`${selected ? 'inline-block h-5 w-5' : 'opacity-0 h-5 w-5'}`} />
                    </>
                    )}
                </ListboxOption>
                ))}
            </div>
        </ListboxOptions>
    )
}