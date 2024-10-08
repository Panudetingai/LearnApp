import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { Button } from './ui/button'
import Buttonsigninsignup from './Buttonsignin-signup'

type Props = {}

const NavigationMenus = (props: Props) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href={'/'} passHref legacyBehavior>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'/About'} passHref legacyBehavior>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'/Service'} passHref legacyBehavior>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Service
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <Buttonsigninsignup />
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavigationMenus