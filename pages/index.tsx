import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { GetStaticPaths } from 'next'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>Mohit's Portfolio</title>
      </Head>
      <Header />
      <section id="hero">
        <Hero />
      </section>

    </div>
  )
}
export default Home
