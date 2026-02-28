export interface FilterPillProps {
    value: string;
    label: string;
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
}

export default function FilterPill({ value, label, selectedCategory, setSelectedCategory }: FilterPillProps) {
    return (
    <button
        key={value}
        type="button"
        onClick={() => setSelectedCategory(value)}
        className={`
            px-4 py-2 rounded-full text-base font-medium transition-all duration-200 cursor-pointer
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
            ${selectedCategory === value ? "bg-primary text-white shadow-md" : "bg-white border border-gray-300 text-gray-700 hover:border-primary hover:text-primary hover:bg-primary/5"}
        `}
    >
        {label}
    </button>
    )
}