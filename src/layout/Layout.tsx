import { useState } from 'react'
import Router from 'next/router'
import { useEffect } from 'react'
import isLogged from '@/utils/isLogged'
import toast, { Toaster } from 'react-hot-toast'

export default function Layout({ children }: any) {
    const [auth, setAuth] = useState(false)
    const authenticate = async () => {
        const res = await isLogged()
        const logged = await res
        if (!logged) {
            Router.push('/login')
            toast.error('Please Login First!')
        } else {
            setAuth(true)
        }
    }

    useEffect(() => {
        authenticate()
    }, [])
    if (!auth) return null
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <>{children}</>
        </div>
    )
}
