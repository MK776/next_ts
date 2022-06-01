import { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'

import PrivateLayout from '@/layout/private'

type Props = {
    url:string
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://coffee.alexflipnote.dev/random.json')
    const json = await res.json()

    return {
        props: {
            url: json.file
        }
    }
}

const SSR:NextPage<Props> = (props) => {
    const {url} = props

    return (
        <PrivateLayout>
            <p>SSR</p>
            <article>
                <Image
                    src={url}
                    width={700}
                    height={500}
                    alt='api'
                />
            </article>
        </PrivateLayout>
    )
}

export default SSR