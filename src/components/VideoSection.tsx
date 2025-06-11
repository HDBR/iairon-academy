
import React from 'react';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="section-spacing container-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-block glass-card px-6 py-3 rounded-full mb-6 animate-shimmer">
            <span className="text-tech-blue font-medium flex items-center gap-2">
              <Play className="w-4 h-4" />
              Assista ao vídeo de apresentação
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Descubra o LABVIDIA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como você pode dominar o VEO 3 e transformar sua carreira com vídeos criados por IA
          </p>
        </div>

        <Card className="glass-card p-2">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/6gpp4wwXjOc"
              title="LABVIDIA - Laboratório de Vídeos com IA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoSection;
