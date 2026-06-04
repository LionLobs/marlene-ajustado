import { createFileRoute } from "@tanstack/react-router";
import { Lock, Calendar, CheckCircle2, Star, X, Mail, Phone, Instagram } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marlene Corrêa - Psicanalista Clínica e Mentora Estratégica" },
      { name: "description", content: "Saúde Mental e Reconstrução Profissional para Mulheres 40+. Rompa padrões, ressignifique sua história e reconstrua carreira com propósito." },
      { property: "og:title", content: "Marlene Corrêa - Reconstruir Identidade, Assumir Potência" },
      { property: "og:description", content: "Programa Exclusivo de Reconstrução 40+ com Marlene Corrêa, psicanalista clínica e mentora estratégica." },
      { property: "og:image", content: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407140865/Ly7Dzrb6G9DxhVvDjXJx6j/marlene_5ca82bea.png" },
    ],
  }),
  component: Home,
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

function Home() {
  const [, setActiveProgram] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [showForm, setShowForm] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [captureFormData, setCaptureFormData] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [, setShowCaptureForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptureFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCaptureFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptureFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário de captura enviado:", captureFormData);
    setCaptureFormData({ name: "", email: "", phone: "", message: "" });
    setShowCaptureForm(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setShowForm(false);
  };

  const faqs: FAQItem[] = [
    { question: "Qual é a diferença entre o Programa Reconstrução 40+ e a Jornada Essencial?", answer: "O Programa Reconstrução 40+ é um processo exclusivo e seletivo de 10 semanas com diagnóstico emocional profundo, ressignificação de padrões e plano de posicionamento profissional. A Jornada Essencial é uma versão estruturada de 5 semanas para quem está iniciando e busca clareza emocional e direção estratégica, com possibilidade de evolução para o programa exclusivo." },
    { question: "Como funciona a Conversa de Alinhamento?", answer: "A Conversa de Alinhamento é um encontro inicial de 30-45 minutos onde avaliamos se há alinhamento entre suas necessidades e minha abordagem. Neste momento, você conhece minha metodologia, apresenta sua situação e juntas definimos se o programa é adequado para você. Não há compromisso financeiro nesta etapa." },
    { question: "Posso fazer atendimentos enquanto estou em um programa?", answer: "Sim! Os atendimentos individuais podem ser combinados com qualquer programa. Muitas clientes fazem atendimentos pontuais para questões específicas enquanto participam do Reconstrução 40+ ou Jornada Essencial. Recomendo conversar comigo sobre a melhor estratégia para seu caso." },
    { question: "Qual é o investimento dos programas?", answer: "O investimento varia conforme o programa e sua situação específica. Na Conversa de Alinhamento, apresento uma proposta personalizada com base em suas necessidades. A Jornada Essencial tem investimento tabelado, enquanto o Reconstrução 40+ é customizado. Oferecemos opções de parcelamento." },
    { question: "Como funciona o atendimento corporativo?", answer: "Os programas corporativos incluem diagnóstico dos fatores psicossociais, plano de ação estratégico, relatórios técnicos para PGR e auditorias, assessoria para RH e lideranças, e programas personalizados de saúde mental. Oferecemos uma proposta customizada após conversa inicial com a empresa." },
    { question: "Qual é a metodologia que você utiliza?", answer: "Utilizo a Psicanálise Clínica como base, integrada com Terapia Sistêmica, Hipnoterapia e Constelação Familiar. Essa abordagem integrativa permite trabalhar questões emocionais em profundidade, ressignificar padrões limitantes e criar mudanças sustentáveis em sua vida e carreira." },
  ];

  const testimonials = [
    { name: "Fernanda Parra", role: "ACOMPANHAMENTO TERAPÊUTICO", text: "As sessões de terapias energéticas e também as sessões terapêuticas com os movimentos sistêmicos foram um divisor de águas para meu autoconhecimento, crescimento pessoal e espiritual.", rating: 5 },
    { name: "Patrícia Kaltner", role: "ACOMPANHAMENTO TERAPÊUTICO", text: "Foi excelente ter feito sessões de terapia com a Marlene, frente a uma mudança de país vem alguns desafios emocionais como: estar longe da família, lidar e conviver com pessoas de cultura diferentes.", rating: 5 },
    { name: "Ariane Cavalcante", role: "ACOMPANHAMENTO TERAPÊUTICO", text: "A Terapia Sistêmica mudou completamente minha vida. Tanto que escolhei fazer somente as sessões com a Marlene, e optei por não dar continuidade na terapia convencional. Tenho mexido em emoções que estão atreladas a minha criança interior e isso tem me ajudado a me curar e deixar para traz sensações, medos e padrões que não me pertencem.", rating: 5 },
    { name: "Karina Marquis", role: "MENTORIA TRANSIÇÃO DE CARREIRA", text: "Querida Marlene, como sua mentorada nesse meu processo de transição de carreira pude aprender a me planejar, a colocar foco e determinar as etapas para realmente fazer acontecer meus negócios. Eu realmente amadureci nesse período em que estivemos juntas, pude ver meus negócios numa outra perspectiva e agora me sinto realmente mais confiante para seguir com meus projetos e com a minha vida.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#921b3c]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407140865/Ly7Dzrb6G9DxhVvDjXJx6j/Prancheta6_13c323ef.webp" alt="Marlene Corrêa - Psicanalista" className="h-14 w-auto transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
          <nav className="hidden md:flex gap-10">
            {["sobre","programas","depoimentos","servicos","faq","contato"].map((s) => (
              <a key={s} href={`#${s}`} className="text-[13px] font-semibold text-white/80 hover:text-[#d1ae6e] transition-all duration-300 capitalize tracking-[0.2em] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#d1ae6e] after:transition-all hover:after:w-full">{s === "faq" ? "FAQ" : s}</a>
            ))}
          </nav>
          <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden p-2 text-white hover:text-[#d1ae6e] transition-colors rounded-full hover:bg-white/10">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
        {showMobileMenu && (
          <nav className="md:hidden bg-[#921b3c] border-t border-white/10 py-8 px-6 space-y-4 animate-in slide-in-from-top duration-500">
            {["sobre","programas","depoimentos","servicos","faq","contato"].map((s) => (
              <a key={s} href={`#${s}`} onClick={() => setShowMobileMenu(false)} className="block text-lg font-serif text-white/90 hover:text-[#d1ae6e] transition-all duration-300 py-2 capitalize border-b border-white/5">{s === "faq" ? "FAQ" : s}</a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#921b3c" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="text-sm font-semibold text-[#d1ae6e] tracking-[0.3em] uppercase animate-in fade-in slide-in-from-left duration-1000 drop-shadow-sm">Transformação & Propósito</span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#921b3c] leading-[1.1] animate-in fade-in slide-in-from-left duration-1000 delay-200">Reconstruir Identidade, <span className="text-[#c5a059] bg-clip-text text-transparent bg-gradient-to-r from-[#c5a059] via-[#f1e4c1] to-[#c5a059] bg-[length:200%_auto] animate-[gold-shine_6s_linear_infinite]">Assumir Potência</span></h1>
                <div className="flex items-center gap-6 py-4 animate-in fade-in zoom-in duration-1000 delay-500">
                  <div className="h-[2px] w-8 sm:w-12 bg-[#c5a059]"></div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#c5a059] tracking-[0.5em] uppercase whitespace-nowrap">MARLENE CORRÊA</span>
                  <div className="h-[2px] w-8 sm:w-12 bg-[#c5a059]"></div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light animate-in fade-in slide-in-from-bottom duration-1000 delay-700">Saúde Mental e Reconstrução Profissional para Mulheres 40+. Rompa padrões, ressignifique sua história e reconstrua carreira com propósito.</p>
              </div>
              <div className="space-y-4 border-l-2 border-[#d1ae6e]/20 pl-6 py-2 animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
                <p className="text-gray-500 font-medium tracking-wide text-balance">Não é apenas sobre mudança profissional.</p>
                <p className="text-[#921b3c] italic text-lg">"É sobre reconstruir identidade e assumir a potência que a maturidade trouxe."</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
                <a href="https://wa.me/5511973356733?text=Olá%20Marlene!%20Gostaria%20de%20solicitar%20uma%20aplicação%20para%20um%20de%20seus%20programas." target="_blank" rel="noopener noreferrer" className="btn-gold-premium">Solicitar Aplicação</a>
                <a href="#contato" className="btn-wine-premium">Conhecer Mais</a>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d1ae6e]/20 to-[#921b3c]/20 rounded-3xl blur-3xl"></div>
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#d1ae6e]">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407140865/Ly7Dzrb6G9DxhVvDjXJx6j/marlene_5ca82bea.png" alt="Marlene Corrêa" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#921b3c]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#d1ae6e] to-[#ad4a60] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#ad4a60] to-[#921b3c] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-[#d1ae6e] to-transparent"></div>

      {/* ABOUT */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#f9f7f4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-5xl font-serif font-bold text-[#921b3c] leading-tight">Expertise &<br />Experiência</h2>
              <div className="section-underline"></div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed font-light">Profissional em saúde mental como <span className="font-semibold text-[#921b3c] border-b-2 border-[#d1ae6e]/30">psicanalista clínica</span> e <span className="font-semibold text-[#921b3c] border-b-2 border-[#d1ae6e]/30">mentora estratégica</span>, criadora do Programa Exclusivo de Reconstrução 40+.</p>
              <p className="text-xl text-gray-700 leading-relaxed font-light">Conduzo mulheres que desejam romper padrões, ressignificar sua história e reconstruir carreira com propósito, maturidade emocional e direção.</p>
              <div className="p-8 bg-white rounded-2xl shadow-sm border-l-4 border-[#d1ae6e]">
                <p className="text-gray-600 italic leading-relaxed">"Com mais de 20 anos de experiência no mercado corporativo, incluindo atuação como gerente de serviços em empresa multinacional, uno conhecimento organizacional à prática clínica."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-[#921b3c]">Programas de Transformação</h2>
            <div className="section-underline mx-auto"></div>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto font-light pt-4">Processos estruturados e seletivos para sua reconstrução profissional e pessoal</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "exclusivo", title: "Reconstrução 40+", subtitle: "Método Identidade Estratégica™", availability: "Sob Aplicação Seletiva", desc: "Processo profundo, estruturado e seletivo para mulheres 40+ que desejam reconstruir identidade, direção e propósito com estratégia e maturidade emocional.", features: ["10 semanas individuais","Diagnóstico emocional profundo","Ressignificação de padrões","Plano de posicionamento profissional"], note: "O investimento é apresentado exclusivamente na Conversa de Alinhamento.", cta: "Solicitar Aplicação", link: "https://wa.me/5511973356733?text=Ol%C3%A1%20Marlene!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Programa%20Reconstrução%2040%2B.", gradient: "from-[#d1ae6e] to-[#ad4a60]", showLock: true },
              { id: "essencial", title: "Jornada Essencial", subtitle: "Reconstrução 40+", availability: "Entrada Contínua", desc: "Processo estruturado de 5 semanas para mulheres que precisam de clareza emocional e direção estratégica para iniciar sua reconstrução.", features: ["5 semanas estruturadas","Clareza emocional","Direção estratégica","Possibilidade de evolução"], note: "Participantes podem ter parte do investimento considerado na evolução para o Programa Exclusivo.", cta: "Iniciar Jornada Essencial", link: "https://wa.me/5511973356733?text=Ol%C3%A1%20Marlene!%20Gostaria%20de%20iniciar%20a%20Jornada%20Essencial.", gradient: "from-[#ad4a60] to-[#921b3c]", showLock: false },
              { id: "atendimentos", title: "Atendimentos Individuais", subtitle: "Terapia Clínica Integrativa", availability: "", desc: "Atuação clínica integrativa voltada ao cuidado contínuo da saúde mental e manejo de questões emocionais específicas.", features: ["Psicanálise Clínica","Terapia Sistêmica","Hipnoterapia","Constelação Familiar"], note: "Indicado para acompanhamento contínuo em saúde mental e momentos de transição.", cta: "Agendar Atendimento", link: "https://wa.me/5511973356733?text=Ol%C3%A1%20Marlene!%20Gostaria%20de%20agendar%20um%20atendimento%20individual.", gradient: "from-[#921b3c] to-[#d1ae6e]", showLock: false },
            ].map((program) => (
              <div key={program.id} className="premium-card group" onMouseEnter={() => setActiveProgram(program.id)} onMouseLeave={() => setActiveProgram(null)}>
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient}`}></div>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-serif font-bold text-[#921b3c]">{program.title}</h3>
                    {program.showLock && <Lock className="w-5 h-5 text-[#d1ae6e]" />}
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#ad4a60] uppercase tracking-wide">{program.subtitle}</p>
                    {program.availability && <p className="text-sm text-gray-600 font-medium">{program.availability}</p>}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{program.desc}</p>
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    {program.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        {i === 0 && program.id !== "atendimentos" ? <Calendar className="w-4 h-4 text-[#d1ae6e]" /> : <CheckCircle2 className="w-4 h-4 text-[#d1ae6e]" />}
                        <span className="text-sm text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 italic pt-4">{program.note}</p>
                  <a href={program.link} target="_blank" rel="noopener noreferrer" className="btn-gold-premium w-full mt-6 text-center block">{program.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLLING PARTNERS/TOPICS MARQUEE */}
      <div className="marquee-container" style={{ "--marquee-duration": "80s" } as React.CSSProperties}>
        <div className="marquee-content">
          {["AUTOCONHECIMENTO", "TRANSFORMAÇÃO", "PROPÓSITO", "SAÚDE MENTAL", "CARREIRA 40+", "PSICANÁLISE", "IDENTIDADE", "ESTRATÉGIA"].map((text, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className="text-3xl font-serif font-bold text-[#921b3c]/20 hover:text-[#921b3c]/40 transition-colors duration-500 cursor-default tracking-widest">{text}</span>
              <Star className="w-6 h-6 text-[#d1ae6e] opacity-40" />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {["AUTOCONHECIMENTO", "TRANSFORMAÇÃO", "PROPÓSITO", "SAÚDE MENTAL", "CARREIRA 40+", "PSICANÁLISE", "IDENTIDADE", "ESTRATÉGIA"].map((text, idx) => (
            <div key={`dup1-${idx}`} className="flex items-center gap-10">
              <span className="text-3xl font-serif font-bold text-[#921b3c]/20 hover:text-[#921b3c]/40 transition-colors duration-500 cursor-default tracking-widest">{text}</span>
              <Star className="w-6 h-6 text-[#d1ae6e] opacity-40" />
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {["AUTOCONHECIMENTO", "TRANSFORMAÇÃO", "PROPÓSITO", "SAÚDE MENTAL", "CARREIRA 40+", "PSICANÁLISE", "IDENTIDADE", "ESTRATÉGIA"].map((text, idx) => (
            <div key={`dup2-${idx}`} className="flex items-center gap-10">
              <span className="text-3xl font-serif font-bold text-[#921b3c]/20 hover:text-[#921b3c]/40 transition-colors duration-500 cursor-default tracking-widest">{text}</span>
              <Star className="w-6 h-6 text-[#d1ae6e] opacity-40" />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {["AUTOCONHECIMENTO", "TRANSFORMAÇÃO", "PROPÓSITO", "SAÚDE MENTAL", "CARREIRA 40+", "PSICANÁLISE", "IDENTIDADE", "ESTRATÉGIA"].map((text, idx) => (
            <div key={`dup3-${idx}`} className="flex items-center gap-10">
              <span className="text-3xl font-serif font-bold text-[#921b3c]/20 hover:text-[#921b3c]/40 transition-colors duration-500 cursor-default tracking-widest">{text}</span>
              <Star className="w-6 h-6 text-[#d1ae6e] opacity-40" />
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#921b3c] to-[#ad4a60]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">Histórias de Transformação</h2>
            <div className="section-underline mx-auto bg-white/40"></div>
            <p className="text-white/80 text-xl max-w-2xl mx-auto font-light pt-4">Veja como mulheres como você reconstruíram suas vidas e carreiras</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card group">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (<Star key={j} className="w-5 h-5 fill-[#d1ae6e] text-[#d1ae6e] opacity-80" />))}
                </div>
                <p className="text-white/90 leading-relaxed mb-8 italic text-lg font-light line-clamp-6">"{t.text}"</p>
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <p className="font-serif text-2xl text-[#d1ae6e] mb-1">{t.name}</p>
                  <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE */}
      <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 flex items-center justify-center order-2 lg:order-1">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407140865/Ly7Dzrb6G9DxhVvDjXJx6j/CORPORATIVO_44c64a51.png" alt="Saúde Mental Corporativa" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-5xl font-serif font-bold text-[#921b3c] leading-tight">Saúde Mental<br />Corporativa</h2>
                <div className="section-underline"></div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">Programas Corporativos em Saúde Mental & NR-1. Atuação estratégica para empresas com foco em prevenção de riscos psicossociais e implementação de programas contínuos de saúde mental.</p>
                <p className="text-gray-700 leading-relaxed">Conformidade com o Ministério do Trabalho. Com +20 anos de experiência no mercado corporativo, uno conhecimento organizacional à prática clínica para oferecer soluções técnicas e humanizadas.</p>
              </div>
              <div className="space-y-3 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-[#921b3c] text-lg">O que está incluído:</h3>
                <ul className="space-y-2">
                  {["Diagnóstico dos fatores psicossociais","Plano de ação estratégico","Relatórios técnicos para PGR e auditorias","Assessoria para RH e lideranças","Programas personalizados de saúde mental"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#d1ae6e] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => setShowCaptureForm(true)} className="btn-gold-premium">Solicitar Proposta</button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#921b3c] text-white p-6 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-2xl font-serif font-bold">Entre em Contato</h3>
              <button onClick={() => setShowForm(false)} className="hover:bg-[#7a1530] p-2 rounded-lg transition-colors"><X className="w-6 h-6" /></button>
            </div>
            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
              {[
                { name: "name", label: "Nome Completo", type: "text", placeholder: "Seu nome" },
                { name: "email", label: "Email", type: "email", placeholder: "seu.email@exemplo.com" },
                { name: "phone", label: "Telefone/WhatsApp", type: "tel", placeholder: "(11) 99999-9999" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-semibold text-[#921b3c] mb-2">{f.label}</label>
                  <input type={f.type} name={f.name} value={(formData as never)[f.name]} onChange={handleFormChange} required placeholder={f.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d1ae6e] focus:border-transparent transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-[#921b3c] mb-2">Mensagem</label>
                <textarea name="message" value={formData.message} onChange={handleFormChange} required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d1ae6e] focus:border-transparent transition-all resize-none" placeholder="Conte-nos sobre você e o que você busca..." />
              </div>
              <button type="submit" className="btn-gold-premium w-full mt-6">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      )}

      {/* CAPTURE FORM */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#921b3c] via-[#ad4a60] to-[#921b3c] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-serif font-bold text-white">Comece Sua Transformação Hoje</h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">Deixe seus dados e receba uma proposta personalizada para sua jornada de reconstrução.</p>
              </div>
              <form onSubmit={handleCaptureFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-white/80 mb-3">Nome Completo *</label>
                  <input type="text" name="name" value={captureFormData.name} onChange={handleCaptureFormChange} required placeholder="Seu nome completo" className="w-full px-6 py-4 rounded-2xl border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#d1ae6e] focus:border-transparent transition-all backdrop-blur-sm font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-3">Email *</label>
                  <input type="email" name="email" value={captureFormData.email} onChange={handleCaptureFormChange} required placeholder="seu.email@exemplo.com" className="w-full px-6 py-4 rounded-2xl border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#d1ae6e] focus:border-transparent transition-all backdrop-blur-sm font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-3">WhatsApp *</label>
                  <input type="tel" name="phone" value={captureFormData.phone} onChange={handleCaptureFormChange} required placeholder="(11) 99999-9999" className="w-full px-6 py-4 rounded-2xl border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#d1ae6e] focus:border-transparent transition-all backdrop-blur-sm font-medium" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-white/80 mb-3">Mensagem (Opcional)</label>
                  <textarea name="message" value={captureFormData.message} onChange={handleCaptureFormChange} placeholder="Conte-nos um pouco sobre sua situação..." rows={4} className="w-full px-6 py-4 rounded-2xl border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#d1ae6e] focus:border-transparent transition-all backdrop-blur-sm font-medium resize-none" />
                </div>
                <button type="submit" className="btn-gold-premium md:col-span-2 mt-2">Receber Proposta Personalizada</button>
              </form>
              <p className="text-center text-white/70 text-sm leading-relaxed">Seus dados são confidenciais e serão usados apenas para enviar sua proposta personalizada. Você receberá contato em até 24 horas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#921b3c]">Dúvidas Frequentes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Respostas para as perguntas mais comuns sobre os programas e serviços</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300">
                <button onClick={() => setActiveFAQ(activeFAQ === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-white to-[#faf8f5] hover:from-[#faf8f5] hover:to-white transition-all duration-300">
                  <span className="text-lg font-semibold text-[#921b3c] text-left">{faq.question}</span>
                  <svg className={`w-6 h-6 text-[#d1ae6e] transition-transform duration-300 flex-shrink-0 ml-4 ${activeFAQ === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {activeFAQ === i && (<div className="px-6 py-5 bg-white border-t border-gray-200"><p className="text-gray-700 leading-relaxed">{faq.answer}</p></div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#921b3c] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contato</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><a href="https://instagram.com/macorrea.psicoterapia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#d1ae6e] transition-colors"><Instagram className="w-4 h-4 text-[#d1ae6e]" />@macorrea.psicoterapia</a></li>
                <li><a href="https://wa.me/5511973356733" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#d1ae6e] transition-colors"><Phone className="w-4 h-4 text-[#d1ae6e]" />(11) 97335-6733</a></li>
                <li><a href="mailto:contato@marlene.com" className="flex items-center gap-2 hover:text-[#d1ae6e] transition-colors"><Mail className="w-4 h-4 text-[#d1ae6e]" />contato@marlene.com</a></li>
              </ul>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407140865/Ly7Dzrb6G9DxhVvDjXJx6j/MARLENELOGO_2b147deb.png" alt="Marlene Corrêa" className="h-16 w-auto" />
              <p className="text-white/80 text-sm text-center">Psicanalista Clínica & Mentora</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Programas</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#programas" className="hover:text-[#d1ae6e] transition-colors">Reconstrução 40+</a></li>
                <li><a href="#programas" className="hover:text-[#d1ae6e] transition-colors">Jornada Essencial</a></li>
                <li><a href="#programas" className="hover:text-[#d1ae6e] transition-colors">Atendimentos</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Serviços</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#servicos" className="hover:text-[#d1ae6e] transition-colors">Corporativo</a></li>
                <li><a href="#servicos" className="hover:text-[#d1ae6e] transition-colors">Constelação</a></li>
                <li><a href="#servicos" className="hover:text-[#d1ae6e] transition-colors">Hipnoterapia</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col items-center justify-center text-sm text-white/80 space-y-4">
              <p>&copy; 2026 Marlene Corrêa. Todos os direitos reservados</p>
              <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#c5a059] via-[#f1e4c1] to-[#c5a059] bg-[length:200%_auto] animate-[gold-shine_6s_linear_infinite]">✦ Feito com excelência ✦</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#d1ae6e] transition-colors">Privacidade</a>
                <a href="#" className="hover:text-[#d1ae6e] transition-colors">Termos</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* GLOBAL STYLES */}
      <style>{`
        ::selection { background: #921b3c; color: #fff; }
      `}</style>
    </div>
  );
}
