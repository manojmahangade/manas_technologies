import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseStudy() {
  const { query } = useRouter();
  const slug = query.slug as string;
  return (
    <>
      <Head>
        <title>{slug ? `${slug.replace(/-/g,' ')} — Case Study` : 'Case Study'} — Manas</title>
      </Head>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-4">{slug?.replace(/-/g, ' ')}</h1>
        <p className="text-gray-600 mb-6">In-depth case study content will go here. This is placeholder content for the scaffold.</p>
        <div className="prose">
          <h2>Problem</h2>
          <p>Describe the client problem.</p>
          <h2>Solution</h2>
          <p>Describe the solution we implemented.</p>
          <h2>Outcome</h2>
          <p>Summarize the impact and results.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}