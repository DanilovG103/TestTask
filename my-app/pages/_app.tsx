import NextNprogress from 'nextjs-progressbar';
import {Global} from '../components/styles'

export default function MyApp({Component,pageProps}){
    return (
    <>
    <Global/>
    <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
    />
    <Component {...pageProps}/>
    </>
    )
}