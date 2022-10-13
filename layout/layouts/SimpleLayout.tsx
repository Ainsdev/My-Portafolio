import type { NextPage } from "next";
import Head from "next/head";
import SimpleNavBar from "../components/simple/SimpleNavBar";
interface Props {
    children: React.ReactNode;
}

const SimpleLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Guilad Simple Portfolio</title>
                <meta name="description" content="Portafolio of Guilad a frontend developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SimpleNavBar />
            {children}
        </>
    )
}

export default SimpleLayout