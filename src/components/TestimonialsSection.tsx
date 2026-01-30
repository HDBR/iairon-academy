import React from "react";

// Local testimonial images
import testimonial2 from '@/assets/testimonials/2.webp';
import testimonial3 from '@/assets/testimonials/3.webp';
import testimonial4 from '@/assets/testimonials/4.webp';
import testimonial5 from '@/assets/testimonials/5.webp';
import testimonial6 from '@/assets/testimonials/6.webp';
import testimonial7 from '@/assets/testimonials/7.webp';
import testimonial8 from '@/assets/testimonials/8.webp';
import testimonial9 from '@/assets/testimonials/9.webp';
import testimonial10 from '@/assets/testimonials/10.webp';
import testimonial11 from '@/assets/testimonials/11.webp';
import testimonial12 from '@/assets/testimonials/12.webp';
import testimonial13 from '@/assets/testimonials/13.webp';
import testimonial14 from '@/assets/testimonials/14.webp';
import testimonial15 from '@/assets/testimonials/15.webp';
import testimonial16 from '@/assets/testimonials/16.webp';

const testimonials = [
  {
    id: 1,
    image: testimonial2,
    alt: "Depoimento de aluno sobre resultados com IA"
  },
  {
    id: 2,
    image: testimonial3,
    alt: "Depoimento de aluno sobre faturamento"
  },
  {
    id: 3,
    image: testimonial4,
    alt: "Depoimento de aluno sobre transformação na carreira"
  },
  {
    id: 4,
    image: testimonial5,
    alt: "Depoimento de aluno sobre primeiros resultados"
  },
  {
    id: 5,
    image: testimonial6,
    alt: "Depoimento de aluno sobre ganhos financeiros"
  },
  {
    id: 6,
    image: testimonial7,
    alt: "Depoimento de aluno sobre metodologia eficiente"
  },
  {
    id: 7,
    image: testimonial8,
    alt: "Depoimento de aluno sobre suporte excepcional"
  },
  {
    id: 8,
    image: testimonial10,
    alt: "Depoimento de aluno sobre rapidez dos resultados"
  },
  {
    id: 9,
    image: testimonial9,
    alt: "Depoimento de aluno sobre qualidade do conteúdo"
  },
  {
    id: 10,
    image: testimonial11,
    alt: "Depoimento de aluno sobre mudança de vida"
  },
  {
    id: 11,
    image: testimonial13,
    alt: "Depoimento de aluno sobre satisfação com curso"
  },
  {
    id: 12,
    image: testimonial12,
    alt: "Depoimento de aluno sobre aplicação prática"
  },
  {
    id: 13,
    image: testimonial14,
    alt: "Depoimento de aluno sobre evolução profissional"
  },
  {
    id: 14,
    image: testimonial15,
    alt: "Depoimento de aluno sobre retorno do investimento"
  },
  {
    id: 15,
    image: testimonial16,
    alt: "Depoimento de aluno sobre recomendação do curso"
  }
];

export const TestimonialsSection = () => {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="w-full px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Com esse conhecimento, <span className="gradient-text-accent">milhares de pessoas</span> tem transformado a própria vida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esses são os resultados reais de alguns dos nossos mais de <span className="font-bold text-tech-blue">10 mil alunos</span>
          </p>
        </div>

        {/* Testimonials Mural - Masonry Style */}
        <div className="relative">
          <div className="overflow-hidden h-[750px] md:h-[900px]">
            <div className="animate-scroll hover:[animation-play-state:paused] w-[200%]">
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-7 [column-gap:0.5rem]">
                {duplicatedTestimonials.map((testimonial, index) => {
                  return (
                    <div
                      key={`${testimonial.id}-${index}`}
                      className="break-inside-avoid group transition-all duration-300 hover:scale-[1.01] mb-3"
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 border border-white/10"
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Side gradient overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          
          {/* Bottom gradient overlay - stronger to mask any remaining cuts */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
      
    </section>
  );
};