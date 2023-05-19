import { NextRequest, NextResponse } from "next/server"
import { auth } from '@clerk/nextjs';
import { clerkClient } from "@clerk/nextjs/dist/server-helpers.server";

export async function GET(req: NextRequest) {
    try {
        const { userId } = auth();

        const { searchParams } = new URL(req.url);

        const name = searchParams.get('name') || '';

        let users = await clerkClient.users.getUserList()

        users = users.filter(user => {
            return (
                user.firstName?.toLowerCase()?.includes(name) ||
                user.lastName?.toLowerCase().includes(name) ||
                user.username?.toLowerCase().includes(name) ||
                user.emailAddresses.filter(ea => ea.emailAddress.toLowerCase().includes(name)).length > 0
            )
        })

        if (!userId) {
            return new Response("Unauthorized", { status: 401 });
        }

        return NextResponse.json({ data: users });
    } catch (error) {
        console.log(error)
    }
}
