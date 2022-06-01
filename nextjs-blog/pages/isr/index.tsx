import type { NextPage, GetStaticPropsResult } from 'next'
import Image from 'next/image'

import PrivateLayout from '@/layout/private'

type Props = {
    url:string
}

export const getStaticProps = async ():Promise<GetStaticPropsResult<Props>> =>  {
    const res = await fetch('https://coffee.alexflipnote.dev/random.json')
    const json = await res.json()

    return {
        props: {
            url: json.file
        },
        revalidate: 10
    }
}

const ISR:NextPage<Props> = (props) => {
    const {url} = props

    return (
        <PrivateLayout>
            <p>ISR</p>
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

export default ISR