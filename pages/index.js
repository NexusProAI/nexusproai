import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LoadingSection from '../components/LoadingSection';

// Lazy loading dos componentes para melhor performance
const About = dynamic(() => import('../components/About'), { 
  ssr: false,
  loading: () => <LoadingSection height="h-96" />
});
const Benefits = dynamic(() => import('../components/Benefits'), { 
  ssr: false,
  loading: () => <LoadingSection height="h-80" />
});
const HowItWorks = dynamic(() => import('../components/HowItWorks'), { 
  ssr: false,
  loading: () => <LoadingSection height="h-96" />
});
import Testimonials from '../components/Testimonials';
const Contact = dynamic(() => import('../components/Contact'), { 
  ssr: false,
  loading: () => <LoadingSection height="h-96" />
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => <LoadingSection height="h-64" />
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Nexus Pro - Automação Inteligente com IA para Empresas | Chatbots WhatsApp 24h</title>
        <meta
          name="description"
          content="Automatize seu atendimento com IA: chatbots WhatsApp 24h, qualificação de leads automática e agendamentos inteligentes. Economize 5 horas/dia e aumente vendas em Betim MG."
        />
        <meta name="keywords" content="automação inteligente, chatbot whatsapp, inteligência artificial empresas, atendimento automatizado, qualificação leads, agendamento automático, IA para negócios, chatbot Betim MG, automação empresas Minas Gerais" />
        <meta name="author" content="Nexus Pro" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="pt-BR" />
        <meta name="geo.region" content="BR-MG" />
        <meta name="geo.placename" content="Betim, Minas Gerais" />
        <link rel="canonical" href="https://nexusproai.com.br/" />
        
        <meta property="og:title" content="Nexus Pro - Automação Inteligente com IA para Empresas | Betim MG" />
        <meta property="og:description" content="Automatize seu atendimento com IA: chatbots WhatsApp 24h, qualificação de leads automática e agendamentos inteligentes. Economize 5 horas/dia e aumente vendas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexusproai.com.br/" />
        <meta property="og:image" content="https://nexusproai.com.br/og-image.jpg" />
        <meta property="og:site_name" content="Nexus Pro" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nexus Pro - Automação Inteligente com IA para Empresas" />
        <meta name="twitter:description" content="Automatize atendimento WhatsApp 24h, qualifique leads e agende clientes automaticamente. Economize 5 horas/dia." />
        <meta name="twitter:image" content="https://nexusproai.com.br/twitter-image.jpg" />
        
        <link rel="icon" type="image/png" href="/flavicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#2563eb" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nexus Pro",
              "description": "Empresa especializada em automação inteligente com IA para empresas. Chatbots WhatsApp, qualificação de leads e agendamentos automáticos.",
              "url": "https://nexusproai.com.br",
              "logo": "https://nexusproai.com.br/logomarca.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-31-99444-2517",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese"],
                "areaServed": "BR"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Betim",
                "addressRegion": "MG",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://instagram.com/nexusproai",
                "https://linkedin.com/company/nexusproai"
              ],
              "priceRange": "$$",
              "founder": {
                "@type": "Person",
                "name": "Nexus Pro Team"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Automações Inteligentes",
                  "description": "Automação de processos com Inteligência Artificial"
                },
                {
                  "@type": "Service", 
                  "name": "Análise de Dados",
                  "description": "Business Intelligence e análise preditiva"
                },
                {
                  "@type": "Service",
                  "name": "IA para Processos Empresariais", 
                  "description": "Soluções de IA customizadas para empresas"
                }
              ]
            })
          }}
        />

        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
            
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `,
              }}
            />
          </>
        )}
      </Head>

      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="sobre">
          <About />
        </section>
        
        <section id="beneficios">
          <Benefits />
        </section>

        <section id="como-funciona">
          <HowItWorks />
        </section>
        
        <section id="depoimentos">
          <Testimonials />
        </section>
        
        <section id="contato">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}