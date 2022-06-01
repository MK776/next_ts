import { NextPage } from 'next'
import Link from 'next/link'

import PrivateLayout from '@/layout/private'
import utilStyles from '/styles/utils.module.css'

const Home:NextPage = () => {
    return (
        <PrivateLayout home={true}>
            <ul>
                <li className={utilStyles.listItem}>
                    <Link href={'/ssr'}>
                        <a>ssr</a>
                    </Link>
                </li>
                <li className={utilStyles.listItem}>
                    <Link href={'/ssg'}>
                        <a>ssg</a>
                    </Link>
                </li>
                <li className={utilStyles.listItem}>
                    <Link href={'/isr'}>
                        <a>isr</a>
                    </Link>
                </li>
            </ul>
        </PrivateLayout>
    )
}

export default Home