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
import { user } from "@/lib/schema/user"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"


type Input = z.infer<typeof user>;

export default function ProfileForm() {

    const router = useRouter();

    const form = useForm<Input>({
        resolver: zodResolver(user),
        defaultValues: {

        },
    })

    async function onSubmit(data: Input) {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    username: data.username,
                    password: data.password
                }),
            });

            if(res.status === 200) {
                router.push('/users');
            }
        } catch (error) {
            console.error(error);
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
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Firstname</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Firstname" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lastname</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Lastname" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username" {...field} />
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
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Sign-up</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
