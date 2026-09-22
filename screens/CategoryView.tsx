import React from 'react';
import { Category } from '../types';
import { COURSES } from '../constants';
import CourseCard from '../components/CourseCard';
import { ChevronLeft } from 'lucide-react';

interface CategoryViewProps {
  category: Category;
  onBack: () => void;
  onCourseClick: (id: string) => void;
}

const CategoryView: React.FC<CategoryViewProps> = ({ category, onBack, onCourseClick }) => {
  const filteredCourses = COURSES.filter(c => c.category === category);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white animate-in slide-in-from-right duration-300 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 md:left-24 right-0 z-50 p-5 md:p-6 flex items-center bg-[#102B52]/95 backdrop-blur-md border-b border-[#E8B84B]/20 shadow-lg">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 px-4 py-2 bg-[#183D73] hover:bg-[#245398] rounded-full text-[#E8B84B] transition-all group border border-[#E8B84B]/40 cursor-pointer"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-wider hidden md:block">Retour</span>
        </button>
        <h1 className="ml-4 md:ml-6 text-base md:text-xl font-black uppercase tracking-tight text-white drop-shadow-md">
          {category}
        </h1>
      </div>

      {/* Grid Container */}
      <div className="pt-28 px-4 md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="flex justify-center w-full">
            <CourseCard course={course} onClick={onCourseClick} />
          </div>
        ))}
        {filteredCourses.length === 0 && (
          <div className="col-span-full py-32 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Aucun contenu trouvé</h3>
            <p className="text-gray-300 italic text-sm">Aucun cours disponible dans ce pilier pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryView;
