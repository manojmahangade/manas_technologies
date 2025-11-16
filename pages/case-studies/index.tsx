import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const EXAMPLES = [
  { slug: 'modern-payments', title: 'Modern Payments Platform', excerpt: 'Built a scalable payment orchestration layer.' },
  { slug: 'health-app', title: 'Telehealth App', excerpt: 'Patient-facing telehealth application.' },
  { slug: 'analytics', title: 'Real-time Analytics', excerpt: 'Streaming analytics pipeline and dashboards.' },
];

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies — Manas Technologies</title>
        <meta name="description" content="Case studies of our work" />
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Case studies</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {EXAMPLES.map(cs => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`}> 
              <a className="block p-6 bg-white rounded shadow">
                <h3 className="font-semibold text-lg">{cs.title}</h3>
                <p className="text-gray-600 mt-2">{cs.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}