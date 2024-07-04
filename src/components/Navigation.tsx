import React from 'react'
import NavigationMenus from './NavigationMenu'

type Props = {}

const Navigation = (props: Props) => {
    return (
        <div className='fixed top-0 left-0 w-full backdrop-blur-md z-50'>
            <div className='container mx-auto py-5 flex justify-between items-center'>
                <div className="logo">
                    <h1 className='text-2xl font-bold'>LearnApp</h1>
                </div>
                <ul>
                    <NavigationMenus />
                </ul>
            </div>
        </div>
    )
}

export default Navigation