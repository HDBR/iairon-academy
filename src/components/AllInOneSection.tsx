import { Card } from "@/components/ui/card";
import { Check, Target, BookOpen, Users, Trophy } from "lucide-react";
import allInOneImage from "@/assets/all-in-one-section.webp";

export const AllInOneSection = () => {
  const benefits = [
    {
      icon: <Target className="w-5 h-5" />,
      text: "Estratégias práticas e aplicáveis"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Conteúdo atualizado constantemente"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Suporte direto com especialistas"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      text: "Certificado de conclusão incluso"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="glass-card p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Imagem */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={allInOneImage} 
                  alt="Tudo o que você precisa em um só lugar - Interface do curso LABVIDIA"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="gradient-text">
                    Tudo o que você precisa em um só lugar
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Uma solução completa e integrada que reúne todas as ferramentas, 
                  conhecimentos e recursos necessários para transformar sua carreira 
                  e alcançar resultados extraordinários.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      {benefit.icon}
                    </div>
                    <span className="text-foreground font-medium">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Check className="w-5 h-5" />
                  <span>Acesso imediato após a compra</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};