import Layout from '../../components/layout'
import Image from 'next/image'
import useSWR from 'swr'

const fetcher = (url) => fetch(url, { mode: "no-cors" }).then(res => res.json())

export default function SWR() {
    const { data, error } = useSWR('https://coffee.alexflipnote.dev/random.json', fetcher)

    if (error) return <div>{String(error)}</div>
    if (!data) return <div>Loading...</div>

    return (
        <Layout>
            <p>SWR</p>
            <article>
                <Image
                    src={data.url}
                    width={700}
                    height={500}
                />
            </article>
        </Layout>
    )
}


export async function getServerSideProps(context) {
    const res = await fetch('https://coffee.alexflipnote.dev/random.json')
    const json = await res.json()

    return {
        props: {
            url: json.file
        }
    }
}
