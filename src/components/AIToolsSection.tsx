import React from 'react';
import { Card } from '@/components/ui/card';

// Import available brand logos
import chatgptLogo from '@/assets/brands/chatgpt.svg';
import geminiLogo from '@/assets/brands/gemini.svg';
import claudeLogo from '@/assets/brands/claude.svg';

interface AITool {
  name: string;
  logo?: string;
  hasLogo: boolean;
}

const AIToolsSection = () => {
  const aiTools: AITool[] = [
    { name: 'ChatGPT', logo: chatgptLogo, hasLogo: true },
    { name: 'Gemini', logo: geminiLogo, hasLogo: true },
    { name: 'Claude', logo: claudeLogo, hasLogo: true },
    { name: 'HeyGen', hasLogo: false },
    { name: 'Lovart', hasLogo: false },
    { name: 'Criart', hasLogo: false },
    { name: 'Lovable', hasLogo: false },
    { name: 'Gamma', hasLogo: false },
    { name: 'ElevenLabs', hasLogo: false },
    { name: 'Flow', hasLogo: false },
    { name: 'Dream Face', hasLogo: false },
    { name: 'Runway', hasLogo: false },
    { name: 'VEO 3', hasLogo: false },
    { name: 'Sora 2', hasLogo: false },
    { name: 'Midjourney', hasLogo: false }
  ];

  return (
    <section className="section-spacing container-padding">
      <div className="section-divider mb-12"></div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Voce sempre atualizado com o mercado. Sempre.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tenha acesso, em primeira mao, a tudo que acontece no mercado.
          </p>
        </div>

        {/* AI Tools Showcase */}
        <Card className="glass-card p-8 md:p-12 border-tech-blue/20">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="glass-card px-4 py-3 md:px-6 md:py-4 rounded-full border-tech-purple/30 hover:border-tech-purple/60 transition-all duration-300 hover:scale-105 cursor-default flex items-center gap-2"
              >
                {tool.hasLogo && tool.logo ? (
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                ) : null}
                <span className="text-sm md:text-base font-medium text-foreground">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Aprenda a dominar as ferramentas mais poderosas do mercado de IA
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIToolsSection;
