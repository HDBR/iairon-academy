import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "/lovable-uploads/563c58f9-4f85-4709-9e09-f292955d81db.png",
    alt: "Depoimento de aluno sobre resultados com IA"
  },
  {
    id: 2,
    image: "/lovable-uploads/6a7a0740-082a-461e-a486-8ef7542d838e.png",
    alt: "Depoimento de aluno sobre faturamento"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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