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
                  <i className="fa-solid fa-envelope text-ln-lime"></i>
                </div>
                <div>
                  <p className="font-display text-[10px] uppercase tracking-widest text-white/30 mb-1">Email</p>
                  <a href="mailto:youssoufadlani@gmail.com" className="font-display text-base text-white hover:text-ln-lime transition-colors uppercase">youssoufadlani@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-ln-lime/50 transition-colors duration-500">
                  <i className="fa-solid fa-location-dot text-ln-lime"></i>
                </div>
                <div>
                  <p className="font-display text-[10px] uppercase tracking-widest text-white/30 mb-1">Localisation</p>
                  <p className="font-display text-base text-white uppercase">Temara, Maroc</p>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <a href="https://github.com/Youssef-adl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 hover:border-ln-lime hover:text-ln-lime transition-all duration-300">
                  <i className="fa-brands fa-github text-sm"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 hover:border-ln-lime hover:text-ln-lime transition-all duration-300">
                  <i className="fa-brands fa-linkedin-in text-sm"></i>
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
                Envoyer <i className="fa-solid fa-paper-plane text-[10px]"></i>
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
