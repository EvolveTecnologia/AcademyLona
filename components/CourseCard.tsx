import React from 'react';
import { Course } from '../types';
import { Play } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: (id: string) => void;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop';

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div 
      className="flex-shrink-0 w-full cursor-pointer group/card relative outline-none focus:outline-none z-0 hover:z-20 focus:z-20 select-none"
      onClick={() => onClick(course.id)}
      tabIndex={0}
      role="button"
    >
      <div className="relative aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden bg-[#1E293B] shadow-md transition-all duration-300 ease-out transform origin-center group-hover/card:scale-[1.03] ring-0 group-hover/card:ring-2 ring-[#E8B84B]/80">
        
        {/* Background Image */}
        <img 
          src={course.heroImage || course.thumbnail || FALLBACK_IMAGE} 
          alt={course.title}
          className="w-full h-full object-cover transition-all duration-300 opacity-90 group-hover/card:opacity-100 group-hover/card:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== FALLBACK_IMAGE) {
              target.src = FALLBACK_IMAGE;
            }
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-300" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8B84B] rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover/card:scale-100 transition-transform duration-300 ease-out">
            <Play size={15} className="text-[#0F172A] fill-[#0F172A] ml-0.5" />
          </div>
        </div>
        
        {/* Progress Bar */}
        {course.progress > 0 && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/20">
            <div 
              className="h-full bg-gradient-to-r from-[#183D73] to-[#E8B84B] shadow-[0_0_6px_rgba(232,184,75,0.8)]" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Meta Data */}
      <div className="mt-1.5 sm:mt-2 px-0.5">
        <h3 className="text-[11px] sm:text-xs md:text-sm font-bold leading-tight sm:leading-snug text-gray-100 group-hover/card:text-white transition-colors line-clamp-2">
          {course.title}
        </h3>
        <p className="text-[9.5px] sm:text-[10px] md:text-[11px] text-[#E8B84B] mt-0.5 sm:mt-1 line-clamp-1 font-semibold tracking-wide">
          {course.category}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
