import ChatbotHero from "@/components/ChatbotHero";
import ChatbotFeatures from "@/components/ChatbotFeatures";
import ChatbotProcess from "@/components/ChatbotProcess";
import ChatbotUseCases from "@/components/ChatbotUseCases";
import ChatbotFAQ from "@/components/ChatbotFAQ";
import ChatbotCTA from "@/components/ChatbotCTA";
import RelatedReading from "@/components/RelatedReading";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chatbot Services - Robotipy",
  description: "AI-powered conversational assistants that connect seamlessly to your data sources, providing natural language interface for both internal teams and external clients.",
};

const chatbotRelatedLinks = [
  {
    href: "/blog/rpa-con-peras-y-manzanas",
    title: "RPA con peras y manzanas: cómo combinar bots y chatbots",
    description:
      "Cómo se complementan los chatbots con la automatización RPA para resolver consultas, ejecutar acciones y conectar con tus sistemas.",
  },
  {
    href: "/rpa",
    title: "Automatización RPA con Rocketbot",
    description:
      "Cuando el chatbot necesita ejecutar tareas en SAP, Excel o portales web, RPA es la pieza que completa el flujo.",
  },
];

const ChatbotPage = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content">
        <ChatbotHero />
        <ChatbotFeatures />
        <ChatbotProcess />
        <ChatbotUseCases />
        <RelatedReading
          title="Profundiza en automatización conversacional"
          links={chatbotRelatedLinks}
        />
        <ChatbotCTA />
        <ChatbotFAQ />
      </main>
      <Footer />
    </>
  );
};

export default ChatbotPage;
