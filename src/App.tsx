import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Acting from './components/Acting';
import Modeling from './components/Modeling';
import Ambition from './components/Ambition';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import ProjectModal from './components/ProjectModal';
import CompCardModal from './components/CompCardModal';
import CustomizeGuideModal from './components/CustomizeGuideModal';
import { ProjectItem } from './types';
import { GALLERY_ITEMS } from './data/portfolioData';
import { HelpCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    image: string | null;
    title?: string;
    caption?: string;
    currentIndex?: number;
  }>({
    isOpen: false,
    image: null,
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [compCardOpen, setCompCardOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active section
  useEffect(() => {
    const sections = ['home', 'about', 'acting', 'modeling', 'ambition', 'gallery', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lightbox open helper
  const handleOpenImage = (image: string, title: string, caption?: string) => {
    const index = GALLERY_ITEMS.findIndex((item) => item.image === image);
    setLightboxState({
      isOpen: true,
      image,
      title,
      caption,
      currentIndex: index !== -1 ? index : undefined,
    });
  };

  const handleNextImage = () => {
    if (lightboxState.currentIndex === undefined) return;
    const nextIdx = (lightboxState.currentIndex + 1) % GALLERY_ITEMS.length;
    const nextItem = GALLERY_ITEMS[nextIdx];
    setLightboxState({
      isOpen: true,
      image: nextItem.image,
      title: nextItem.title,
      caption: `${nextItem.category} • ${nextItem.caption}`,
      currentIndex: nextIdx,
    });
  };

  const handlePrevImage = () => {
    if (lightboxState.currentIndex === undefined) return;
    const prevIdx = (lightboxState.currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    const prevItem = GALLERY_ITEMS[prevIdx];
    setLightboxState({
      isOpen: true,
      image: prevItem.image,
      title: prevItem.title,
      caption: `${prevItem.category} • ${prevItem.caption}`,
      currentIndex: prevIdx,
    });
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] relative selection:bg-white selection:text-black">
      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main>
        <Hero onNavigate={handleNavigate} onOpenImage={handleOpenImage} />
        <About onOpenImage={handleOpenImage} onNavigate={handleNavigate} />
        <Acting
          onOpenImage={handleOpenImage}
          onSelectProject={(project) => setSelectedProject(project)}
          onNavigate={handleNavigate}
        />
        <Modeling
          onOpenImage={handleOpenImage}
          onOpenCompCard={() => setCompCardOpen(true)}
        />
        <Ambition />
        <Gallery onOpenImage={handleOpenImage} />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Fullscreen Image Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        image={lightboxState.image}
        title={lightboxState.title}
        caption={lightboxState.caption}
        onClose={() => setLightboxState({ isOpen: false, image: null })}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        hasNext={lightboxState.currentIndex !== undefined}
        hasPrev={lightboxState.currentIndex !== undefined}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateToContact={() => handleNavigate('contact')}
      />

      {/* Composite Card / Casting Modal */}
      <CompCardModal
        isOpen={compCardOpen}
        onClose={() => setCompCardOpen(false)}
      />

      {/* Guide for Editing Content & Images */}
      <CustomizeGuideModal
        isOpen={guideOpen}
        onClose={() => setGuideOpen(false)}
      />

      {/* Discreet floating guide pill */}
      <div className="fixed bottom-6 right-6 z-30 print:hidden">
        <button
          onClick={() => setGuideOpen(true)}
          className="px-3.5 py-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 backdrop-blur-md text-[11px] font-mono tracking-widest uppercase flex items-center gap-2 shadow-2xl transition-all cursor-pointer group"
          title="How to replace images and edit portfolio specs"
        >
          <HelpCircle className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
          <span>Image & Data Guide</span>
        </button>
      </div>
    </div>
  );
}
