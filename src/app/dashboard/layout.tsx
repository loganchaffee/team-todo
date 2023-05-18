import Link from "next/link";
import { Nav } from "./Nav";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen w-full flex">
            {/* Include shared UI here e.g. a header or sidebar */}
            <Nav />

            {/* Page container */}
            <div className='p-5 pb-20'>
                {children}
            </div>
        </section>
    );
}
