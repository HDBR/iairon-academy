import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';

// Local course images
import carouselGroup1 from "@/assets/carousel-group-1.webp";
import carouselLayer1 from "@/assets/carousel-layer-1.webp";
import carouselVideoSample from "@/assets/carousel-video-sample.webp";
import sessaoFotosIa from '@/assets/courses/sessao-fotos-ia.webp';
import labvidiaCapa from '@/assets/courses/labvidia-capa.webp';
import capaMasterclass from '@/assets/courses/capa-masterclass.webp';
import clones from '@/assets/courses/clones.webp';
import aigram from '@/assets/courses/aigram.webp';
import agentesExpress from '@/assets/courses/agentes-express.webp';

const galleryData: GalleryItem[] = [{
  title: 'Sessao de Fotos com IA',
  description: 'Aprenda a criar fotos profissionais incriveis utilizando inteligencia artificial avancada',
  imageUrl: sessaoFotosIa,
  category: 'Fotografia IA'
}, {
  title: 'LABVIDIA Completo',
  description: 'O curso principal com todas as estrategias para monetizar com videos de IA',
  imageUrl: labvidiaCapa,
  category: 'Curso Principal'
}, {
  title: 'Estrategias Avancadas',
  description: 'Tecnicas profissionais para maximizar seus resultados e lucros com IA',
  imageUrl: carouselGroup1,
  category: 'Estrategias'
}, {
  title: 'Templates Exclusivos',
  description: 'Modelos prontos e personalizaveis para acelerar sua producao de conteudo',
  imageUrl: carouselLayer1,
  category: 'Templates'
}, {
  title: 'Masterclass Completa',
  description: 'Aulas detalhadas com casos reais e aplicacoes praticas do mercado',
  imageUrl: capaMasterclass,
  category: 'Masterclass'
}, {
  title: 'Exemplos Praticos',
  description: 'Videos demonstrativos mostrando cada passo da criacao a monetizacao',
  imageUrl: carouselVideoSample,
  category: 'Demonstracoes'
}, {
  title: 'Clones de Sucesso',
  description: 'Como criar e gerenciar multiplas personas para diversificar seus ganhos',
  imageUrl: clones,
  category: 'Personas IA'
}, {
  title: 'Cursos AIgram',
  description: 'Especializacao em marketing digital e crescimento organico com IA',
  imageUrl: aigram,
  category: 'Marketing IA'
}, {
  title: 'Agentes Express',
  description: 'Automacao completa para criar sistemas de vendas com inteligencia artificial',
  imageUrl: agentesExpress,
  category: 'Automacao'
}];
export const CircularGallerySection = () => {
  return (
    <div className="w-full text-foreground relative" style={{ height: '200vh' }}>
      {/* Top Gradient Mask - fusion with section above */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />

      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        {/* 3D Circular Gallery */}
        <div className="w-full h-full">
          <CircularGallery items={galleryData} radius={500} autoRotateSpeed={0.05} />
        </div>

        {/* Bottom Gradient - fusion with footer */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
};