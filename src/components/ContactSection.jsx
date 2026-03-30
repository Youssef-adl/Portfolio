import React, { useState } from 'react';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    // Bot protection (honeypot)
    if (data.get("_gotcha")) {
      return;
    }

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "mgopagwl";
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setFormStatus("Merci ! Votre message a été envoyé.");
      form.reset();
    } else {
      setFormStatus("Erreur. Veuillez réessayer plus tard.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-ln-grey-2 relative overflow-hidden">
      <div className="ln-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Contact Info */}
          <div className="w-full lg:w-2/5 reveal-on-scroll">
            <div className="flex items-center gap-3 mb-5">
              <div className="ln-divider" aria-hidden="true" />
              <span className="ln-label text-ln-lime">Contact</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-700 leading-none tracking-tight text-white mb-10">
              Parlons de votre <span className="text-ln-lime">Projet</span>
            </h2>
            <p className="font-body text-white/40 mb-12 max-w-sm">
              Disponible pour de nouvelles opportunités en développement Full-Stack et créatif.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-ln-lime/50 transition-colors duration-500">
                  <svg className="w-5 h-5 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-[10px] uppercase tracking-widest text-white/30 mb-1">Email</p>
                  <a href="mailto:youssoufadlani@gmail.com" className="font-display text-base text-white hover:text-ln-lime transition-colors uppercase">youssoufadlani@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-ln-lime/50 transition-colors duration-500">
                  <svg className="w-5 h-5 text-ln-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-[10px] uppercase tracking-widest text-white/30 mb-1">Localisation</p>
                  <p className="font-display text-base text-white uppercase">Temara, Maroc</p>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <a href="https://github.com/Youssef-adl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 hover:border-ln-lime hover:text-ln-lime transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 hover:border-ln-lime hover:text-ln-lime transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5 bg-ln-dark-green/30 border border-white/5 p-8 md:p-12 reveal-on-scroll">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-display text-[10px] uppercase tracking-[0.2em] text-white/40">Nom Complet</label>
                  <input required type="text" name="name" id="name" placeholder="John Doe" className="bg-white/5 border-b border-white/10 py-3 px-1 text-white focus:border-ln-lime outline-none transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-display text-[10px] uppercase tracking-[0.2em] text-white/40">Email</label>
                  <input required type="email" name="email" id="email" placeholder="john@example.com" className="bg-white/5 border-b border-white/10 py-3 px-1 text-white focus:border-ln-lime outline-none transition-colors duration-300" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-display text-[10px] uppercase tracking-[0.2em] text-white/40">Sujet</label>
                <input required type="text" name="subject" id="subject" placeholder="Collaboration, Recrutement..." className="bg-white/5 border-b border-white/10 py-3 px-1 text-white focus:border-ln-lime outline-none transition-colors duration-300" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-display text-[10px] uppercase tracking-[0.2em] text-white/40">Message</label>
                <textarea required name="message" id="message" rows="5" placeholder="Votre message ici..." className="bg-white/5 border border-white/10 p-4 text-white focus:border-ln-lime outline-none transition-colors duration-300 resize-none"></textarea>
              </div>

              {/* Honeypot field - Hidden from users */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <button type="submit" className="btn-ln-primary w-full flex items-center justify-center gap-3 py-4 mt-4 uppercase text-[10px] tracking-[0.3em] font-700">
                Envoyer 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>

              {formStatus && (
                <p className={`mt-4 text-[11px] font-display uppercase tracking-widest text-center ${formStatus.includes('Erreur') ? 'text-red-400' : 'text-ln-lime'}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
