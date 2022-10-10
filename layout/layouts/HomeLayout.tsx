import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
interface Props {
    children: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Guilad Portfolios</title>
                <meta name="description" content="Portafolio of Guilad a frontend developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            {children}
        </>
    )
}

export default HomeLayout