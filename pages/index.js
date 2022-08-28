import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Full Stack Book JWT</title>
        <meta name="description" content="Full Stack Book JWT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Home</h1>
        <p><Link href="/signup">Sign Up</Link></p>
        <p><Link href="/signin">Sign In</Link></p>
      </Layout>
    </div>
  )
}
