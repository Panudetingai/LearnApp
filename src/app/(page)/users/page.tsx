'use client'
import { UserType } from "@/app/types/user";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import React from "react";


export default function TableDemo() {

    const [user, setuser] = React.useState([]);

    React.useEffect(() => {
        try {
            const fetchUser = async () => {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const userdata = await res.json();
                setuser(userdata)
            }

            fetchUser();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <Table className="container">
            <TableCaption>A list of your recent user.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Firstname</TableHead>
                    <TableHead>Lastname</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Edit</TableHead>
                    <TableHead>Delete</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {user.map((user: UserType) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.firstname}</TableCell>
                        <TableCell>{user.lastname}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>
                            <Link href={`/users/edit/${user.id}`}>
                                <Button variant={"default"}>Edit</Button>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Button variant={"destructive"}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow></TableRow>
            </TableFooter>
        </Table>
    );
}