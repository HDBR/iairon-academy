import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="glass-card glass-card-hover border-primary/20 p-4 relative group transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Screenshot */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass-card p-8 rounded-2xl border-primary/20">
          <p className="text-xl font-bold text-foreground mb-2">
            Quer ser o próximo caso de sucesso?
          </p>
          <p className="text-muted-foreground mb-6">
            Junte-se a centenas de alunos que já estão transformando suas carreiras
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-medium">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 estrelas</span>
            <span className="text-muted-foreground">•</span>
            <span>500+ alunos ativos</span>
          </div>
        </div>
      </div>
    </section>
  );
};