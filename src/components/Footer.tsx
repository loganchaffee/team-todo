"use client"
import React from 'react'
import { Footer as FlowBiteFooter } from 'flowbite-react'

export const Footer = () => {
    return (
        <div className='fixed bottom-0 left-0 w-full'>
            <FlowBiteFooter container={true} className='border-t border-gray-300'>
                <FlowBiteFooter.Copyright
                    href="#"
                    by="Flowbite™"
                    year={2022}
                />

                <FlowBiteFooter.LinkGroup>
                    <FlowBiteFooter.Link href="#">
                        About
                    </FlowBiteFooter.Link>
                    <FlowBiteFooter.Link href="#">
                        Privacy Policy
                    </FlowBiteFooter.Link>
                    <FlowBiteFooter.Link href="#">
                        Licensing
                    </FlowBiteFooter.Link>
                    <FlowBiteFooter.Link href="#">
                        Contact
                    </FlowBiteFooter.Link>
                </FlowBiteFooter.LinkGroup>
            </FlowBiteFooter>
        </div >
    )
}
