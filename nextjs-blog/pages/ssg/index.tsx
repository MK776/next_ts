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
        }
    }
}

const SSG:NextPage<Props> = (props) => {
    const {url} = props

    return (
        <PrivateLayout>
            <p>SSG</p>
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

export default SSG
