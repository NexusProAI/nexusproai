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
const Testimonials = dynamic(() => import('../components/Testimonials'), { 
  ssr: false,
  loading: () => <LoadingSection height="h-80" />
});
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
        <title>Nexus Pro - Sua Empresa no Piloto Automático com IA</title>
        <meta 
          name="description" 
          content="Chatbots inteligentes para WhatsApp e Instagram. Automatize atendimento, agende clientes 24/7 e qualifique leads automaticamente. Para empresas de serviços."
        />
        <meta name="keywords" content="chatbot whatsapp, chatbot instagram, agendamento automático, automação atendimento, qualificação leads, consultório, clínica, escritório, escola" />
        <meta name="author" content="Nexus Pro" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="pt-BR" />
        <link rel="canonical" href="https://seudominio.com.br/" />
        
        <meta property="og:title" content="Nexus Pro - Automação com IA para Empresas de Serviços" />
        <meta property="og:description" content="Chatbots inteligentes que atendem 24h, qualificam leads e agendam automaticamente. Para consultórios, escritórios e escolas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seudominio.com.br/" />
        <meta property="og:image" content="https://seudominio.com.br/og-image.jpg" />
        <meta property="og:site_name" content="Nexus Pro" />
        <meta property="og:locale" content="pt_BR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nexus Pro - Chatbots Inteligentes para Empresas" />
        <meta name="twitter:description" content="Atendimento automático 24h no WhatsApp. Qualifique leads e agende clientes sem intervenção humana." />
        <meta name="twitter:image" content="https://seudominio.com.br/twitter-image.jpg" />
        
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
              "description": "Agência especializada em Inteligência Artificial, Automações e Análise de Dados",
              "url": "https://seudominio.com.br",
              "logo": "https://seudominio.com.br/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-9999-9999",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Betim",
                "addressRegion": "MG",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://linkedin.com/company/nomeDaAgencia",
                "https://twitter.com/nomeDaAgencia"
              ],
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