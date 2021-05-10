import Head from 'next/head'
import MetaData from '../components/Helmetcomponent'

export default function Home() {
  return (
    <div className="App">
      {/*<Head>
        <title>dubani agency</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>*/}

      <MetaData title={"Home"} description={"Acceuil"} />

      <main className="main">
        wedo
      </main>

    </div>
  )
}
