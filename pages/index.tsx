import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { GetStaticPaths } from 'next'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
     
    </div>
  )
}
export default Home
