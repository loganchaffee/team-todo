"use client"
import { MagnifyingGlassIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Card, Label, TextInput } from "flowbite-react";
import { ChangeEvent, FormEvent, useState } from "react";
import type { User } from "@clerk/nextjs/dist/server";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    const [users, setUsers] = useState<User[]>([])

    const [searchQuery, setSearchQuery] = useState('')

    async function findUsers(e: React.FormEvent<HTMLInputElement>) {
        try {
            setSearchQuery(e.currentTarget.value)

            if (e.currentTarget.value === '') return setUsers([])

            const res = await fetch(`/api/users?name=${e.currentTarget.value}`)

            const parsed = await res.json()

            setUsers(parsed.data)

        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
    }

    return <div>
        <h1 className="text-2xl mb-3">Create New Team</h1>

        <form onSubmit={handleSubmit}>
            <Label>Team Name</Label>

            <TextInput icon={UsersIcon} placeholder='Enter team name' className="mb-3" />

        </form>

        <form>
            <Label>Add Team Members</Label>

            <TextInput onChange={findUsers} value={searchQuery} icon={UsersIcon} rightIcon={MagnifyingGlassIcon} placeholder='Seach for team members' className="mb-3" />

            {
                users.map((user: User) => {
                    return <Card className="mb-3 text-sm">
                        <div className='flex items-center'>
                            <Avatar
                                className="mr-3"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded={true}
                            />
                            <p>
                                {`
                                ${user?.firstName ? user.firstName : ''} ${user?.lastName ? user.lastName : ''}
                                ${!user.firstName ? user.emailAddresses.find(obj => obj.emailAddress.includes(searchQuery))?.emailAddress : ''}
                                `}
                            </p>
                        </div>
                        <Button size='sm'>Add to team</Button>
                    </Card>
                })
            }
            <Button type='submit'>Create Team</Button>
        </form>
    </div>;
}
