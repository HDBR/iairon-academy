import React, { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Zap, Check, X, AlertTriangle, Star, Users, Award, Video, Camera, Briefcase } from 'lucide-react';
import BackgroundEffects from '@/components/BackgroundEffects';
import logoMegaCombo from '@/assets/logo-megacombo-v01.png';
import heroDesktop from '@/assets/img_pettrus_hero_desktop.webp';
import heroMobile from '@/assets/img_pettrus_hero_mobile.webp';
import pettrusImg from '@/assets/mentor/pettrus.webp';

// Course images - Videos track
import veo3 from '@/assets/courses/veo3.webp';
import edicaoIa from '@/assets/courses/edicao-ia.webp';
import labvidiaCapa from '@/assets/courses/labvidia-capa.webp';
import carouselVideoSample from '@/assets/carousel-video-sample.webp';

// Course images - Photos track
import sessaoFotosIa from '@/assets/courses/sessao-fotos-ia.webp';
import clones from '@/assets/courses/clones.webp';
import capaMasterclass from '@/assets/courses/capa-masterclass.webp';

// Course images - Business track
import aigram from '@/assets/courses/aigram.webp';
import agentesExpress from '@/assets/courses/agentes-express.webp';
import bannerCurso from '@/assets/courses/banner-curso.webp';

const CHECKOUT_URL = 'https://payfast.greenn.com.br/gqhvkuu/offer/6OAqtv';

const handleCheckout = () => {
  window.open(CHECKOUT_URL, '_blank');
};

const courses = [
  { name: 'Vídeos Virais', price: 'R$ 97,00' },
  { name: 'Seu Influencer de IA 100% Consistente', price: 'R$ 197,00' },
  { name: 'Pack de Prompts VEO3', price: 'R$ 97,00' },
  { name: 'Desafio R$ 10K com IA', price: 'R$ 197,00' },
  { name: 'Dominando o VEO3', price: 'R$ 147,00' },
  { name: 'AIGRAM — Atendimento com IA', price: 'R$ 197,00' },
  { name: 'Edição de Vídeos com IA (CapCut)', price: 'R$ 97,00' },
  { name: 'Clipes com IA', price: 'R$ 147,00' },
  { name: 'Agentes Express', price: 'R$ 197,00' },
  { name: 'Áudio de IA com Sotaque', price: 'R$ 97,00' },
  { name: 'IA para Produtos Físicos', price: 'R$ 147,00' },
  { name: '4 Formas Rápidas de Fazer Dinheiro com IA em 7 dias', price: 'R$ 197,00' },
  { name: 'Efeitos de Cinema (Runway)', price: 'R$ 147,00' },
  { name: 'Clones Sentinelas com IA', price: 'R$ 197,00' },
  { name: 'Dashboards com IA', price: 'R$ 97,00' },
  { name: 'Lovart — IA Proibida', price: 'R$ 147,00' },
  { name: 'Histórias Animadas com IA', price: 'R$ 147,00' },
  { name: '2 Personagens Falando no Mesmo Vídeo', price: 'R$ 197,00' },
  { name: 'Gerando Imagens Profissionais com IA', price: 'R$ 147,00' },
  { name: 'Quais Ferramentas de IA Contratar e para que Serve cada uma', price: 'R$ 97,00' },
  { name: 'Sessão de Fotos com IA', price: 'R$ 147,00' },
  { name: 'Criando Sites em Minutos com IA', price: 'R$ 147,00' },
  { name: 'Automações com IA', price: 'R$ 147,00' },
  { name: 'TikTok Shop com IA', price: 'R$ 197,00' },
  { name: 'Gerador de Roteiros para TikTok Shop', price: 'R$ 97,00' },
  { name: 'Qualidade Profissional em Imagens', price: 'R$ 97,00' },
  { name: 'Meus Assistentes de IA', price: 'R$ 97,00' },
  { name: 'Transformando seu Conhecimento em Dinheiro com IA', price: 'R$ 147,00' },
];


// Carousel data
const videosCourses = [
  { image: veo3, title: 'Dominando o VEO3' },
  { image: edicaoIa, title: 'Edição com IA' },
  { image: labvidiaCapa, title: 'LABVIDIA Completo' },
  { image: carouselVideoSample, title: 'Clipes com IA' },
];

const photosCourses = [
  { image: sessaoFotosIa, title: 'Sessão de Fotos com IA' },
  { image: clones, title: 'Clones Sentinela' },
  { image: capaMasterclass, title: 'Influencer de IA' },
  { image: sessaoFotosIa, title: 'Sessão de Fotos com IA' },
  { image: clones, title: 'Clones Sentinela' },
  { image: capaMasterclass, title: 'Influencer de IA' },
];

const businessCourses = [
  { image: aigram, title: 'AIGRAM - Atendimento com IA' },
  { image: agentesExpress, title: 'Agentes Express' },
  { image: bannerCurso, title: 'Sites com IA' },
  { image: aigram, title: 'AIGRAM - Atendimento com IA' },
  { image: agentesExpress, title: 'Agentes Express' },
  { image: bannerCurso, title: 'Sites com IA' },
];

const CourseCarousel = ({ courses, icon: Icon, iconColor, bgColor, title, subtitle, delay }: {
  courses: { image: string; title: string }[];
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
  title: string;
  subtitle: string;
  delay: number;
}) => {
  const plugin = useRef(Autoplay({ delay, stopOnInteraction: false }));

  return (
    <div className="mb-10">
      <div className="text-center mb-5">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className={`p-2 rounded-lg ${bgColor}`}>
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      <div className="relative">
        <Carousel
          plugins={[plugin.current as any]}
          className="w-full max-w-5xl mx-auto"
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {courses.map((course, idx) => (
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

const MegaComboAulao = () => {
  return (
    <div className="min-h-screen min-h-screen-dynamic bg-background relative">
      <BackgroundEffects />

      <div className="main-content relative z-10">

        {/* ============ DOBRA 01 - HERO ============ */}
        <section className="relative min-h-screen min-h-screen-dynamic flex flex-col items-center justify-center container-padding overflow-hidden">
          {/* Hero background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroDesktop}
              alt="Pettrus Vaz"
              className="hidden md:block w-full h-full object-cover object-top opacity-30"
            />
            <img
              src={heroMobile}
              alt="Pettrus Vaz"
              className="block md:hidden w-full h-full object-cover object-top opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>

          <div className="relative z-10 container mx-auto text-center max-w-4xl py-16">
            {/* Logo IAIRON Academy */}
            <img
              src="/lovable-uploads/iairon-academy-logo.png"
              alt="IAIRON Academy Logo"
              className="mx-auto w-48 md:w-64 h-auto mb-6"
            />

            {/* Logo Mega Combo */}
            <img
              src={logoMegaCombo}
              alt="Mega Combo IA Vitalício"
              className="mx-auto max-w-xs md:max-w-md w-full h-auto mb-10"
            />

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              INSCRIÇÕES ABERTAS PARA O{' '}
              <span className="gradient-text-accent">MEGA COMBO IA VITALÍCIO</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium mb-10 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
              VOCÊ NUNCA MAIS VAI PRECISAR COMPRAR UM CURSO DE INTELIGÊNCIA ARTIFICIAL PELO RESTO DA VIDA.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col items-start max-w-xl mx-auto space-y-4 mb-10 text-left">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-foreground">Mais de 25 cursos completos de Inteligência Artificial.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-foreground">89% DE DESCONTO em todo o combo.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-foreground">Acesso VITALÍCIO, sem mensalidade, sem renovação!</span>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={handleCheckout}
              size="lg"
              className="cta-button px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg md:text-xl font-bold text-white border-0 transition-all duration-300 animate-pulse-glow w-full sm:w-auto"
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Garantir minha vaga agora!
            </Button>
          </div>
        </section>

        {/* ============ DOBRA 02 - VALUE BREAKDOWN ============ */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12" />
          <div className="container mx-auto max-w-4xl">

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 leading-tight text-foreground">
              O Mega Combo IA Vitalício é a maior oferta que já fizemos em toda a história da{' '}
              <span className="gradient-text-accent">IAIRON Academy</span>.
            </h2>

            <p className="text-lg text-muted-foreground text-center mb-10">
              Para ter acesso individual a cada um dos cursos que estão dentro do Mega Combo, você investiria:
            </p>

            {/* Course Price List */}
            <Card className="glass-card p-4 sm:p-6 md:p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-1 sm:gap-y-3">
                {courses.map((course, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 py-1.5 sm:py-2 border-b border-border/30 last:border-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-foreground line-clamp-1">{course.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-muted-foreground font-mono whitespace-nowrap">{course.price}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Total Separado */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 text-center">
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />
              <span className="text-base sm:text-xl md:text-2xl font-bold text-red-400">
                Total comprando tudo separado: R$ 4.066,00
              </span>
            </div>

            {/* Renewals Breakdown */}
            <p className="text-lg text-muted-foreground text-center mb-8">
              Vamos fazer as contas de quanto você investiria para ter acesso a todos os nossos cursos ao longo do tempo:
            </p>

            <Card className="glass-card p-4 sm:p-6 md:p-8 mb-8 max-w-2xl mx-auto">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">Adquirir todos os cursos:</span>
                  <span className="ml-auto font-mono text-sm sm:text-base text-muted-foreground">R$ 4.066,00</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">Renovar por mais 1 ano:</span>
                  <span className="ml-auto font-mono text-sm sm:text-base text-muted-foreground">R$ 4.066,00</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">Renovar por mais 2 anos:</span>
                  <span className="ml-auto font-mono text-sm sm:text-base text-muted-foreground">R$ 4.066,00</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">Renovar por mais 3 anos:</span>
                  <span className="ml-auto font-mono text-sm sm:text-base text-muted-foreground">R$ 4.066,00</span>
                </div>
              </div>
            </Card>

            {/* Total FORA */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 text-center">
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />
              <span className="text-base sm:text-xl md:text-2xl font-bold text-red-400">
                Total FORA do Mega Combo IA Vitalício: R$ 16.264,00
              </span>
            </div>

            {/* Price Reveal */}
            <div className="text-center mb-10">
              <p className="text-lg text-muted-foreground mb-8">
                Mas comprando hoje, você não vai investir tudo isso. Você só vai investir:
              </p>

              <Card className="glass-card p-5 sm:p-8 md:p-12 border-tech-blue/30 max-w-2xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 via-tech-purple/5 to-transparent" />
                <div className="relative z-10">
                  <p className="text-lg sm:text-xl text-muted-foreground mb-2">
                    <span className="line-through text-red-400/70">De R$ 16.264,00</span>
                  </p>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-4">Por apenas:</p>
                  <p className="text-4xl sm:text-5xl md:text-7xl font-bold gradient-text-accent mb-2">
                    12x R$ 92,23
                  </p>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                    ou <span className="text-foreground font-semibold">R$ 897,00</span> à vista
                  </p>

                  <Button
                    onClick={handleCheckout}
                    size="lg"
                    className="cta-button px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg md:text-xl font-bold text-white border-0 transition-all duration-300 animate-pulse-glow w-full sm:w-auto"
                  >
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    Garantir minha vaga agora!
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ============ DOBRA 03 - ATENÇÃO + GRID ============ */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12" />
          <div className="container mx-auto max-w-7xl">

            {/* Warning */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400">ATENÇÃO</h2>
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
              </div>

              <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
                Essa é a primeira vez que eu faço uma oferta tão pesada em toda a minha história.{' '}
                <span className="text-foreground font-bold">
                  Talvez você nunca mais veja algo como isso novamente.
                </span>
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Quem deixar essa oportunidade passar pode se arrepender pelo resto da sua vida.
              </p>

              <p className="text-xl text-foreground font-semibold mb-10">
                Quem aproveitar AGORA vai ter acesso a:
              </p>
            </div>

            {/* Course Carousels */}
            <div className="mb-0">
              <CourseCarousel
                courses={videosCourses}
                icon={Video}
                iconColor="text-tech-blue"
                bgColor="bg-tech-blue/20"
                title="Vídeos com IA"
                subtitle="Crie vídeos incríveis, sem precisar aparecer."
                delay={2000}
              />
              <CourseCarousel
                courses={photosCourses}
                icon={Camera}
                iconColor="text-tech-purple"
                bgColor="bg-tech-purple/20"
                title="Fotos com IA"
                subtitle="Faça fotos e artes profissionais."
                delay={2500}
              />
              <CourseCarousel
                courses={businessCourses}
                icon={Briefcase}
                iconColor="text-tech-cyan"
                bgColor="bg-tech-cyan/20"
                title="Negócios com IA"
                subtitle="Automatize e escale o seu negócio."
                delay={3000}
              />
            </div>
          </div>
        </section>

        {/* ============ DOBRA 04 - CTA FINAL ============ */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12" />
          <div className="container mx-auto text-center max-w-4xl">

            <Card className="glass-card p-5 sm:p-8 md:p-12 border-tech-purple/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-purple/10 via-tech-blue/5 to-transparent" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-foreground">
                  Você <span className="gradient-text-accent">NUNCA MAIS</span> vai precisar comprar nenhum curso de Inteligência Artificial pelo resto da vida!
                </h2>

                <Button
                  onClick={handleCheckout}
                  size="lg"
                  className="cta-button px-6 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl md:text-2xl font-bold text-white border-0 transition-all duration-300 animate-pulse-glow w-full sm:w-auto"
                >
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3" />
                  GARANTIR MEU ACESSO!
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* ============ DOBRA 05 - QUEM É PETRUS VAZ ============ */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12" />
          <div className="container mx-auto max-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Quem é Petrus Vaz?
            </h2>

            <Card className="mentor-card p-5 sm:p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Especialista em Inteligência Artificial e criador do método mais eficaz para dominar as ferramentas de IA no Brasil. Com anos de experiência no mercado digital, já treinou milhares de pessoas a faturarem alto com tecnologia.
                  </p>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    No último ano, formou mais de 10.000 alunos, criou mais de 5 empresas e tem negócios avaliados em milhões de reais, tudo com IA.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-tech-blue/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-tech-blue" />
                      </div>
                      <span className="text-foreground font-medium">+10.000 alunos formados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-tech-purple/20 flex items-center justify-center">
                        <Award className="w-5 h-5 text-tech-purple" />
                      </div>
                      <span className="text-foreground font-medium">+5 empresas criadas com IA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-tech-amber/20 flex items-center justify-center">
                        <Star className="w-5 h-5 text-tech-amber" />
                      </div>
                      <span className="text-foreground font-medium">Negócios avaliados em milhões</span>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <Avatar className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 border-4 border-gradient-to-br from-tech-blue to-tech-purple">
                      <AvatarImage
                        src={pettrusImg}
                        alt="Petrus Vaz"
                        className="object-cover"
                      />
                      <AvatarFallback className="text-4xl md:text-6xl font-bold gradient-text-accent bg-gradient-to-br from-muted to-background">
                        PV
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-tech-amber rounded-full flex items-center justify-center animate-pulse-glow">
                      <Star className="w-6 h-6 text-background" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="section-spacing container-padding relative" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <div className="container mx-auto text-center text-muted-foreground space-y-4">
            <p className="text-lg">
              Este é um produto digital. Você receberá os acessos por e-mail em até 24 horas.
            </p>
            <p className="text-base">
              © 2025 IAIRON Academy. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MegaComboAulao;
