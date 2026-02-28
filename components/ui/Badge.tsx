export default function Badge({ children, bgColor }: { children: React.ReactNode, bgColor: string }) {
    return (
        <span className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30 backdrop-blur-sm ${bgColor} text-white flex items-center gap-2`}>
            {children}
        </span>
    )
}