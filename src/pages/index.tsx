import Layout from '@/layout/Layout'
import Head from 'next/head'

export default function Home() {
    return (
        <Layout>
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
            <div className="bg-backgroundMain  min-h-screen">Success Login</div>
        </Layout>
    )
}
