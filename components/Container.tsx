import { ReactNode } from "react"

export default function Container({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            <div className="max-w-7xl mx-auto">{children}</div>
        </div>
    )
}
