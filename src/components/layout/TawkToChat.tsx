// components/TawkToChat.tsx
'use client'
import { useEffect } from 'react'

const TawkToChat = () => {
    useEffect(() => {
        const s1 = document.createElement('script')
        s1.src = 'https://embed.tawk.to/687b5dbcb0d86c191829f377/1j0gucaek'
        s1.async = true
        s1.charset = 'UTF-8'
        s1.setAttribute('crossorigin', '*')

        document.body.appendChild(s1)

        return () => {
            document.body.removeChild(s1)
        }
    }, [])

    return null
}

export default TawkToChat
