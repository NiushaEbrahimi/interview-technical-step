import { ListboxOption, ListboxOptions } from '@headlessui/react';
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from 'react';
import OptionItem from "./OptionItem";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import { Device } from '@/types/types';

export default function ListOfItems(
    { listRef, visibleCount, total, perPage, setVisibleCount, options, handleSearch, setOptions } 
    :{
        listRef: React.RefObject<HTMLDivElement | null>,
        visibleCount: number,
        total: number,
        perPage: number,
        setVisibleCount: Dispatch<SetStateAction<number>>
        options: Device[],
        handleSearch: (query: string) => void
        setOptions: (options: Device[]) => void
    }) {
    console.log(options)
    return(
        <ListboxOptions
            as={motion.div}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className=" mt-3 h-120 w-full flex gap-2 flex-col rounded-lg"
        >
            <SearchBar onSearch={handleSearch}/>
            <Categories setOptions={setOptions} />
            <div
                ref={listRef}
                onScroll={(e) => {  
                const el = e.currentTarget
                if (el.scrollTop + el.clientHeight >= el.scrollHeight - 24 && visibleCount < total) {
                    setVisibleCount((v: number) => Math.min(total, v + perPage))
                }
                }}
                className="overflow-auto max-h-90 space-y-2 p-2"
            >
                {options.slice(0, visibleCount).map((device : Device) => (
                <ListboxOption
                    key={device.id}
                    value={device}
                    className={({ active, selected }) =>
                    `flex items-center justify-between gap-3 rounded-lg px-3 py-2 cursor-pointer transition ${
                        selected
                        ? 'bg-linear-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
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