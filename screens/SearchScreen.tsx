import React, { useState, useMemo } from 'react';
import { Search, History, TrendingUp, X } from 'lucide-react';
import { Category } from '../types';
import { COURSES } from '../constants';
import CourseCard from '../components/CourseCard';

interface SearchScreenProps {
  onCourseClick: (id: string) => void;
}

const CATEGORY_IMAGES: Record<string, string> = {
  [Category.Excellentia]: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop',
  [Category.Sante]: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop',
  [Category.Autonomisation]: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  [Category.DroitsHumains]: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
  [Category.Educacao]: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
  [Category.Tecnologia]: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
  [Category.Sustentabilidade]: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop',
  [Category.Gestao]: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
  [Category.Idiomas]: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop',
  [Category.Alimentos]: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
  [Category.ENEM]: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop',
  [Category.EJA]: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop',
};

const DEFAULT_CATEGORY_IMAGE = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop';

const SearchScreen: React.FC<SearchScreenProps> = ({ onCourseClick }) => {
  const [query, setQuery] = useState('');
  
  const categories = Object.values(Category);
  
  const filteredCourses = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return COURSES.filter(course => 
      course.title.toLowerCase().includes(lowerQuery) || 
      course.category.toLowerCase().includes(lowerQuery) ||
      course.instructor.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const trending = [
    'Gestion de Projet Agile',
    'Intelligence Artificielle & Outils',
    'Leadership & Entrepreneuriat en RDC',
    'Anglais des Affaires Internationales'
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-6 md:px-16 pt-12 md:pt-16 pb-24 animate-in fade-in duration-500">
      
      {/* Search Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#183D73]/30 blur-xl rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#E8B84B] transition-colors" size={24} />
          <input 
            type="text" 
            placeholder="Que souhaitez-vous apprendre aujourd'hui ?"
            className="w-full bg-[#1E293B] text-white py-4 md:py-5 pl-16 pr-14 rounded-2xl font-medium placeholder-gray-400 outline-none border border-white/15 focus:border-[#E8B84B] transition-all text-base md:text-lg shadow-xl relative z-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white z-20 cursor-pointer"
            >
              <X size={22} />
            </button>
          )}
        </div>
      </div>

      {!query ? (
        <div className="max-w-6xl mx-auto space-y-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <History size={16} className="text-[#E8B84B]" /> Recherches Fréquentes
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {['excellentia', 'santé', 'leadership', 'python', 'anglais', 'gestion', 'agriculture', 'drépanocytose'].map(tag => (
                  <button 
                    key={tag} 
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-300 hover:bg-[#183D73] hover:border-[#E8B84B]/40 hover:text-[#E8B84B] transition-all cursor-pointer capitalize"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-[#E8B84B]" /> Tendances en RDC
              </h2>
              <div className="space-y-2">
                {trending.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setQuery(item)}
                    className="w-full flex items-center gap-4 py-2.5 px-4 rounded-xl hover:bg-[#183D73]/40 transition-all group text-left cursor-pointer border border-transparent hover:border-[#E8B84B]/20"
                  >
                    <span className="text-xl font-black text-gray-500 group-hover:text-[#E8B84B] transition-colors italic">#{idx + 1}</span>
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-white">{item}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <section>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Explorer par Catégorie</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {categories.map((cat) => (
                <div 
                  key={cat} 
                  onClick={() => setQuery(cat)}
                  className="aspect-video relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#E8B84B] transition-all shadow-md bg-[#1E293B]"
                >
                  <img 
                    src={CATEGORY_IMAGES[cat] || DEFAULT_CATEGORY_IMAGE} 
                    alt={cat} 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== DEFAULT_CATEGORY_IMAGE) {
                        target.src = DEFAULT_CATEGORY_IMAGE;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-xs font-bold uppercase tracking-wider text-white leading-tight">{cat}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="animate-in fade-in duration-300 max-w-[1600px] mx-auto">
          <h2 className="text-gray-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-3">
            Résultats pour <span className="text-white font-black">"{query}"</span> ({filteredCourses.length})
          </h2>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 gap-x-6">
              {filteredCourses.map(course => (
                <div key={course.id} className="flex justify-center">
                  <CourseCard course={course} onClick={onCourseClick} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-28 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-[#E8B84B]">
                <Search size={28} />
              </div>
              <p className="text-lg font-bold text-white mb-1">Aucun résultat trouvé</p>
              <p className="text-xs text-gray-400 max-w-sm">Essayez des termes plus généraux ou explorez les catégories thématiques.</p>
              <button 
                onClick={() => setQuery('')}
                className="mt-6 text-[#E8B84B] font-bold text-xs uppercase tracking-wider hover:text-white border border-[#E8B84B]/40 px-5 py-2.5 rounded-xl hover:bg-[#183D73] transition-all cursor-pointer"
              >
                Effacer la recherche
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchScreen;
