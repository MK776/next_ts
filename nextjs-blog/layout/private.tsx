import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { useEffect, Suspense } from 'react'
import { RecoilRoot, useSetRecoilState, SetterOrUpdater, useRecoilValue } from 'recoil'

import styles from '/layout/layout.module.css'
import { authState } from '@/pages/login'
import { userState } from '@/pages/login'

type Props = {
    children?: React.ReactNode
    home?: boolean
}

const PrivateLayout:NextPage<Props> = ({ children, home }:Props) => {
    const setIsAuth:SetterOrUpdater<boolean> = useSetRecoilState(authState)
    const isAuth:boolean = useRecoilValue(authState)
    const user:string = useRecoilValue(userState)
    const router = useRouter()

    const logOut = () => {
        setIsAuth(false)
        router.replace('/login')
    }

    useEffect(() => {
        if(!isAuth && router.pathname !== '/login'){
            router.replace('/login')
        }else if(isAuth && router.pathname === '/login'){
            router.replace('/')
        }
    }, [])

    return (
        <RecoilRoot>
            <div className={styles.container}>
                <Head>
                    <link rel='icon' href='/favicon.ico' />
                    <meta
                        name='description'
                        content='CCCです'
                    />
                    <title>CCC</title>
                </Head>
                <main>
                    <Suspense fallback={<div>loading</div>}>
                        {children}
                    </Suspense>
                </main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href='/'>
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
                {router.pathname !== '/login' && (
                    <>
                        <p>UUID: {user}</p>
                        <button onClick={logOut}>ログアウト</button>
                    </>
                )}
            </div>
        </RecoilRoot>
    )
}

export default PrivateLayout