import Head from 'next/head';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <> 
      <Head>
        <title>Manas Technologies</title>
        <meta name="description" content="We build modern digital products." />
      </Head>

      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Hero />
        <section id="services" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold mb-6">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">Strategy & Consultancy</div>
            <div className="p-6 bg-white rounded-lg shadow">Product Design</div>
            <div className="p-6 bg-white rounded-lg shadow">Engineering</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}