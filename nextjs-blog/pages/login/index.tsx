import type { NextPage } from 'next'
import { useState } from 'react'
import { atom, useSetRecoilState, SetterOrUpdater } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { useRouter } from "next/router"

import { DefaultService } from '@/generated/index'
import PrivateLayout from '@/layout/private'

const { persistAtom } = recoilPersist({
	key: 'pages.login.index-persist',
	storage: typeof window === 'undefined' ? undefined : sessionStorage
})


export const authState = atom<boolean>({
    key: 'pages.login.auth',
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export const userState = atom<string>({
    key: 'pages.login.user',
    default: '',
    effects_UNSTABLE: [persistAtom]
})


const SSG:NextPage = () => {
    const [loginId, setLoginId] = useState('')
    const [password, setPassword] = useState('')
    const setIsAuth:SetterOrUpdater<boolean> = useSetRecoilState(authState)
    const setUser:SetterOrUpdater<string> = useSetRecoilState(userState)
    const router = useRouter()

    const Login = async () => {
        const json = await DefaultService.postLogin()
        setUser(json.uuid)
        setIsAuth(true)
        router.replace('/')
    }

    return (
        <PrivateLayout home={true}>
            <input
                type="text"
                value={loginId}
                onChange={ev =>
                    setLoginId(ev.target.value)
                }
            />
            <input
                type="text"
                value={password}
                onChange={ev =>
                    setPassword(ev.target.value)
                }
            />
            <button onClick={Login} className="bg-amber-800">ログイン</button>
        </PrivateLayout>
    )
}

export default SSG
