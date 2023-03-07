import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const navLinks: any[] = [
    {
        href: '/home',
        linkName: 'Home',
        iconName: 'HomeIcon',
    },
    {
        href: '/explore',
        linkName: 'Explore',
        iconName: 'HashtagIcon',
        disabled: true,
        canBeHidden: true,
    },
    {
        href: '/notifications',
        linkName: 'Notifications',
        iconName: 'BellIcon',
        disabled: true,
    },
    {
        href: '/messages',
        linkName: 'Messages',
        iconName: 'EnvelopeIcon',
        disabled: true,
    },
    {
        href: '/bookmarks',
        linkName: 'Bookmarks',
        iconName: 'BookmarkIcon',
        canBeHidden: true,
    },
    {
        href: '/lists',
        linkName: 'Lists',
        iconName: 'Bars3BottomLeftIcon',
        disabled: true,
        canBeHidden: true,
    },
]
const SideBar = () => {
    return <div>SideBar</div>
}

export default SideBar
