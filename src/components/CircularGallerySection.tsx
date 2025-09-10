import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';
import carouselGroup1 from "@/assets/carousel-group-1.webp";
import carouselLayer1 from "@/assets/carousel-layer-1.webp";
import carouselVideoSample from "@/assets/carousel-video-sample.webp";

const galleryData: GalleryItem[] = [
  {
    title: 'Sessão de Fotos com IA',
    description: 'Aprenda a criar fotos profissionais incríveis utilizando inteligência artificial avançada',
    imageUrl: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20sessao%20de%20fotos%20com%20IA.webp",
    category: 'Fotografia IA'
  },
  {
    title: 'LABVIDIA Completo',
    description: 'O curso principal com todas as estratégias para monetizar com vídeos de IA',
    imageUrl: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/labvidia%20capa.webp",
    category: 'Curso Principal'
  },
  {
    title: 'Estratégias Avançadas',
    description: 'Técnicas profissionais para maximizar seus resultados e lucros com IA',
    imageUrl: carouselGroup1,
    category: 'Estratégias'
  },
  {
    title: 'Templates Exclusivos',
    description: 'Modelos prontos e personalizáveis para acelerar sua produção de conteúdo',
    imageUrl: carouselLayer1,
    category: 'Templates'
  },
  {
    title: 'Masterclass Completa',
    description: 'Aulas detalhadas com casos reais e aplicações práticas do mercado',
    imageUrl: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%281%29.webp",
    category: 'Masterclass'
  },
  {
    title: 'Exemplos Práticos',
    description: 'Vídeos demonstrativos mostrando cada passo da criação à monetização',
    imageUrl: carouselVideoSample,
    category: 'Demonstrações'
  },
  {
    title: 'Clones de Sucesso',
    description: 'Como criar e gerenciar múltiplas personas para diversificar seus ganhos',
    imageUrl: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/CLONES.webp",
    category: 'Personas IA'
  },
  {
    title: 'Cursos AIgram',
    description: 'Especialização em marketing digital e crescimento orgânico com IA',
    imageUrl: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20cursos%20aigram.webp",
    category: 'Marketing IA'
  },
  {
    title: 'Agentes Express',
    description: 'Automação completa para criar sistemas de vendas com inteligência artificial',
    imageUrl: "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20agentes%20express.webp",
    category: 'Automação'
  }
];

export const CircularGallerySection = () => {
  return (
    <div className="w-full bg-background text-foreground" style={{ height: '400vh' }}>
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]"></div>
        
        {/* Title Section */}
        <div className="text-center mb-8 absolute top-16 z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">
              Explore Todo o Conteúdo
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Role a página para navegar pelo carrossel 3D e descobrir todos os cursos e materiais inclusos
          </p>
        </div>
        
        {/* 3D Circular Gallery */}
        <div className="w-full h-full">
          <CircularGallery 
            items={galleryData} 
            radius={500}
            autoRotateSpeed={0.05}
          />
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
};