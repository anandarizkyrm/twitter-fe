import React, { ReactNode } from 'react'
import MobileNavbar from '../organisms/MobileNavbar'
import TopMobile from '../organisms/MainLayout'

type Props = {
    children: ReactNode
}

const LayoutMobile = (props: Props) => {
    const { children } = props
    return (
        <div>
            <TopMobile />
            <div className="py-12">{children}</div>
            <MobileNavbar />
        </div>
    )
}

export default LayoutMobile
