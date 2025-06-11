import React from 'react';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: "ySXnIZIddpM",
      title: "Clone de Voz com IA - Tutorial Completo",
      description: "Aprenda a criar clones de voz profissionais"
    },
    {
      id: "ktmn0GwgVh4", 
      title: "Vídeos Animados com VEO 3",
      description: "Criação de vídeos animados usando IA"
    },
    {
      id: "9bZkp7q19f0",
      title: "Automação de Conteúdo para Redes Sociais", 
      description: "Como automatizar sua produção de conteúdo"
    }
  ];

  return (
    <section className="section-spacing container-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-block glass-card px-6 py-3 rounded-full mb-6 animate-shimmer">
            <span className="text-tech-blue font-medium flex items-center gap-2">
              <Play className="w-4 h-4" />
              Portfólio de resultados
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Veja o que você vai aprender a fazer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exemplos reais de vídeos criados com IA que você dominará após o LABVIDIA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="glass-card p-3 group hover:scale-105 transition-transform duration-300">
              <div className="video-container mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
              <div className="px-2">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-tech-blue transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
