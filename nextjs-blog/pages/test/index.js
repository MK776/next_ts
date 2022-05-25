import Layout from '../../components/layout'
import Image from 'next/image'

export async function getStaticProps({ params }) {
    const res = await fetch('https://ccc-bff-miah4kudbq-an.a.run.app/test')
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