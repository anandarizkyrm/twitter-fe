import MainLayout from '@/components/layout/MainLayout'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Twitter App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-backgroundMain  min-h-screen">
                <MainLayout>
                    <h1>Testing</h1>
                </MainLayout>
            </div>
        </>
    )
}