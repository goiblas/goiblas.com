import { useRef, useState, useEffect } from "react"

export const useMenu = <T extends HTMLElement>(initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState)
    const ref = useRef<T>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        const handleClickOutside = (e: MouseEvent ) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('keydown', handleKeyDown, true)
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('keydown', handleKeyDown, true)
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return { isOpen, setIsOpen, ref }
}
