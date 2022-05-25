import Layout from '../../components/layout'
import Image from 'next/image'

export async function getStaticProps({ params }) {
    const res = await fetch('https://coffee.alexflipnote.dev/random.json')
    const json = await res.json()

    return {
        props: {
            res: json
        },
        revalidate: 10
    }
}

export default function Test({ res }) {
    return (
        <Layout>
            <p>ISR</p>
            <p>{JSON.stringify(res)}</p>
        </Layout>
    )
}