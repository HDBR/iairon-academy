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
  // Distribute testimonials across columns for balanced vertical scrolling
  const createColumns = (items: typeof testimonials, numCols: number) => {
    const columns: typeof testimonials[] = Array.from({ length: numCols }, () => []);
    items.forEach((item, index) => {
      columns[index % numCols].push(item);
    });
    return columns;
  };

  // Create responsive column layout
  const getColumns = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1536) return createColumns(testimonials, 6); // 2xl
      if (window.innerWidth >= 1280) return createColumns(testimonials, 5); // xl
      if (window.innerWidth >= 1024) return createColumns(testimonials, 4); // lg
      if (window.innerWidth >= 768) return createColumns(testimonials, 3);  // md
      if (window.innerWidth >= 640) return createColumns(testimonials, 2);  // sm
      return createColumns(testimonials, 2); // default
    }
    return createColumns(testimonials, 4); // fallback
  };

  const columns = getColumns();

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

        {/* Testimonials Carousel - Vertical Columns */}
        <div className="relative">
          <div className="overflow-hidden h-[600px]">
            <div className="flex gap-2 h-full">
              {columns.map((column, colIndex) => {
                // Create infinite scroll by tripling the content
                const infiniteColumn = [...column, ...column, ...column];
                
                return (
                  <div
                    key={colIndex}
                    className="flex-1 flex flex-col gap-3"
                    style={{
                      animation: `scroll-vertical-${colIndex % 3} ${25 + colIndex * 2}s linear infinite`,
                      animationDirection: colIndex % 2 === 0 ? 'normal' : 'reverse'
                    }}
                  >
                    {infiniteColumn.map((testimonial, index) => (
                      <div
                        key={`${testimonial.id}-${colIndex}-${index}`}
                        className="group transition-all duration-300 hover:scale-[1.02] hover:[animation-play-state:paused]"
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.alt}
                          className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 border border-white/10 max-w-[140px] mx-auto"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Top gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10"></div>
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Add custom keyframes for vertical scrolling */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-vertical-0 {
            0% { transform: translateY(0); }
            100% { transform: translateY(-66.666%); }
          }
          @keyframes scroll-vertical-1 {
            0% { transform: translateY(0); }
            100% { transform: translateY(-66.666%); }
          }
          @keyframes scroll-vertical-2 {
            0% { transform: translateY(0); }
            100% { transform: translateY(-66.666%); }
          }
        `
      }} />
    </section>
  );
};