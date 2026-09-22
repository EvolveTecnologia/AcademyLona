import React, { useState, useEffect, useRef } from 'react';
import { COURSES } from '../constants';
import { Category } from '../types';
import CourseCard from '../components/CourseCard';
import { GraduationCap, HeartPulse, Sparkles, Scale, Play, ArrowRight, Star, BookOpen, Terminal, Leaf, Briefcase, Globe, Utensils, Award, Users } from 'lucide-react';

interface HomeScreenProps {
  onCourseClick: (id: string) => void;
  onCategoryClick: (category: Category) => void;
  myListIds?: string[];
  onToggleMyList?: (id: string) => void;
  onOpenAiTutor?: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onCourseClick, onCategoryClick, myListIds = [], onToggleMyList, onOpenAiTutor }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slides = [
    {
      id: 'excellentia-math-sup',
      title: 'PROGRAMME EXCELLENTIA : MATHÉMATIQUES SUPÉRIEURES',
      subtitle: 'Bourses d\'Élite',
      description: 'Préparation académique d\'excellence en algèbre linéaire, analyse et modélisation scientifique pour les boursiers EXCELLENTIA en RDC.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop',
      category: 'Programme EXCELLENTIA & STEM'
    },
    {
      id: 'drepanocytose-prevention',
      title: 'SANTÉ : LUTTE CONTRE LA DRÉPANOCYTOSE',
      subtitle: 'Santé Communautaire',
      description: 'Guide clinique et de sensibilisation pour le dépistage précoce de l\'électrophorèse de l\'hémoglobine et la prise en charge en RDC.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
      category: 'Santé & Prévention'
    },
    {
      id: 'femmes-leadership-entrepreneuriat',
      title: 'AUTONOMISATION DES FEMMES & ENTREPRENEURIAT',
      subtitle: 'Leadership Féminin',
      description: 'Développez votre entreprise, maîtrisez l\'éducation financière et accédez aux micro-crédits pour impacter positivement votre communauté.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
      category: 'Autonomisation des Femmes'
    },
    {
      id: 'droits-humains-lutte-vbg',
      title: 'DROITS HUMAINS & LUTTE CONTRE LES VBG',
      subtitle: 'Engagement Citoyen',
      description: 'Cadre légal, assistance psycho-juridique aux survivantes et éducation civique pour la paix et la justice sociale en RDC.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
      category: 'Éducation Civique & Droits'
    },
    {
      id: 'fundamentos-programacao-web',
      title: 'TECHNOLOGIE & INNOVATION DIGITALE',
      subtitle: 'Carrière Tech & Cloud',
      description: 'Programmation moderne, outils collaboratifs Cloud, cybersécurité, automatisation industrielle et intelligence artificielle.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      category: 'Technologie & Innovation'
    }
  ];

  const categories = [
    { id: Category.Excellentia, label: 'EXCELLENTIA & STEM', icon: GraduationCap, color: 'from-[#183D73] to-[#102B52]' },
    { id: Category.Sante, label: 'Santé & Prévention', icon: HeartPulse, color: 'from-[#0B6E4F] to-[#183D73]' },
    { id: Category.Autonomisation, label: 'Autonomisation des Femmes', icon: Sparkles, color: 'from-[#8C271E] to-[#183D73]' },
    { id: Category.DroitsHumains, label: 'Droits Humains & Citoyenneté', icon: Scale, color: 'from-[#2D3142] to-[#183D73]' },
    { id: Category.Educacao, label: 'Éducation & Qualification', icon: BookOpen, color: 'from-[#183D73] to-[#0A558C]' },
    { id: Category.Tecnologia, label: 'Technologie & Innovation', icon: Terminal, color: 'from-[#0A558C] to-[#102B52]' },
    { id: Category.Sustentabilidade, label: 'Environnement & Durabilité', icon: Leaf, color: 'from-[#0B6E4F] to-[#0D4B34]' },
    { id: Category.Gestao, label: 'Gestion & Entrepreneuriat', icon: Briefcase, color: 'from-[#6E4F0B] to-[#183D73]' },
    { id: Category.Idiomas, label: 'Langues & Communication', icon: Globe, color: 'from-[#1E3A8A] to-[#183D73]' },
    { id: Category.Alimentos, label: 'Agroalimentaire & Production', icon: Utensils, color: 'from-[#854D0E] to-[#183D73]' },
    { id: Category.ENEM, label: 'Préparation Examens (EXETAT)', icon: Award, color: 'from-[#7C2D12] to-[#183D73]' },
    { id: Category.EJA, label: 'Éducation des Adultes', icon: Users, color: 'from-[#374151] to-[#183D73]' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
    touchStartX.current = null;
  };

  const CONTENT_PADDING = "px-4 sm:px-6 md:px-10";

  const SectionRow = ({ title, category }: { title: string, category: Category }) => {
    const courses = COURSES.filter(c => c.category === category);
    if (courses.length === 0) return null;

    return (
      <section className="group/section animate-in fade-in slide-in-from-bottom-4 duration-700 mb-6 md:mb-8">
        <div className={`flex items-center justify-between mb-3 ${CONTENT_PADDING}`}>
          <h2 className="text-xs sm:text-sm md:text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E8B84B]" />
            {title}
          </h2>
          <button 
            onClick={() => onCategoryClick(category)}
            className="text-[11px] font-bold text-[#E8B84B] hover:underline uppercase tracking-wider flex items-center gap-1"
          >
            <span>Voir tout</span>
            <ArrowRight size={12} />
          </button>
        </div>
        <div className="relative">
          <div className={`flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar py-2 ${CONTENT_PADDING} scroll-smooth items-start`}>
            {courses.map(course => (
              <div key={course.id} className="w-38 sm:w-48 md:w-60 lg:w-64 flex-shrink-0">
                <CourseCard course={course} onClick={onCourseClick} />
              </div>
            ))}
            <div className="w-4 flex-shrink-0" />
          </div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#0F172A] to-transparent pointer-events-none hidden md:block z-20" />
        </div>
      </section>
    );
  };

  const currentHero = slides[currentSlide];

  return (
    <div className="text-white pb-24 md:pb-16 select-none animate-in fade-in duration-500 overflow-x-hidden bg-[#0F172A]">
      
      {/* Hero Banner Carousel (Disney+ Style) */}
      <div 
        className="relative h-[65vh] sm:h-[70vh] md:h-[75vh] w-full overflow-hidden group cursor-pointer mb-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => onCourseClick(currentHero.id)}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover animate-ken-burns filter brightness-75"
              referrerPolicy="no-referrer"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            
            <div className={`absolute top-0 left-0 h-full flex flex-col justify-center max-w-2xl pt-16 md:pt-8 ${CONTENT_PADDING}`}>
              <div className="inline-flex items-center gap-2 mb-2 animate-in slide-in-from-left-4 fade-in duration-700 delay-100">
                <span className="w-2 h-2 rounded-full bg-[#E8B84B] animate-pulse" />
                <span className="text-[#E8B84B] font-extrabold tracking-widest uppercase text-[10px] md:text-xs">
                  {slide.category}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-3 drop-shadow-xl animate-in slide-in-from-left-4 fade-in duration-700 delay-200 tracking-tight text-white">
                {slide.title}
              </h1>
              <p className="text-gray-200 text-xs md:text-sm lg:text-base mb-6 leading-relaxed line-clamp-3 md:line-clamp-none animate-in slide-in-from-left-4 fade-in duration-700 delay-300 max-w-xl">
                {slide.description}
              </p>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500">
                <button 
                  onClick={(e) => { e.stopPropagation(); onCourseClick(slide.id); }}
                  className="bg-gradient-to-r from-[#E8B84B] to-[#D4A338] hover:from-[#FCE082] hover:to-[#E8B84B] text-[#0F172A] px-6 py-3 rounded-xl font-black uppercase tracking-wider text-xs transition-all transform hover:scale-[1.03] active:scale-95 shadow-xl shadow-[#E8B84B]/20 cursor-pointer flex items-center gap-2"
                >
                  <Play size={16} className="fill-[#0F172A]" />
                  <span>Suivre ce cours</span>
                </button>
                <div className="px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                  {slide.subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Indicators */}
        <div className={`absolute bottom-6 right-6 md:right-12 z-20 flex gap-2 ${CONTENT_PADDING}`}>
          {slides.map((_, i) => (
            <button
              key={i} 
              onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                i === currentSlide ? 'w-6 sm:w-8 bg-[#E8B84B]' : 'w-2 bg-gray-500 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories Row (Horizontal scroll without scrollbars) */}
      <div className={`mb-8 relative z-20 ${CONTENT_PADDING}`}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
            <Star size={14} className="text-[#E8B84B] fill-[#E8B84B]" />
            <span>Catégories & Domaines d'Apprentissage</span>
          </h3>
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar py-2 scroll-smooth">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button 
                  key={cat.id}
                  onClick={() => onCategoryClick(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r ${cat.color} border border-white/15 hover:border-[#E8B84B] hover:scale-[1.03] active:scale-95 transition-all duration-200 group shadow-lg cursor-pointer`}
                >
                  <div className="w-9 h-9 rounded-xl bg-black/25 flex items-center justify-center text-[#E8B84B] group-hover:scale-110 transition-transform shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-white whitespace-nowrap">
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#0F172A] to-transparent pointer-events-none hidden sm:block z-10" />
        </div>
      </div>

      {/* Content Rows for all categories */}
      <div className="space-y-4">
        <SectionRow title="Programme EXCELLENTIA & STEM" category={Category.Excellentia} />
        <SectionRow title="Santé & Prévention Médicale" category={Category.Sante} />
        <SectionRow title="Autonomisation des Femmes & Entrepreneuriat" category={Category.Autonomisation} />
        <SectionRow title="Éducation Civique & Droits Humains" category={Category.DroitsHumains} />
        <SectionRow title="Éducation & Qualification Professionnelle" category={Category.Educacao} />
        <SectionRow title="Technologie & Innovation Digitale" category={Category.Tecnologia} />
        <SectionRow title="Environnement & Développement Durable" category={Category.Sustentabilidade} />
        <SectionRow title="Gestion, Management & Entrepreneuriat" category={Category.Gestao} />
        <SectionRow title="Langues & Communication Internationale" category={Category.Idiomas} />
        <SectionRow title="Agroalimentaire & Production Locale" category={Category.Alimentos} />
        <SectionRow title="Préparation aux Examens d'État (EXETAT)" category={Category.ENEM} />
        <SectionRow title="Éducation des Adultes & Insertion" category={Category.EJA} />
      </div>

      <style>{`
        .animate-ken-burns {
          animation: kenBurns 20s infinite alternate;
        }
        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
};

export default HomeScreen;
