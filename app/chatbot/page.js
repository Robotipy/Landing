import ChatbotHero from "../../components/ChatbotHero";
import ChatbotFeatures from "../../components/ChatbotFeatures";
import ChatbotProcess from "../../components/ChatbotProcess";
import ChatbotUseCases from "../../components/ChatbotUseCases";
import ChatbotFAQ from "../../components/ChatbotFAQ";
import ChatbotCTA from "../../components/ChatbotCTA";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chatbot Services - Robotipy",
  description: "AI-powered conversational assistants that connect seamlessly to your data sources, providing natural language interface for both internal teams and external clients.",
};

const ChatbotPage = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <ChatbotHero />
        <ChatbotFeatures />
        <ChatbotProcess />
        <ChatbotUseCases />
        <ChatbotCTA />
        <ChatbotFAQ />
      </main>
      <Footer />
    </>
  );
};

export default ChatbotPage;
