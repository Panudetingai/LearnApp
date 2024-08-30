
'use client'
import React, { useState } from 'react'
import { NavigationMenu, NavigationMenuItem } from './ui/navigation-menu'
import { Button } from './ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Buttonsigninsignup() {

    const tokenLocalStorage = localStorage.getItem('token');
    const router = useRouter();
    React.useEffect(() => {
        if (!tokenLocalStorage) {
            router.push('/signin')
        }
    }, [])

    const removeTokenLocalStorage = () => {
        try {
            if(typeof window !== 'undefined') {
                localStorage.removeItem('token');
                router.push('/signin');
            }
        } catch (error) {
            
        }
    }

    return (
        <>
            {tokenLocalStorage ?
                (<>
                    <NavigationMenuItem>
                        <Button variant={'destructive'} onClick={() => removeTokenLocalStorage()}>
                            <Link href={'/signup'} passHref legacyBehavior>Log-out</Link>
                        </Button>
                    </NavigationMenuItem>
                </>) :
                (<>
                    <NavigationMenuItem>
                        <Button>
                            <Link href={'/signup'} passHref legacyBehavior>Sign-up</Link>
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button variant="outline">
                            <Link href={'/signin'} passHref legacyBehavior>Sign-in</Link>
                        </Button>
                    </NavigationMenuItem>
                </>)}
        </>
    )
}
