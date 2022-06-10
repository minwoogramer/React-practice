import Head from "next/head"



export default function seo({title}){

    return (
            <Head>
                <title>{title}| Next Movies</title>
            </Head>
      
    )
}