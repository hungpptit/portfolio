import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import SmartLogisticsPage from './pages/SmartLogisticsPage';
import MovieTicketPage from './pages/MovieTicketPage';
import ToeicChatbotPage from './pages/ToeicChatbotPage';
import LibraryManagementPage from './pages/LibraryManagementPage';
import TechStorePage from './pages/TechStorePage';
import GenericProjectPage from './pages/GenericProjectPage';

// ─── Home Page ─────────────────────────────────────────────────────────────
const HomePage: React.FC = () => {
  useDocumentTitle();

  return (
    <div className="relative min-h-screen bg-[#131313] text-[#e4e2e1] overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#121212]">
      <CustomCursor />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
        <Capabilities />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
  );
};

// ─── App with Routing ──────────────────────────────────────────────────────
export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/smart-logistics" element={<SmartLogisticsPage />} />
      <Route path="/project/movie-ticket-booking" element={<MovieTicketPage />} />
      <Route path="/project/toeic-ai-microservices" element={<ToeicChatbotPage />} />
      <Route path="/project/smart-library" element={<LibraryManagementPage />} />
      <Route path="/project/tech-store-ecosystem" element={<TechStorePage />} />
      <Route path="/project/:id" element={<GenericProjectPage />} />
    </Routes>
  );
};

export default App;
