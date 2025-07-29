import React from "react";

const testimonials = [
  {
    id: 1,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/2.webp",
    alt: "Depoimento de aluno sobre resultados com IA"
  },
  {
    id: 2,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/3.webp",
    alt: "Depoimento de aluno sobre faturamento"
  },
  {
    id: 3,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/4.webp",
    alt: "Depoimento de aluno sobre transformação na carreira"
  },
  {
    id: 4,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/5.webp",
    alt: "Depoimento de aluno sobre primeiros resultados"
  },
  {
    id: 5,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/6.webp",
    alt: "Depoimento de aluno sobre ganhos financeiros"
  },
  {
    id: 6,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/7.webp",
    alt: "Depoimento de aluno sobre metodologia eficiente"
  },
  {
    id: 7,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/08.webp",
    alt: "Depoimento de aluno sobre suporte excepcional"
  },
  {
    id: 8,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/10.webp",
    alt: "Depoimento de aluno sobre rapidez dos resultados"
  },
  {
    id: 9,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/09.webp",
    alt: "Depoimento de aluno sobre qualidade do conteúdo"
  },
  {
    id: 10,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/11.webp",
    alt: "Depoimento de aluno sobre mudança de vida"
  },
  {
    id: 11,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/13.webp",
    alt: "Depoimento de aluno sobre satisfação com curso"
  },
  {
    id: 12,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/12.webp",
    alt: "Depoimento de aluno sobre aplicação prática"
  },
  {
    id: 13,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/14.webp",
    alt: "Depoimento de aluno sobre evolução profissional"
  },
  {
    id: 14,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/15.webp",
    alt: "Depoimento de aluno sobre retorno do investimento"
  },
  {
    id: 15,
    image: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/16.webp",
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
            O que nossos alunos estão falando
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja os resultados reais dos nossos alunos direto das conversas
          </p>
        </div>

        {/* Testimonials Mural - Masonry Style */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="animate-scroll hover:[animation-play-state:paused] w-[200%]">
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-7 gap-x-px gap-y-2 space-y-2">
                {duplicatedTestimonials.map((testimonial, index) => {
                  return (
                    <div 
                      key={`${testimonial.id}-${index}`}
                      className="break-inside-avoid mb-2 group transition-all duration-300 hover:scale-[1.02]"
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-full max-w-[240px] h-auto object-cover rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 border border-white/10"
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
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
      
    </section>
  );
};