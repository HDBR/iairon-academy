import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Zap, Check, X, AlertTriangle, Star, Users, Award } from 'lucide-react';
import BackgroundEffects from '@/components/BackgroundEffects';
import logoMegaCombo from '@/assets/logo-megacombo-v01.png';
import heroDesktop from '@/assets/img_pettrus_hero_desktop.webp';
import heroMobile from '@/assets/img_pettrus_hero_mobile.webp';
import pettrusImg from '@/assets/mentor/pettrus.webp';

const CHECKOUT_URL = 'https://payfast.greenn.com.br/gqhvkuu/offer/YHEcHb';

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

const courseGrid = [
  { title: 'Vídeos Virais', desc: 'Acesse o meu método para criar vídeos virais ultrarrealistas com IA, mesmo começando do zero.' },
  { title: 'Seu Influencer de IA 100% Consistente', desc: 'Entenda como manter identidade visual, voz e padrão narrativo consistente em personagens de IA.' },
  { title: 'Pack de Prompts VEO3', desc: 'Acesse a minha biblioteca estratégica de prompts prontos para gerar cenas cinematográficas no VEO3 sem precisar testar dezenas de variações.' },
  { title: 'Desafio R$ 10K com IA', desc: 'Replay do desafio 100% prático para gerar até 10 mil reais aplicando estratégias com IA em curto prazo.' },
  { title: 'Dominando o VEO3', desc: 'Treinamento completo para aprender a usar o gerador de vídeo VEO 3 do Google, do completo zero ao avançado, criando vídeos ultrarrealistas, cinematográficos e prontos para viralizar ou vender.' },
  { title: 'Edição com IA (CapCut)', desc: 'Aprenda a usar IA dentro do CapCut para acelerar a edição, criar cortes dinâmicos, legendas automáticas e vídeos com padrão profissional.' },
  { title: 'Efeitos de Cinema com Runway', desc: 'Aplique efeitos cinematográficos com IA usando Runway para transformar vídeos simples em cenas de alto impacto visual.' },
  { title: 'Áudio de IA com sotaque', desc: 'Crie áudios realistas com sotaque específico, usando IA para vídeos, personagens e projetos digitais.' },
  { title: '2 Personagens no mesmo vídeo', desc: 'Gere vídeos com dois personagens interagindo, mesmo sendo 100% gerados por IA, sem precisar gerar separadamente.' },
  { title: 'Clipes com IA', desc: 'Crie clipes musicais de alta qualidade, gerando a letra, melodia, cantores, banda, cenário e todo o clipe, 100% com IA.' },
  { title: 'TikTok Shop com IA', desc: 'Descubra como usar a IA para criar vídeos e criativos que vendem produtos físicos dentro do TikTok Shop.' },
  { title: 'Gerador de Roteiros para TikTok Shop', desc: 'Ferramenta estratégica para criar roteiros prontos para vídeos de venda no TikTok Shop.' },
  { title: 'IA para Produtos Físicos', desc: 'Use o poder da IA para criar criativos, imagens e anúncios de vendas focados em produtos físicos.' },
  { title: 'Histórias Animadas com IA', desc: 'Faça histórias animadas com qualidade de cinema usando IA, desde a narração aos personagens, publique nas redes sociais e monetize.' },
  { title: 'Sessão de Fotos com IA', desc: 'Faça ensaios fotográficos realistas sem câmera, estúdio ou fotógrafo, usando IA para perfis, marcas ou personagens.' },
  { title: 'Qualidade Profissional em Imagens', desc: 'Domine técnicas para elevar o padrão visual de imagens geradas por IA ao nível profissional.' },
  { title: 'Lovart - IA Proibida', desc: 'Tenha acesso à IA mais criativa do mercado e descubra como criar infinitas possibilidades, como anúncios, artes, capas de filme e muito mais!' },
  { title: 'IADS - Método Clones Sentinela', desc: 'Crie clones digitais de altíssima qualidade para produzir seus conteúdos.' },
  { title: 'AIGRAM - Atendimento com IA', desc: 'Automatize o atendimento e as conversas no Instagram usando inteligência artificial.' },
  { title: 'Meus Assistentes de IA', desc: 'Acesse a estrutura dos meus agentes e assistentes para produtividade e geração de dinheiro.' },
  { title: '4 Formas de Fazer Dinheiro com IA em 7 dias', desc: 'Método prático para te mostrar como monetizar rápido usando ferramentas acessíveis de IA.' },
  { title: 'Transformando seu Conhecimento em Dinheiro com IA', desc: 'Entenda como empacotar seu conhecimento e vender usando IA para criação, estrutura e escala.' },
  { title: 'Sites com IA', desc: 'Crie sites 100% profissionais usando inteligência artificial sem precisar programar.' },
  { title: 'Dashboards com IA', desc: 'Descubra como criar painéis inteligentes para organização, métricas e controle dos seus projetos.' },
  { title: 'Agentes Express Personalizados', desc: 'Descubra como criar agentes de IA personalizados para tarefas específicas em qualquer negócio.' },
  { title: 'Automação com IA', desc: 'Curso completo e prático de automações para escalar processos usando IA e integrações.' },
];

const MegaComboVendas = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundEffects />

      {/* Sticky Student Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-600 to-amber-500">
        <div className="container mx-auto container-padding py-3">
          <div className="text-center text-white font-bold text-sm md:text-base tracking-wide">
            CONDIÇÃO EXCLUSIVA PARA ALUNOS
          </div>
        </div>
      </div>

      <div className="main-content relative z-10 pt-12">

        {/* ============ DOBRA 01 - HERO ============ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center container-padding overflow-hidden">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              INSCRIÇÕES ABERTAS PARA O{' '}
              <span className="gradient-text-accent">MEGA COMBO IA VITALÍCIO</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-10 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
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
              className="cta-button px-10 py-6 text-lg md:text-xl font-bold text-white border-0 transition-all duration-300 animate-pulse-glow"
            >
              <Zap className="w-6 h-6 mr-3" />
              Garantir minha vaga agora!
            </Button>
          </div>
        </section>

        {/* ============ DOBRA 02 - VALUE BREAKDOWN ============ */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12" />
          <div className="container mx-auto max-w-4xl">

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 leading-tight text-foreground">
              Meu aluno, o Mega Combo IA Vitalício é a maior oferta que já fizemos em toda a história da{' '}
              <span className="gradient-text-accent">IAIRON Academy</span>.
            </h2>

            <p className="text-lg text-muted-foreground text-center mb-10">
              Para ter acesso individual a cada um dos cursos que estão dentro do Mega Combo, você investiria:
            </p>

            {/* Course Price List */}
            <Card className="glass-card p-6 md:p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                {courses.map((course, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 py-2 border-b border-border/30 last:border-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm md:text-base text-foreground truncate">{course.name}</span>
                    </div>
                    <span className="text-sm md:text-base text-muted-foreground font-mono whitespace-nowrap">{course.price}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Total Separado */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <X className="w-6 h-6 text-red-500 flex-shrink-0" />
              <span className="text-xl md:text-2xl font-bold text-red-400">
                Total comprando tudo separado: R$ 4.066,00
              </span>
            </div>

            {/* Renewals Breakdown */}
            <p className="text-lg text-muted-foreground text-center mb-8">
              Vamos fazer as contas de quanto você investiria para ter acesso a todos os nossos cursos ao longo do tempo:
            </p>

            <Card className="glass-card p-6 md:p-8 mb-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground">Adquirir todos os cursos:</span>
                  <span className="ml-auto font-mono text-muted-foreground">R$ 4.066,00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground">Renovar tudo por mais um ano:</span>
                  <span className="ml-auto font-mono text-muted-foreground">R$ 4.066,00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground">Renovar tudo por dois anos:</span>
                  <span className="ml-auto font-mono text-muted-foreground">R$ 4.066,00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground">Renovar tudo por três anos:</span>
                  <span className="ml-auto font-mono text-muted-foreground">R$ 4.066,00</span>
                </div>
              </div>
            </Card>

            {/* Total FORA */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <X className="w-6 h-6 text-red-500 flex-shrink-0" />
              <span className="text-xl md:text-2xl font-bold text-red-400">
                Total FORA do Mega Combo IA Vitalício: R$ 16.264,00
              </span>
            </div>

            {/* Price Reveal */}
            <div className="text-center mb-10">
              <p className="text-lg text-muted-foreground mb-8">
                Mas comprando hoje, você não vai investir tudo isso. Você só vai investir:
              </p>

              <Card className="glass-card p-8 md:p-12 border-tech-blue/30 max-w-2xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 via-tech-purple/5 to-transparent" />
                <div className="relative z-10">
                  <p className="text-lg text-amber-400 font-semibold mb-2">
                    Desconto EXCLUSIVO para alunos:
                  </p>
                  <p className="text-xl text-muted-foreground mb-2">
                    <span className="line-through text-red-400/70">De R$ 16.264,00</span>
                  </p>
                  <p className="text-xl text-muted-foreground mb-4">Por apenas:</p>
                  <p className="text-5xl md:text-7xl font-bold gradient-text-accent mb-2">
                    12x R$ 51,10
                  </p>
                  <p className="text-xl text-muted-foreground mb-8">
                    ou <span className="text-foreground font-semibold">R$ 497,00</span> à vista
                  </p>

                  <Button
                    onClick={handleCheckout}
                    size="lg"
                    className="cta-button px-10 py-6 text-lg md:text-xl font-bold text-white border-0 transition-all duration-300 animate-pulse-glow"
                  >
                    <Zap className="w-6 h-6 mr-3" />
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
              <div className="flex items-center justify-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-amber-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-amber-400">ATENÇÃO</h2>
                <AlertTriangle className="w-8 h-8 text-amber-400" />
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

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {courseGrid.map((course, i) => (
                <Card key={i} className="glass-card glass-card-hover p-5 transition-all duration-300">
                  <h3 className="text-base font-bold gradient-text-accent mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{course.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DOBRA 04 - CTA FINAL ============ */}
        <section className="section-spacing container-padding">
          <div className="section-divider mb-12" />
          <div className="container mx-auto text-center max-w-4xl">

            <Card className="glass-card p-8 md:p-12 border-tech-purple/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-purple/10 via-tech-blue/5 to-transparent" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight text-foreground">
                  Você <span className="gradient-text-accent">NUNCA MAIS</span> vai precisar comprar nenhum curso de Inteligência Artificial pelo resto da vida!
                </h2>

                <Button
                  onClick={handleCheckout}
                  size="lg"
                  className="cta-button px-12 py-6 text-xl md:text-2xl font-bold text-white border-0 transition-all duration-300 animate-pulse-glow"
                >
                  <Zap className="w-7 h-7 mr-3" />
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

            <Card className="mentor-card p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
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
                    <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-gradient-to-br from-tech-blue to-tech-purple">
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
        <footer className="section-spacing container-padding relative">
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

export default MegaComboVendas;
