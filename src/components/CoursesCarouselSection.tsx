import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Video, Camera, Briefcase } from 'lucide-react';

// Course images imports - Videos track
import veo3 from '@/assets/courses/veo3.webp';
import edicaoIa from '@/assets/courses/edicao-ia.webp';
import labvidiaCapa from '@/assets/courses/labvidia-capa.webp';
import carouselVideoSample from '@/assets/carousel-video-sample.webp';

// Course images imports - Photos track
import sessaoFotosIa from '@/assets/courses/sessao-fotos-ia.webp';
import clones from '@/assets/courses/clones.webp';
import capaMasterclass from '@/assets/courses/capa-masterclass.webp';

// Course images imports - Business track
import aigram from '@/assets/courses/aigram.webp';
import agentesExpress from '@/assets/courses/agentes-express.webp';
import bannerCurso from '@/assets/courses/banner-curso.webp';

// Videos track data
const videosCourses = [
  { image: veo3, title: 'Dominando o VEO3' },
  { image: edicaoIa, title: 'Edicao com IA' },
  { image: labvidiaCapa, title: 'LABVIDIA Completo' },
  { image: carouselVideoSample, title: 'Clipes com IA' },
];

// Photos track data
const photosCourses = [
  { image: sessaoFotosIa, title: 'Sessao de Fotos com IA' },
  { image: clones, title: 'Clones Sentinela' },
  { image: capaMasterclass, title: 'Influencer de IA' },
];

// Business track data
const businessCourses = [
  { image: aigram, title: 'AIGRAM - Atendimento com IA' },
  { image: agentesExpress, title: 'Agentes Express' },
  { image: bannerCurso, title: 'Sites com IA' },
];

// Componente 1: Videos com IA - COMPLETAMENTE ISOLADO
const VideosCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <div className="mb-12">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-tech-blue/20">
            <Video className="w-5 h-5 text-tech-blue" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Videos com IA</h3>
        </div>
        <p className="text-muted-foreground">Crie videos incriveis, sem precisar aparecer.</p>
      </div>
      <div className="relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {videosCourses.map((course, idx) => (
              <CarouselItem key={idx} className="pl-2 md:pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3">
                <div className="group relative overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <img src={course.image} alt={course.title} className="w-full h-auto object-cover aspect-[4/5]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">{course.title}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 hover:bg-background border-primary/20" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/80 hover:bg-background border-primary/20" />
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

// Componente 2: Fotos com IA - COMPLETAMENTE ISOLADO
const PhotosCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  return (
    <div className="mb-12">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-tech-purple/20">
            <Camera className="w-5 h-5 text-tech-purple" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Fotos com IA</h3>
        </div>
        <p className="text-muted-foreground">Faca fotos e artes profissionais.</p>
      </div>
      <div className="relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {photosCourses.map((course, idx) => (
              <CarouselItem key={idx} className="pl-2 md:pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3">
                <div className="group relative overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <img src={course.image} alt={course.title} className="w-full h-auto object-cover aspect-[4/5]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">{course.title}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 hover:bg-background border-primary/20" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/80 hover:bg-background border-primary/20" />
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

// Componente 3: Negocios com IA - COMPLETAMENTE ISOLADO
const BusinessCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <div className="mb-0">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-tech-cyan/20">
            <Briefcase className="w-5 h-5 text-tech-cyan" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Negocios com IA</h3>
        </div>
        <p className="text-muted-foreground">Automatize e escale o seu negocio.</p>
      </div>
      <div className="relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {businessCourses.map((course, idx) => (
              <CarouselItem key={idx} className="pl-2 md:pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3">
                <div className="group relative overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <img src={course.image} alt={course.title} className="w-full h-auto object-cover aspect-[4/5]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">{course.title}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 hover:bg-background border-primary/20" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/80 hover:bg-background border-primary/20" />
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

const CoursesCarouselSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing container-padding">
      <div className="section-divider mb-12"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Tudo que voce ja viu de IA por ai, vai aprender aqui.
          </h2>
        </div>

        {/* 3 carrosseis COMPLETAMENTE separados */}
        <VideosCarousel />
        <PhotosCarousel />
        <BusinessCarousel />

        <div className="text-center mt-12">
          <button
            onClick={scrollToPricing}
            className="cta-button px-8 py-4 text-lg font-bold text-white border-0 transition-all duration-300 rounded-lg"
          >
            GARANTIR MINHA VAGA AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesCarouselSection;
