import Head from 'next/head'
import Link from 'next/link'
import { RecoilRoot } from 'recoil'
import type { NextPage } from 'next'

import styles from '/layout/layout.module.css'

type Props = {
    children?: React.ReactNode
    home?: boolean
}

const OpenLayout:NextPage<Props> = ({ children, home }:Props) => {
    return (
        <RecoilRoot>
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="CCCです"
                    />
                    <title>CCC</title>
                </Head>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>
        </RecoilRoot>
    )
}

export default OpenLayout