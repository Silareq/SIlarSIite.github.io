
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 1500);
    setTimeout(() => {
      setStatus('idle');
      (e.target as HTMLFormElement).reset();
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-5xl font-display text-black dark:text-white mb-4">
          Get In <span className="text-neon-red">Touch</span>
        </h2>
        <p className="text-gray-800 dark:text-gray-400 mb-8">
          For bookings, collaborations, or other inquiries, please use the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-4 bg-white dark:bg-gray-900 text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-red transition-all" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-4 bg-white dark:bg-gray-900 text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-red transition-all" />
          </div>
          <textarea name="message" placeholder="Your Message" rows={5} required className="w-full p-4 bg-white dark:bg-gray-900 text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-red transition-all"></textarea>
          <div className="relative">
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full sm:w-auto px-12 py-4 font-display text-xl tracking-wider bg-neon-red text-white rounded-lg hover:bg-red-700 transition-all duration-300 disabled:bg-gray-500"
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Sent!'}
            </button>
            {status === 'sending' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Send className="text-white animate-fly-away" />
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
