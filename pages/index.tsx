import Head from 'next/head'
import Discord from '../components/discord/Discord'
import Facebook from '../components/facebook/Facebook'

// Cool idea, what if I copied a bunch of
// big website UI's for my portfolio
// and used those designs to show off my projects

// I could copy discord,

export default function Home() {
  const firstPageToVisit = Math.floor(Math.random() * (2 - 1 + 1)) + 1
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {firstPageToVisit === 1 && <Discord />}
      {firstPageToVisit === 2 && <Facebook />}
    </>
  )
}
