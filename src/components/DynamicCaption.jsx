import { useEffect, useState } from 'react';

export default function DynamicCaption({ sections }) {
  const [currentCaption, setCurrentCaption] = useState(sections[0].caption);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentCaption(section.caption);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="fixed top-12 left-12 z-[100] hidden lg:block">
      <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A]/50 rotate-[-90deg] origin-left translate-y-24">
        {currentCaption}
      </div>
    </div>
  );
}
