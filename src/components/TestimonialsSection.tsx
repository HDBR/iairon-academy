import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alan Velodrome",
    role: "Fotógrafo",
    content: "Acabei de fechar com um cliente que faço tráfego pago aqui da cidade, um ensaio fotográfico dos hambúrgueres do bar dele, fotógrafo cobrou R$1400, cobrei R$800 e fechei! Olha que estou fazendo pelo GPT ainda hein. Já pagou o curso! Ta aí as frutas baixas. 🔥👏 Em 10 minutos ajustando gerei a primeira foto e foi aprovado!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    highlight: "R$800 em 10 minutos"
  },
  {
    name: "Marcos Silva",
    role: "Designer",
    content: "Eu havia comprado uma pós em IA de outra empresa. Comecei as aulas. Vi que era muita teoria e pouca prática. Estava querendo desistir e pedi reembolso. Quando vi o LABVIDIA, pensei: vou tentar mais uma vez. E foi a melhor decisão! Muito prático e direto ao ponto.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    highlight: "Muito prático e direto"
  },
  {
    name: "Carla Mendes",
    role: "Produtora de Conteúdo",
    content: "Consegui criar vídeos profissionais que antes custavam milhares para produzir. O VEO 3 é revolucionário e o curso me ensinou tudo que precisava saber. Já recuperei o investimento na primeira semana!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    highlight: "Recuperei o investimento na primeira semana"
  },
  {
    name: "Roberto Santos",
    role: "Empreendedor",
    content: "O LABVIDIA não é só sobre tecnologia, é sobre transformar sua forma de trabalhar. Hoje uso IA para 90% dos meus vídeos e triplicuei minha produtividade. O futuro chegou e eu estava preparado!",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    highlight: "Triplicuei minha produtividade"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Depoimentos dos Nossos Alunos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja os resultados reais de quem já está dominando o VEO 3 e faturando alto com IA
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass-card glass-card-hover border-primary/20 p-8 relative group transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-0">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-medium">
                  "{testimonial.content}"
                </p>

                {/* Highlight */}
                {testimonial.highlight && (
                  <div className="inline-block glass-card px-4 py-2 rounded-full mb-6">
                    <span className="text-primary font-bold text-sm">
                      ✨ {testimonial.highlight}
                    </span>
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
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