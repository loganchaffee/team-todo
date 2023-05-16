import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return <div className='w-screen h-full flex justify-center items-center'>
        <SignUp />
    </div>
}
