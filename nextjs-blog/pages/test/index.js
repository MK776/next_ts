import Layout from '../../components/layout'
import Image from 'next/image'

export async function getStaticProps({ params }) {
    let data = ''
    try{
        const res = await fetch('https://ccc-bff-miah4kudbq-an.a.run.app/test')
        const json = await res.json()
        data = JSON.stringify(json)
    }catch(error){
        data = {'error': JSON.stringify(error)}
    }

    return {
        props: {
            data: data
        },
        revalidate: 10
    }
}

export default function Test({ res }) {
    return (
        <Layout>
            <p>ISR</p>
            <p>{data}</p>
        </Layout>
    )
}