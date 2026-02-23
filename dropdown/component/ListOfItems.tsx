import { Check } from "lucide-react";
import { ListboxOption, ListboxOptions } from '@headlessui/react';
import { motion } from "framer-motion";
import OptionItem from "./OptionItem";

type Device = {
    id: number,
    name: string,
    categorie: string
}

export default function ListOfItems(
    { listRef, visibleCount, total, perPage, setVisibleCount, options } 
    :{
        listRef: React.RefObject<HTMLDivElement>,
        visibleCount: number,
        total: number,
        perPage: number,
        setVisibleCount: (count: number) => void 
        options: Device[]
    }) {
    console.log(options)
    return(
        <ListboxOptions
            as={motion.div}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-3 p-5 max-h-100 w-full flex flex-col gap-2 rounded-lg"
            >
            <div
                ref={listRef}
                onScroll={(e) => {
                const el = e.currentTarget
                if (el.scrollTop + el.clientHeight >= el.scrollHeight - 24 && visibleCount < total) {
                    setVisibleCount((v) => Math.min(total, v + perPage))
                }
                }}
                className="overflow-auto max-h-100 space-y-2 p-2"
            >
                {options.slice(0, visibleCount).map((device : Device) => (
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
                    <OptionItem device={device} selected={selected} />
                    )}
                </ListboxOption>
                ))}
            </div>
        </ListboxOptions>
    )
}