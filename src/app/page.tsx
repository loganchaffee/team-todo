//app/page.tsx
import { UserButton, auth } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/app-beta';
import { useState } from "react";
import type { HTMLAttributes } from 'react'


function NavItem({ children }: HTMLAttributes<HTMLDivElement>) {
    const [open, setOpen] = useState(false)


    return <div className="w-full text-gray-500">
        {children}
    </div>
}

function NavItemLink({ children }: HTMLAttributes<HTMLDivElement>) {
    return <div className='flex items-center px-3 w-full cursor-pointer hover:bg-gray-100 rounded-md justify-between'>
        <span className='flex items-center'>{children}</span>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    </div>
}

function NavItemDropdown({ children }: HTMLAttributes<HTMLDivElement>) {
    return <div className="px-3 ml-1 w-full">
        {children}
    </div>
}


function NavItemDropdownLink({ children }: HTMLAttributes<HTMLDivElement>) {
    return <div className='flex items-center px-3 w-full cursor-pointer hover:bg-gray-100 rounded-md justify-between'>
        {children}
    </div>
}

NavItemDropdown.Link = NavItemDropdownLink

NavItem.Dropdown = NavItemDropdown;

NavItem.Link = NavItemLink;


export default async function Home() {

    const user = await currentUser();

    return (
        <div className="min-h-screen">
            <div className="sticky top-0 w-fit border-r h-screen flex flex-col items-center p-5">
                <div className="flex items-center mb-5 w-full">
                    <UserButton />

                    <p className="ml-3">
                        {user?.firstName && user.firstName + ' '}
                        {user?.lastName && user.lastName + ' '}
                        {user?.username && user.username + ' '}
                    </p>
                </div>

                <NavItem>
                    <NavItem.Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>

                        Teams
                    </NavItem.Link>

                    <NavItemDropdown>
                        <NavItemDropdown.Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>

                            New Team
                        </NavItemDropdown.Link>

                        <NavItemDropdown.Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>

                            New Team
                        </NavItemDropdown.Link>
                    </NavItemDropdown>
                </NavItem>
            </div>

        </div>
    )
}
