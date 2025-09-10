import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import carouselGroup1 from "@/assets/carousel-group-1.webp";
import carouselLayer1 from "@/assets/carousel-layer-1.webp";
import carouselVideoSample from "@/assets/carousel-video-sample.webp";

const images = [
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20sessao%20de%20fotos%20com%20IA.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/labvidia%20capa.webp",
  carouselGroup1,
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/replay%281%29%281%29.webp",
  carouselLayer1,
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%281%29.webp",
  carouselVideoSample,
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/CLONES.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20cursos%20aigram.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20agentes%20express.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20veo3.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/Sites%20com%20IA.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/edicao%20com%20IA.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/ia%20para%20produtos%20fisicos_.webp"
];

export const ImmediateAccessSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Tenha Acesso Imediato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que você vai receber assim que finalizar sua inscrição
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-7xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
              containScroll: "trimSnaps",
              dragFree: true,
              duration: 20,
            }}
          >
            <CarouselContent className="-ml-1">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-1 min-w-0" style={{ flexBasis: 'auto' }}>
                  <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]">
                    <img
                      src={image}
                      alt={`Conteúdo ${index + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 hover:bg-background border-primary/20 text-primary hover:text-primary-foreground hover:bg-primary z-10" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 hover:bg-background border-primary/20 text-primary hover:text-primary-foreground hover:bg-primary z-10" />
          </Carousel>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* Bottom gradient effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};