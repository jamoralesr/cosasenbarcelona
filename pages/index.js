import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cosas en Barcelona</title>
        <meta name="description" content="App para subir contenido relacionado a lugares y actividades en Barcelona" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mt-4">
          <main className="mb-4">
            <h1 className="text-3xl font-bold underline">
              Hola Mundo!
            </h1>
          </main>
          <footer>
            <a
              href="https://siete.pm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Desarrollado con cariño desde Chile por Siete PM SpA
            </a>
          </footer>
        </div>
      </div>
    </div>
  )
}
