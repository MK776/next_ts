import Layout from '../../components/layout'
import Image from 'next/image'

export async function getStaticProps({ params }) {
    const res = await fetch('https://coffee.alexflipnote.dev/random.json')
    const json = await res.json()

    return {
        props: {
            url: json.file
        }
    }
}

export default function SSG({ url }) {
    return (
        <Layout>
            <p>SSG</p>
            <article>
                <Image
                    src={url}
                    width={700}
                    height={500}
                />
            </article>
        </Layout>
    )
}