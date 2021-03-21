import React from "react"
import {Global} from './styles'
import Head from 'next/head'

interface MainLayoutProps {
    title: string
    children: any[]
}

export function MainLayout({children, title}:MainLayoutProps){
    return(
        <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
        </Head>
        <Global/>
        <main>  
            {children}
        </main>
        </>
    )
}