// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page({ params }: { params: { id: string } }) {
    console.log(params)

    return <h1>Hello from team page #{params.id}!</h1>;
}
