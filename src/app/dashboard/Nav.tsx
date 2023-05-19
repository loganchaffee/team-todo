"use client"

import { UserButton, useUser } from '@clerk/nextjs'
import { Button, Dropdown, Sidebar } from "flowbite-react";
import Link from 'next/link'
import { HomeIcon, BackwardIcon, ArrowLeftIcon, UsersIcon, PlusIcon } from '@heroicons/react/24/outline'

export function Nav(props: {}) {
    const { user, isLoaded } = useUser()

    console.log(user)

    return (
        <div className='border-r border-r-gray-300'>
            <Sidebar aria-label="Default sidebar example">
                <div className='flex items-center mb-5'>
                    {isLoaded && <UserButton />}

                    {!isLoaded && <div className='w-[32px] h-[32px] rounded-full animate-pulse bg-gray-200' />}

                    {!isLoaded && <p className="ml-3 bg-gray-200 h-5 rounded-sm animate-pulse flex-1">{' '}</p>}

                    {isLoaded && <p className="ml-3">
                        {user?.firstName && user.firstName + ' '}
                        {user?.lastName && user.lastName + ' '}
                        {user?.username && user.username + ' '}
                    </p>}
                </div>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Link href='/dashboard/'>
                            <Sidebar.Item
                                href="#"
                                icon={HomeIcon}
                            >
                                Home
                            </Sidebar.Item>
                        </Link>

                        <Sidebar.Collapse icon={UsersIcon} label="Teams">
                            <Link href='/dashboard/team/new'>
                                <Sidebar.Item icon={PlusIcon}>
                                    New Team
                                </Sidebar.Item>
                            </Link>

                            <Link href='/dashboard/team/123'>
                                <Sidebar.Item href="#">
                                    Marketing
                                </Sidebar.Item>
                            </Link>

                            <Link href='/dashboard/team/456'>
                                <Sidebar.Item href="#">
                                    Sales
                                </Sidebar.Item>
                            </Link>
                        </Sidebar.Collapse>
                    </Sidebar.ItemGroup>

                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={ArrowLeftIcon}
                        >
                            Sign out
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div >
    )
}
