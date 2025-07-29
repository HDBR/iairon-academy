import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20sessao%20de%20fotos%20com%20IA.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/labvidia%20capa.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/replay%281%29%281%29.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%281%29.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/CLONES.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20cursos%20aigram.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20agentes%20express.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/pack%20capa.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/banner%20curso.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/banner%20curso%20%281%29.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/capa%20veo3.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/Sites%20com%20IA.webp",
  "https://nyc3.digitaloceanspaces.com/club.greenn/media/31585/edicao%20com%20IA.webp"
];

export const ImmediateAccessSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="relative group">
                    <div className="glass-card p-2 h-full hover:scale-105 transition-all duration-300">
                      <img
                        src={image}
                        alt={`Conteúdo ${index + 1}`}
                        className="w-full max-h-72 md:max-h-80 object-contain rounded-lg shadow-lg"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 hover:bg-background border-primary/20 text-primary hover:text-primary-foreground hover:bg-primary" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 hover:bg-background border-primary/20 text-primary hover:text-primary-foreground hover:bg-primary" />
          </Carousel>
        </div>

        {/* Bottom gradient effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};