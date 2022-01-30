import Head from 'next/head'

// Cool idea, what if I copied a bunch of
// big website UI's for my portfolio
// and used those designs to show off my projects

// I could copy discord,

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>Personal Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </>
  )
}
