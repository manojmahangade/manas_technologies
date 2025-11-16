import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('sent');
        setName(''); setEmail(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <>
      <Head>
        <title>Contact — Manas Technologies</title>
        <meta name="description" content="Get in touch with Manas Technologies" />
      </Head>

      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-gray-600 mb-8">Send us a message and we'll get back to you.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 block w-full border rounded-md p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 block w-full border rounded-md p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="mt-1 block w-full border rounded-md p-2" rows={6} required />
          </div>
          <div>
            <button type="submit" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md">{status==='sending'? 'Sending...' : 'Send message'}</button>
            {status==='sent' && <span className="ml-4 text-green-600">Message sent — thank you!</span>}
            {status==='error' && <span className="ml-4 text-red-600">Sending failed. Try again later.</span>}
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}