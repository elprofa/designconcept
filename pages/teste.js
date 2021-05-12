import Head from 'next/head'
import ModalDetail from '../components/ModalDetail'
import MetaData from '../components/Helmetcomponent'

export default function Teste() {
  return (
    <div className="App">
      <Head>
        <title>Design | teste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <ModalDetail/>
    

    </div>
  )
}
