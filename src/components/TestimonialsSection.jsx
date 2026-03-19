import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Thomas D.",
    role: "Propriétaire E-commerce",
    content: "Youssef a transformé notre vision en une plateforme fluide et performante. Sa maîtrise du full-stack est impressionnante.",
    img: "https://i.pravatar.cc/150?u=thomas"
  },
  {
    name: "Sophie L.",
    role: "Direction Artistique",
    content: "Une attention aux détails rare. L'expérience immersive qu'il a créée pour nous a dépassé toutes nos attentes.",
    img: "https://i.pravatar.cc/150?u=sophie"
  },
  {
    name: "Marc A.",
    role: "Chef de Projet Agile",
    content: "Excellent esprit d'équipe et force de proposition technique. Projets livrés dans les temps avec une qualité irréprochable.",
    img: "https://i.pravatar.cc/150?u=marc"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-ln-dark-green relative overflow-hidden">
      <div className="ln-container relative">
        <div className="flex flex-col items-center mb-20 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-5">
            <div className="ln-divider" aria-hidden="true" />
            <span className="ln-label">Recommandations</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-700 leading-none tracking-tight text-white text-center">
            Ce qu'ils <span className="text-ln-lime">disent</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-ln-grey-2 p-10 border border-white/5 relative group reveal-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-8 right-8 text-ln-lime/10 w-12 h-12 group-hover:text-ln-lime/20 transition-colors duration-500" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-ln-lime/20">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-700 text-white">{t.name}</h4>
                  <p className="font-display text-[10px] uppercase tracking-widest text-ln-lime/60">{t.role}</p>
                </div>
              </div>

              <p className="font-body text-white/60 text-sm leading-relaxed italic">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
