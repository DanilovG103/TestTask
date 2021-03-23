import React,{ReactNode} from "react"
import Head from 'next/head'

interface MainLayoutProps {
    title: string
    children: ReactNode
}

export function MainLayout({children, title}:MainLayoutProps){
    return(
        <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
        </Head>
        <main>  
            {children}
        </main>
        </>
    )
}