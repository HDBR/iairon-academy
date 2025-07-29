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
  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 8);
  const secondRow = testimonials.slice(8, 15);
  
  // Duplicate for infinite scroll effect
  const duplicatedFirstRow = [...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            O que nossos alunos estão falando
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja os resultados reais dos nossos alunos direto das conversas
          </p>
        </div>

        {/* Two-Level Testimonials Carousel */}
        <div className="relative space-y-6">
          {/* First Row - Left to Right */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
              {duplicatedFirstRow.map((testimonial, index) => (
                <div 
                  key={`first-${testimonial.id}-${index}`}
                  className="flex-shrink-0 group transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-[280px] h-auto object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-reverse hover:[animation-play-state:paused]">
              {duplicatedSecondRow.map((testimonial, index) => (
                <div 
                  key={`second-${testimonial.id}-${index}`}
                  className="flex-shrink-0 group transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-[280px] h-auto object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
      
    </section>
  );
};