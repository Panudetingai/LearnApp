"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { input, z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signin } from "@/lib/schema/user"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { loadStaticPaths } from "next/dist/server/dev/static-paths-worker"
import { useState } from "react"


type Input = z.infer<typeof signin>;

export default function FormSignin() {

    const router = useRouter();
    const [Token, setToken] = useState('');

    const form = useForm<Input>({
        resolver: zodResolver(signin),
        defaultValues: {

        },
    })

    async function onSubmit(data: Input) {
        try {
            const res = await fetch(`https://backend-seven75.vercel.app/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password
                }),
            });

            const result = await res.json();
            setToken(result.token);
            console.log("res successfully!!")
        } catch (error) {
            console.error(error);
        }
    }

    if(Token){
        try {
            if(typeof window !== "undefined"){
                localStorage.setItem('token', Token);
                router.push('/users');

            }
        } catch (error) {
            console.error('Error while setting token in localStorage:', error);
        }
    }


    return (
        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>Sign-in</CardTitle>
                <CardDescription>ล็อกอินเพื่อสมัครบัญชี</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Password" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Sign-in</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
