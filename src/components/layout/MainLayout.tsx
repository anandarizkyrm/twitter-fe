import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const MainLayout = (props: Props) => {
    const { children } = props
    return (
        <div className="flex justify-center items-center">
            <div className="">{children}</div>
        </div>
    )
}

export default MainLayout
