
export enum Category {
  // Piliers Fondation Lona
  Excellentia = 'Programme EXCELLENTIA & STEM',
  Sante = 'Santé & Prévention',
  Autonomisation = 'Autonomisation des Femmes',
  DroitsHumains = 'Éducation Civique & Droits Humains',

  // Catégories Incluses de la Plateforme (en français)
  Educacao = 'Éducation & Qualification',
  Tecnologia = 'Technologie & Innovation Digitale',
  Sustentabilidade = 'Environnement & Durabilité',
  Gestao = 'Gestion & Entrepreneuriat',
  Idiomas = 'Langues & Communication',
  Alimentos = 'Agroalimentaire & Production',
  ENEM = 'Préparation aux Examens d\'État',
  EJA = 'Éducation des Adultes'
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
  lastProgress?: number; // Temps en secondes
  quality?: string;
}

export interface Material {
  id: string;
  title: string;
  type: 'pdf' | 'doc' | 'link';
  url: string;
  isDownloaded?: boolean; 
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface CourseModule {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  category: Category;
  description: string;
  instructor: string;
  thumbnail: string;
  heroImage: string;
  progress: number;
  duration: string;
  modulesCount: number;
  modules?: CourseModule[];
  materials?: Material[];
  quiz?: QuizQuestion[];
  isExcellentia?: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  cpf: string;
  avatar: string;
  level: number;
  badges: string[];
  plan: string;
}

export interface Certificate {
  id: string;
  title: string;
  date: string;
  category?: string;
  honors?: string;
}

