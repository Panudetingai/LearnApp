
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
        localStorage.removeItem('token');
        window.location.href = "/signin";
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
