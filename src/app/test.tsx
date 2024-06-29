'use client'
import {auth} from '../auth'
import Image from 'next/image'
export default function a ({user}:any) {
    return (
        <div>
           {
            user?.name
           }
           {
            user?.email
           }
           {
            user?.image
           }
           <div>e</div>
           {user?.image && <Image src={user?.image} alt='' width={100} height={100} ></Image>}
        </div>
    )
}