import { Category, Course } from './types';

// URLs de vidéos haute fidélité pour démonstration de streaming adaptatif
const STEM_VIDEO_1 = 'https://www.youtube.com/watch?v=3qRrVvMntok'; // Mathématiques / Algèbre
const STEM_VIDEO_2 = 'https://www.youtube.com/watch?v=Go4K2QwKWIk'; // Physique / Mécanique
const STEM_VIDEO_3 = 'https://youtu.be/gHO2AvpyScI'; // IA & Python
const HEALTH_VIDEO_1 = 'https://www.youtube.com/watch?v=7LG4D_USSrU'; // Biologie & Génétique
const HEALTH_VIDEO_2 = 'https://www.youtube.com/watch?v=p3Qec3Rl_s4'; // Santé publique & Prévention
const WOMEN_VIDEO_1 = 'https://www.youtube.com/watch?v=0HqY7Ja5nXM'; // Gestion & Micro-crédit
const WOMEN_VIDEO_2 = 'https://www.youtube.com/watch?v=BffHzt-XnWc'; // Leadership & Communication
const CIVIC_VIDEO_1 = 'https://www.youtube.com/watch?v=juK8O_IuIcI'; // Droits & Citoyenneté

const EXCELLENTIA_GUIDE_URL = 'https://fondationlona.org/excellentia-guide.pdf';
const HEALTH_GUIDE_URL = 'https://fondationlona.org/guide-drepanocytose.pdf';
const WOMEN_GUIDE_URL = 'https://fondationlona.org/manuel-entrepreneuriat-femmes.pdf';
const RIGHTS_GUIDE_URL = 'https://fondationlona.org/vbg-droits-humains.pdf';

// --- 🌟 1. PROGRAMME EXCELLENTIA & STEM ---
const EXCELLENTIA_COURSES: Course[] = [
  {
    id: 'excellentia-stem-mathematiques-superieures',
    title: 'Programme EXCELLENTIA : Mathématiques Approfondies & Analyse Algébrique',
    category: Category.Excellentia,
    description: 'Cours de perfectionnement pour lauréats et boursiers EXCELLENTIA. Calcul différentiel, analyse matricielle, probabilités et modélisation appliquée aux sciences de l\'ingénieur.',
    instructor: 'Prof. Dieudonné Mwamba, Ph.D. • Chaire Mathématique Fondation Lona',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop',
    progress: 42,
    duration: '120h',
    modulesCount: 4,
    isExcellentia: true,
    materials: [
      { id: 'mat-ex-1', title: 'Recueil d\'Exercices Olympiques & Bourses Internationales EXCELLENTIA', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: true },
      { id: 'mat-ex-2', title: 'Aide-mémoire Algèbre Linéaire et Espaces Vectoriels', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: false }
    ],
    quiz: [
      { id: 1, question: "Quelle est la condition nécessaire et suffisante pour qu'une matrice carrée soit inversible ?", options: ["Son déterminant est strictement différent de zéro", "Tous ses coefficients diagonaux sont nuls", "La trace est égale à 1", "Son rang est inférieur à sa dimension"], correctAnswer: 0 },
      { id: 2, question: "Quel est l'objectif premier du programme EXCELLENTIA initié par Denise Nyakeru Tshisekedi ?", options: ["Octroyer des bourses universitaires d'excellence aux meilleurs diplômés d'État en RDC et à l'international", "Organiser des tournois sportifs", "Financer uniquement des entreprises privées", "Proposer des séminaires d'une journée"], correctAnswer: 0 },
      { id: 3, question: "Dans le cadre de l'apprentissage adaptatif, comment la plateforme calibre-t-elle les séries de problèmes mathématiques ?", options: ["En fonction du taux de réussite et de la vitesse de résolution de l'élève", "Par ordre purement aléatoire", "Selon l'heure de connexion de l'utilisateur", "En affichant toujours le même test"], correctAnswer: 0 }
    ],
    modules: [
      {
        title: 'Module 1 : Analyse Réelle & Fondements Algébriques',
        lessons: [
          { id: 'stem-1', title: 'Calcul Intégral et Développements Limités', duration: '28 min', completed: true, videoUrl: STEM_VIDEO_1 },
          { id: 'stem-2', title: 'Espaces Vectoriels et Applications Linéaires', duration: '34 min', completed: true, videoUrl: STEM_VIDEO_1 },
          { id: 'stem-3', title: 'Équations Différentielles Ordinaires Appliquées', duration: '40 min', completed: false, videoUrl: STEM_VIDEO_2 }
        ]
      },
      {
        title: 'Module 2 : Mathématiques Discrètes & Algorithmique',
        lessons: [
          { id: 'stem-4', title: 'Théorie des Graphes et Optimisation de Réseaux', duration: '35 min', completed: false, videoUrl: STEM_VIDEO_1 },
          { id: 'stem-5', title: 'Probabilités et Statistiques Bayésiennes pour la Recherche', duration: '45 min', completed: false, videoUrl: STEM_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'excellentia-ia-sciences-donnees-rdc',
    title: 'Intelligence Artificielle, Python & Innovation Technologique en RDC',
    category: Category.Excellentia,
    description: 'Formation de pointe en codage Python, traitement de données massives, vision par ordinateur et modèles d\'IA appliqués aux défis environnementaux et sanitaires en RDC.',
    instructor: 'Ing. Yannick Tshilumba • Expert IA & Cloud',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    progress: 15,
    duration: '80h',
    modulesCount: 3,
    isExcellentia: true,
    modules: [
      {
        title: 'Fondamentaux de la Programmation Python & Data',
        lessons: [
          { id: 'ia-1', title: 'Syntaxe Python, NumPy & Pandas pour les Sciences', duration: '32 min', completed: true, videoUrl: STEM_VIDEO_3 },
          { id: 'ia-2', title: 'Visualisation de Données Géospatiales en RDC', duration: '28 min', completed: false, videoUrl: STEM_VIDEO_3 }
        ]
      }
    ]
  },
  {
    id: 'excellentia-physique-energie-renouvelable',
    title: 'Physique Appliquée, Énergie Solaire & Ingénierie Électrique',
    category: Category.Excellentia,
    description: 'Conception de micro-réseaux photovoltaïques, circuits électroniques et solutions d\'électrification rurale adaptées aux provinces congolaises.',
    instructor: 'Dre Nathalie Lukoki • Docteure en Génie Énergétique',
    thumbnail: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '90h',
    modulesCount: 3,
    isExcellentia: true,
    modules: [
      {
        title: 'Systèmes Solaires & Stockage',
        lessons: [
          { id: 'phy-1', title: 'Dimensionnement d\'une Installation Photovoltaïque', duration: '30 min', completed: false, videoUrl: STEM_VIDEO_2 }
        ]
      }
    ]
  }
];

// --- 🩺 2. SANTÉ & PRÉVENTION ---
const SANTE_COURSES: Course[] = [
  {
    id: 'sante-prevention-drepanocytose-rdc',
    title: 'Comprendre et Prévenir la Drépanocytose : Dépistage, Soins & Sensibilisation',
    category: Category.Sante,
    description: 'Formation médicale et communautaire essentielle : physiopathologie de l\'hémoglobine S, électrophorèse prémaritale, gestion des crises vaso-occlusives et accompagnement des familles.',
    instructor: 'Dr. Patient Banza • Hématologue Référent Fondation Lona',
    thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    progress: 68,
    duration: '50h',
    modulesCount: 3,
    materials: [
      { id: 'mat-san-1', title: 'Guide Officiel Fondation Lona : Protocole de Prise en Charge de la Drépanocytose', type: 'pdf', url: HEALTH_GUIDE_URL, isDownloaded: true }
    ],
    quiz: [
      { id: 1, question: "Quel est l'examen médical décisif recommandé avant le mariage pour prévenir la transmission de la drépanocytose ?", options: ["L'électrophorèse de l'hémoglobine", "Uniquement un test de glycémie", "Une radiographie pulmonaire", "Une prise de tension artérielle"], correctAnswer: 0 },
      { id: 2, question: "Quel est le comportement réflexe primordial lors d'une crise drépanocytaire vaso-occlusive douloureuse ?", options: ["Une hydratation abondante et consultation médicale immédiate", "Interdire toute boisson", "Appliquer de la glace directement sur les articulations", "Ignorer les symptômes"], correctAnswer: 0 }
    ],
    modules: [
      {
        title: 'Module 1 : Notions Clés et Transmission Génétique',
        lessons: [
          { id: 'drep-1', title: 'L\'Hémoglobine S : Origine et Transmission Héréditaire', duration: '22 min', completed: true, videoUrl: HEALTH_VIDEO_1 },
          { id: 'drep-2', title: 'Importance du Dépistage Précoce et Bilan Préconjugal', duration: '25 min', completed: true, videoUrl: HEALTH_VIDEO_1 },
          { id: 'drep-3', title: 'Gestion à Domicile des Crises Douloureuses et Hydratation', duration: '30 min', completed: true, videoUrl: HEALTH_VIDEO_2 }
        ]
      },
      {
        title: 'Module 2 : Nutrition et Suivi Médical des Enfants Drépanocytaires',
        lessons: [
          { id: 'drep-4', title: 'Régime Alimentaire, Vitamines et Prévention des Infections', duration: '26 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'sante-maternelle-neonatale-communautaire',
    title: 'Santé Maternelle, Néonatale & Suivi Prénatal en Milieu Communautaire',
    category: Category.Sante,
    description: 'Protocoles de suivi des grossesses, consultations prénatales (CPN), prévention du paludisme chez la femme enceinte et accouchements sécurisés en maternité.',
    instructor: 'Sage-Femme Principale Solange Ndona • Clinique Reine de la Paix',
    thumbnail: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '45h',
    modulesCount: 2,
    modules: [
      {
        title: 'Suivi Prénatal et Signes d\'Alerte',
        lessons: [
          { id: 'mat-1', title: 'Les 4 Consultations Prénatales Fondamentales', duration: '24 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'secourisme-hygiene-communautaire-urgences',
    title: 'Premiers Secours, Hygiène Publique & Eau Potable',
    category: Category.Sante,
    description: 'Gestes d\'urgence vitale, réanimation, assainissement de l\'eau de consommation et prévention des épidémies hydriques en milieu scolaire et urbain.',
    instructor: 'Dr. Joseph Mukendi • Croix-Rouge & Santé Publique',
    thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '35h',
    modulesCount: 2,
    modules: [
      {
        title: 'Gestes Qui Sauvent',
        lessons: [
          { id: 'sec-1', title: 'Position Latérale de Sécurité et Étouffement', duration: '18 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  }
];

// --- 💼 3. AUTONOMISATION DES FEMMES & ENTREPRENEURIAT ---
const AUTONOMISATION_COURSES: Course[] = [
  {
    id: 'entrepreneuriat-gestion-microentreprise-femmes',
    title: 'Création, Gestion & Formalisation de Micro-Entreprises Féminines',
    category: Category.Autonomisation,
    description: 'Accompagnement pratique des femmes porteuses de projets : étude de marché locale, calcul du prix de revient, tenue de livre de caisse et accès aux microcrédits.',
    instructor: 'Mme Marie-Claire Yandji • Consultante Entrepreneuriat & Finance Inclusive',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    progress: 30,
    duration: '60h',
    modulesCount: 3,
    materials: [
      { id: 'mat-aut-1', title: 'Guide d\'Autonomisation Économique : Mon Premier Plan d\'Affaires', type: 'pdf', url: WOMEN_GUIDE_URL, isDownloaded: true }
    ],
    quiz: [
      { id: 1, question: "Comment calcule-t-on le seuil de rentabilité (point mort) d'une activité commerciale ?", options: ["Charges fixes divisées par le taux de marge sur coûts variables", "En additionnant toutes les recettes sans déduire les charges", "En fixant le prix au hasard selon le concurrent", "Uniquement par la marge brute annuelle"], correctAnswer: 0 },
      { id: 2, question: "Quelle est la règle d'or pour la pérennité financière d'une commerçante indépendante ?", options: ["Séparer rigoureusement la caisse de l'entreprise des dépenses familiales personnelles", "Mélanger toutes les recettes quotidiennes", "Vendre à perte pour avoir plus de clients", "Ne jamais enregistrer les flux financiers"], correctAnswer: 0 }
    ],
    modules: [
      {
        title: 'Module 1 : Valider son Idée et Structurer son Activité',
        lessons: [
          { id: 'ent-1', title: 'Identification des Opportunités Porteuses en RDC', duration: '20 min', completed: true, videoUrl: WOMEN_VIDEO_1 },
          { id: 'ent-2', title: 'Calcul du Coût de Revient et Marge Commerciale', duration: '28 min', completed: true, videoUrl: WOMEN_VIDEO_1 },
          { id: 'ent-3', title: 'Tenue de Caisse et Cahier des Dépenses Quotidiennes', duration: '25 min', completed: false, videoUrl: WOMEN_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'leadership-feminin-prise-de-parole',
    title: 'Leadership Féminin, Négociation & Prise de Parole Assertive',
    category: Category.Autonomisation,
    description: 'Développer sa confiance, affirmer son leadership dans les organisations et les communautés, conduire des réunions efficaces et négocier avec assurance.',
    instructor: 'Me Chantal Ilunga • Coach en Leadership & Avocate',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '40h',
    modulesCount: 2,
    modules: [
      {
        title: 'Communication d\'Impact',
        lessons: [
          { id: 'lead-1', title: 'Posture, Voix et Structure d\'une Intervention Publique', duration: '22 min', completed: false, videoUrl: WOMEN_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'marketing-digital-vente-whatsapp-business',
    title: 'Marketing Digital, Vente sur WhatsApp Business & Réseaux Sociaux',
    category: Category.Autonomisation,
    description: 'Créer son catalogue digital, photographier ses produits, fidéliser sa clientèle et conclure des ventes via les paiements mobiles (M-Pesa, Orange Money, Airtel Money).',
    instructor: 'Vanessa Luboya • Consultante Commerce Digital Kinshasa',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '50h',
    modulesCount: 3,
    modules: [
      {
        title: 'Catalogue & Relation Client Mobile',
        lessons: [
          { id: 'mkt-1', title: 'Configurer un Profil Professionnel WhatsApp & Mobile Money', duration: '25 min', completed: false, videoUrl: WOMEN_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- ⚖️ 4. ÉDUCATION CIVIQUE & DROITS HUMAINS ---
const DROITS_HUMAINS_COURSES: Course[] = [
  {
    id: 'droits-femmes-lutte-vbg-rdc',
    title: 'Protection des Droits des Femmes & Lutte Contre les Violences Basées sur le Genre (VBG)',
    category: Category.DroitsHumains,
    description: 'Cadre juridique congolais et international : Loi sur les violences sexuelles, identification des abus physiques et économiques, circuits d\'alerte et prise en charge holistique (médicale, juridique, psychologique).',
    instructor: 'Magistrat Hélène Bilonda & Cellule Juridique Fondation Lona',
    thumbnail: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=1200&auto=format&fit=crop',
    progress: 25,
    duration: '55h',
    modulesCount: 3,
    materials: [
      { id: 'mat-vbg-1', title: 'Guide Pratique : Mécanismes d\'Alerte & Prise en Charge Holistique des VBG en RDC', type: 'pdf', url: RIGHTS_GUIDE_URL, isDownloaded: true }
    ],
    quiz: [
      { id: 1, question: "Quel est le délai médical crucial pour l'administration de la prophylaxie post-exposition (PPE) après une agression sexuelle ?", options: ["Dans les 72 heures maximum", "Après deux semaines", "Aucun délai médical", "Uniquement après jugement du tribunal"], correctAnswer: 0 },
      { id: 2, question: "Selon la législation en RDC, le consentement libre et éclairé est-il obligatoire dans toute union matrimoniale ?", options: ["Oui, c'est une exigence formelle et un droit fondamental", "Non, l'accord familial suffit", "Uniquement pour les femmes majeures", "Non applicable"], correctAnswer: 0 }
    ],
    modules: [
      {
        title: 'Module 1 : Lois, Droits et Cadre Institutionnel',
        lessons: [
          { id: 'vbg-1', title: 'Les Instruments Légaux de Protection des Femmes et Filles en RDC', duration: '24 min', completed: true, videoUrl: CIVIC_VIDEO_1 },
          { id: 'vbg-2', title: 'Les 4 Piliers de Prise en Charge des Victimes de VBG', duration: '30 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'citoyennete-active-participation-paix',
    title: 'Citoyenneté Active, Engagement Communautaire & Culture de la Paix',
    category: Category.DroitsHumains,
    description: 'Comprendre les institutions de la République, les devoirs citoyens, la résolution pacifique des différends et le rôle de la jeunesse dans le développement provincial.',
    instructor: 'Prof. Augustin Kalombo • Sociologue & Médiateur Communautaire',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '40h',
    modulesCount: 2,
    modules: [
      {
        title: 'Démocratie & Cohésion Sociale',
        lessons: [
          { id: 'cit-1', title: 'Participation Citoyenne et Préservation des Biens Publics', duration: '20 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 📚 5. EDUCAÇÃO ---
const EDUCACAO_COURSES: Course[] = [
  {
    id: 'metodologias-ativas-pedagogia-digital',
    title: 'Metodologias Ativas de Ensino & Pedagogia Digital',
    category: Category.Educacao,
    description: 'Transformação das práticas pedagógicas através do ensino híbrido, sala de aula invertida, gamificação e recursos educacionais digitais abertos.',
    instructor: 'Dra. Camila Vasconcelos • Especialista em Tecnologia Educacional',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    progress: 35,
    duration: '60h',
    modulesCount: 3,
    materials: [
      { id: 'mat-edu-1', title: 'Guia de Metodologias Ativas no Ensino Contemporâneo', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: true }
    ],
    quiz: [
      { id: 1, question: "O que caracteriza a metodologia da Sala de Aula Invertida (Flipped Classroom)?", options: ["O aluno estuda o conteúdo teórico previamente em casa e utiliza o tempo em sala para práticas e debates", "Inverter as carteiras na sala de aula", "Apenas aplicar provas surpresa", "Substituir totalmente o professor por computadores"], correctAnswer: 0 }
    ],
    modules: [
      {
        title: 'Módulo 1: Fundamentos da Pedagogia Ativa',
        lessons: [
          { id: 'edu-1', title: 'Transição do Ensino Tradicional para o Ensino Centrado no Estudante', duration: '25 min', completed: true, videoUrl: STEM_VIDEO_1 },
          { id: 'edu-2', title: 'Ferramentas Digitais e Plataformas Colaborativas', duration: '30 min', completed: false, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'praticas-pedagogicas-inclusao',
    title: 'Práticas Pedagógicas Inclusivas & Acessibilidade Escolar',
    category: Category.Educacao,
    description: 'Estratégias para adaptação curricular, acolhimento da neurodiversidade, desenho universal para aprendizagem (DUA) e equidade educacional.',
    instructor: 'Prof. Marcus Vinicius • Mestre em Educação Especial',
    thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '45h',
    modulesCount: 2,
    modules: [
      {
        title: 'Módulo 1: Desenho Universal para a Aprendizagem',
        lessons: [
          { id: 'inc-1', title: 'Princípios do DUA no Planejamento de Aulas', duration: '22 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 💻 6. TECNOLOGIA ---
const TECNOLOGIA_COURSES: Course[] = [
  {
    id: 'fundamentos-programacao-web',
    title: 'Fundamentos de Programação, Algoritmos & Desenvolvimento Web',
    category: Category.Tecnologia,
    description: 'Lógica de programação essencial, estruturas de dados, HTML5, CSS3, JavaScript moderno e desenvolvimento de aplicações web completas.',
    instructor: 'Lucas Ferreira • Tech Lead & Desenvolvedor Fullstack',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    progress: 50,
    duration: '90h',
    modulesCount: 4,
    materials: [
      { id: 'mat-tec-1', title: 'Manual Prático de JavaScript Moderno e Git', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: true }
    ],
    quiz: [
      { id: 1, question: "Qual estrutura de dados opera no princípio FIFO (First In, First Out)?", options: ["Fila (Queue)", "Pilha (Stack)", "Árvore Binária", "Tabela Hash"], correctAnswer: 0 }
    ],
    modules: [
      {
        title: 'Módulo 1: Lógica e Estrutura de Código',
        lessons: [
          { id: 'tec-1', title: 'Variáveis, Condicionais e Laços de Repetição', duration: '28 min', completed: true, videoUrl: STEM_VIDEO_3 },
          { id: 'tec-2', title: 'Funções de Primeira Classe e Manipulação do DOM', duration: '32 min', completed: true, videoUrl: STEM_VIDEO_3 }
        ]
      }
    ]
  },
  {
    id: 'inteligencia-artificial-python',
    title: 'Inteligência Artificial Aplicada & Análise de Dados com Python',
    category: Category.Tecnologia,
    description: 'Machine learning, processamento de dados com Pandas e NumPy, modelos preditivos e introdução aos grandes modelos de linguagem (LLMs).',
    instructor: 'Renata Albuquerque, Ph.D. • Cientista de Dados',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
    progress: 10,
    duration: '85h',
    modulesCount: 3,
    modules: [
      {
        title: 'Módulo 1: Preparação e Análise Exploratória de Dados',
        lessons: [
          { id: 'ai-1', title: 'Pipeline de Dados com Python e Pandas', duration: '35 min', completed: true, videoUrl: STEM_VIDEO_3 },
          { id: 'ai-2', title: 'Treinando seu Primeiro Modelo Supervisionado', duration: '40 min', completed: false, videoUrl: STEM_VIDEO_3 }
        ]
      }
    ]
  },
  {
    id: 'seguranca-dados-nuvem',
    title: 'Segurança da Informação, Redes & Computação em Nuvem',
    category: Category.Tecnologia,
    description: 'Arquitetura em nuvem (AWS/GCP), criptografia, autenticação segura, práticas de DevOps e governança de segurança de dados.',
    instructor: 'Eduardo Silveira • Arquiteto Cloud & Cyber Security',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '70h',
    modulesCount: 3,
    modules: [
      {
        title: 'Módulo 1: Fundamentos de Arquitetura em Nuvem',
        lessons: [
          { id: 'cld-1', title: 'Serviços de Nuvem, Redes Privadas e Firewalls', duration: '27 min', completed: false, videoUrl: STEM_VIDEO_2 }
        ]
      }
    ]
  }
];

// --- 🌿 7. SUSTENTABILIDADE ---
const SUSTENTABILIDADE_COURSES: Course[] = [
  {
    id: 'gestao-ambiental-energias-renovaveis',
    title: 'Gestão Ambiental, Energias Renováveis & Práticas Sustentáveis',
    category: Category.Sustentabilidade,
    description: 'Transição energética, matriz solar e eólica, ESG no mundo corporativo, crédito de carbono e conformidade com metas de desenvolvimento sustentável.',
    instructor: 'Mariana Duarte • Engenheira Ambiental e Especialista ESG',
    thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
    progress: 20,
    duration: '50h',
    modulesCount: 3,
    materials: [
      { id: 'mat-sus-1', title: 'Guia Prático de Implantação de Práticas ESG', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: false }
    ],
    modules: [
      {
        title: 'Módulo 1: Transição Energética',
        lessons: [
          { id: 'sus-1', title: 'Energias Limpas e Viabilidade Econômica', duration: '26 min', completed: true, videoUrl: STEM_VIDEO_2 },
          { id: 'sus-2', title: 'Gestão de Resíduos e Economia Circular', duration: '30 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'agroecologia-sustentabilidade',
    title: 'Agroecologia, Recursos Hídricos e Preservação Florestal',
    category: Category.Sustentabilidade,
    description: 'Sistemas agroflorestais, manejo sustentável do solo, preservação de bacias hidrográficas e recuperação de áreas degradadas.',
    instructor: 'João Pedro Mendonça • Engenheiro Agrônomo',
    thumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '40h',
    modulesCount: 2,
    modules: [
      {
        title: 'Módulo 1: Princípios da Agroecologia',
        lessons: [
          { id: 'agr-1', title: 'Sistemas Produtivos Regenerativos', duration: '24 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  }
];

// --- 📈 8. GESTÃO ---
const GESTAO_COURSES: Course[] = [
  {
    id: 'gestao-agil-projetos-lideranca',
    title: 'Gestão Ágil de Projetos, Liderança & Tomada de Decisão',
    category: Category.Gestao,
    description: 'Metodologias Scrum e Kanban, gestão de equipes de alta performance, inteligência emocional e resolução de conflitos em ambientes dinâmicos.',
    instructor: 'Fabio Meireles • Agile Coach e Mentor Executivo',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    progress: 45,
    duration: '65h',
    modulesCount: 3,
    materials: [
      { id: 'mat-ges-1', title: 'Framework Ágil: Templates de Sprints e Backlog', type: 'pdf', url: WOMEN_GUIDE_URL, isDownloaded: true }
    ],
    modules: [
      {
        title: 'Módulo 1: Frameworks Ágeis na Prática',
        lessons: [
          { id: 'ges-1', title: 'Planejamento de Sprints e Cerimônias Ágeis', duration: '30 min', completed: true, videoUrl: WOMEN_VIDEO_2 },
          { id: 'ges-2', title: 'Liderança Servidora e Delegação Eficaz', duration: '28 min', completed: false, videoUrl: WOMEN_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'financas-planejamento-estrategico',
    title: 'Finanças Corporativas, Contabilidade & Orçamento Empresarial',
    category: Category.Gestao,
    description: 'Fluxo de caixa, demonstrações financeiras (DRE, Balanço), análise de investimentos (VPL, TIR) e planejamento tributário.',
    instructor: 'Patricia Santos • CFO & Consultora Financeira',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '55h',
    modulesCount: 3,
    modules: [
      {
        title: 'Módulo 1: Estruturação Financeira Básica',
        lessons: [
          { id: 'fin-1', title: 'Controle de Custos e Projeção de Fluxo de Caixa', duration: '32 min', completed: false, videoUrl: WOMEN_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 🌐 9. IDIOMAS ---
const IDIOMAS_COURSES: Course[] = [
  {
    id: 'ingles-profissional-comunicacao',
    title: 'Inglês Instrumental e Comunicação para Negócios Internacionais',
    category: Category.Idiomas,
    description: 'Vocabulário corporativo essencial, redação de e-mails formais, apresentações executivas e negociação em língua inglesa.',
    instructor: 'Sarah Jenkins • Especialista em Business English',
    thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop',
    progress: 15,
    duration: '75h',
    modulesCount: 4,
    modules: [
      {
        title: 'Módulo 1: Comunicação Executiva em Inglês',
        lessons: [
          { id: 'ing-1', title: 'Conduzindo Reuniões e Conferências Internacionais', duration: '25 min', completed: true, videoUrl: STEM_VIDEO_1 },
          { id: 'ing-2', title: 'Redação Comercial e Pitch de Negócios', duration: '30 min', completed: false, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'frances-pratico-carreira',
    title: 'Francês Prático para Carreira e Mobilidade Acadêmica',
    category: Category.Idiomas,
    description: 'Gramática aplicada, pronúncia, compreensão oral e preparação para exames de proficiência (DELF/DALF) e intercâmbio.',
    instructor: 'Prof. Jean-Marc Boucher • Aliança Francesa',
    thumbnail: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '60h',
    modulesCount: 3,
    modules: [
      {
        title: 'Módulo 1: Francês do Cotidiano e Profissional',
        lessons: [
          { id: 'fra-1', title: 'Expressões Essenciais e Entrevistas de Emprego em Francês', duration: '26 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 🍽️ 10. ALIMENTOS & BEBIDAS ---
const ALIMENTOS_COURSES: Course[] = [
  {
    id: 'boas-praticas-manipulacao-alimentos',
    title: 'Boas Práticas na Manipulação de Alimentos, Higiene & Vigilância Sanitária',
    category: Category.Alimentos,
    description: 'Normas de biossegurança e higiene na cadeia alimentar, prevenção de contaminação cruzada, armazenamento adequado e controle de temperatura.',
    instructor: 'Nutricionista Juliana Ramos • Especialista em Qualidade Alimentar',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop',
    progress: 40,
    duration: '45h',
    modulesCount: 2,
    materials: [
      { id: 'mat-ali-1', title: 'Manual de Boas Práticas e Higienização Alimentar', type: 'pdf', url: HEALTH_GUIDE_URL, isDownloaded: true }
    ],
    modules: [
      {
        title: 'Módulo 1: Segurança Alimentar e Legislação',
        lessons: [
          { id: 'ali-1', title: 'Controle de Microrganismos e Higiene Pessoal', duration: '24 min', completed: true, videoUrl: HEALTH_VIDEO_2 },
          { id: 'ali-2', title: 'Rotulagem, Validade e Armazenamento Seguro', duration: '28 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'empreendedorismo-gastronomia',
    title: 'Gestão e Empreendedorismo no Setor de Alimentos e Bebidas',
    category: Category.Alimentos,
    description: 'Planejamento de cardápios, precificação gastronômica, ficha técnica de preparo, canais de entrega (delivery) e atendimento ao cliente.',
    instructor: 'Chef André Fontana • Consultor de Restaurantes',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '50h',
    modulesCount: 3,
    modules: [
      {
        title: 'Módulo 1: Estruturação do Negócio Gastronômico',
        lessons: [
          { id: 'gas-1', title: 'Fichas Técnicas e Formação de Preço de Venda', duration: '25 min', completed: false, videoUrl: WOMEN_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 📝 11. PREPARATÓRIO ENEM ---
const ENEM_COURSES: Course[] = [
  {
    id: 'redacao-enem-nota-1000',
    title: 'Redação Nota 1000 & Estrutura Dissertativo-Argumentativa para o ENEM',
    category: Category.ENEM,
    description: 'Domínio das 5 competências avaliadas no ENEM, repertório sociocultural produtivo, conectivos coesivos e propostas de intervenção detalhadas.',
    instructor: 'Prof. Tiago Meira • Corretor Oficial e Mentor de Redação',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
    progress: 60,
    duration: '80h',
    modulesCount: 4,
    materials: [
      { id: 'mat-enem-1', title: 'Guia de Conectivos e Modelos de Redação Nota 1000', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: true }
    ],
    modules: [
      {
        title: 'Módulo 1: As 5 Competências do ENEM',
        lessons: [
          { id: 'red-1', title: 'Construção da Tese e Projeto de Texto', duration: '26 min', completed: true, videoUrl: STEM_VIDEO_1 },
          { id: 'red-2', title: 'Proposta de Intervenção com os 5 Elementos Obrigatórios', duration: '32 min', completed: true, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'matematica-ciencias-natureza-enem',
    title: 'Matemática e Ciências da Natureza para o ENEM',
    category: Category.ENEM,
    description: 'Resolução comentada de questões recorrentes: funções, geometria plana e espacial, estatística, cinemática, reações orgânicas e ecologia.',
    instructor: 'Prof. Vinicius Andrade • Professor de Exatas',
    thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '90h',
    modulesCount: 4,
    modules: [
      {
        title: 'Módulo 1: Matemática Básica e Estatística Recorrente',
        lessons: [
          { id: 'mat-enem-l1', title: 'Regra de Três, Porcentagem e Análise de Gráficos', duration: '29 min', completed: false, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 🎓 12. EJA (EDUCAÇÃO DE JOVENS E ADULTOS) ---
const EJA_COURSES: Course[] = [
  {
    id: 'letramento-digital-cidadania-eja',
    title: 'Alfabetização e Letramento Digital para Jovens e Adultos (EJA)',
    category: Category.EJA,
    description: 'Aprenda no seu ritmo: leitura e interpretação de textos do cotidiano, navegação segura na internet, envio de mensagens e uso de serviços públicos digitais.',
    instructor: 'Profa. Rosa Maria Silveira • Pedagoga Especialista em EJA',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    progress: 25,
    duration: '50h',
    modulesCount: 3,
    materials: [
      { id: 'mat-eja-1', title: 'Caderno de Atividades Práticas e Leitura do Cotidiano', type: 'pdf', url: RIGHTS_GUIDE_URL, isDownloaded: true }
    ],
    modules: [
      {
        title: 'Módulo 1: Comunicação e Uso do Smartphone no Dia a Dia',
        lessons: [
          { id: 'eja-1', title: 'Leitura de Mensagens, Formulários e Textos Cotidianos', duration: '20 min', completed: true, videoUrl: CIVIC_VIDEO_1 },
          { id: 'eja-2', title: 'Navegação na Internet e Segurança com Senhas', duration: '25 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'matematica-pratica-trabalho-eja',
    title: 'Cidadania, Matemática do Dia a Dia & Direitos Trabalhistas (EJA)',
    category: Category.EJA,
    description: 'Cálculo de orçamento doméstico, compras e troco, leitura de holerite, direitos fundamentais do trabalhador e cidadania ativa.',
    instructor: 'Prof. Antônio Carlos Pereira • Educador Popular',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '45h',
    modulesCount: 3,
    modules: [
      {
        title: 'Módulo 1: Matemática Prática nas Finanças Pessoais',
        lessons: [
          { id: 'eja-m1', title: 'Controle de Gastos e Economia Familiar', duration: '22 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  }
];

export const COURSES: Course[] = [
  ...EXCELLENTIA_COURSES,
  ...SANTE_COURSES,
  ...AUTONOMISATION_COURSES,
  ...DROITS_HUMAINS_COURSES,
  ...EDUCACAO_COURSES,
  ...TECNOLOGIA_COURSES,
  ...SUSTENTABILIDADE_COURSES,
  ...GESTAO_COURSES,
  ...IDIOMAS_COURSES,
  ...ALIMENTOS_COURSES,
  ...ENEM_COURSES,
  ...EJA_COURSES
];

export const STRATEGIC_AXES = [
  {
    id: Category.Excellentia,
    title: 'Programme EXCELLENTIA & STEM',
    shortDesc: 'Sciences, Technologies, Ingénierie et Mathématiques pour boursiers d\'excellence.',
    iconName: 'GraduationCap',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Bourses Nationales & Internationales'
  },
  {
    id: Category.Sante,
    title: 'Santé & Prévention',
    shortDesc: 'Lutte contre la drépanocytose, santé maternelle et néonatale, soins communautaires.',
    iconName: 'HeartPulse',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Sensibilisation & Dépistage Précoce'
  },
  {
    id: Category.Autonomisation,
    title: 'Autonomisation des Femmes & Entrepreneuriat',
    shortDesc: 'Gestion de micro-entreprises, éducation financière, leadership et inclusion économique.',
    iconName: 'Sparkles',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Indépendance Financière & Leadership'
  },
  {
    id: Category.DroitsHumains,
    title: 'Éducation Civique & Droits Humains',
    shortDesc: 'Droits des femmes, lutte contre les violences basées sur le genre (VBG) et citoyenneté.',
    iconName: 'Scale',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Justice Sociale & Protection Légale'
  },
  {
    id: Category.Educacao,
    title: 'Educação',
    shortDesc: 'Metodologias ativas, didática inovadora e práticas pedagógicas inclusivas.',
    iconName: 'BookOpen',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Formação Docente & Inovação'
  },
  {
    id: Category.Tecnologia,
    title: 'Tecnologia',
    shortDesc: 'Programação web, inteligência artificial, nuvem e engenharia de software.',
    iconName: 'Terminal',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Desenvolvimento & Dados'
  },
  {
    id: Category.Sustentabilidade,
    title: 'Sustentabilidade',
    shortDesc: 'ESG, energias renováveis, agroecologia e conservação ambiental.',
    iconName: 'Leaf',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Impacto Socioambiental'
  },
  {
    id: Category.Gestao,
    title: 'Gestão',
    shortDesc: 'Liderança ágil, finanças corporativas e planejamento estratégico.',
    iconName: 'Briefcase',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Gestão de Negócios'
  },
  {
    id: Category.Idiomas,
    title: 'Idiomas',
    shortDesc: 'Inglês corporativo e francês aplicado para intercâmbio e negócios.',
    iconName: 'Globe',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Comunicação Global'
  },
  {
    id: Category.Alimentos,
    title: 'Alimentos & Bebidas',
    shortDesc: 'Boas práticas de manipulação, vigilância sanitária e gastronomia.',
    iconName: 'Utensils',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Segurança Alimentar'
  },
  {
    id: Category.ENEM,
    title: 'Preparatório ENEM',
    shortDesc: 'Redação nota 1000, matemática, ciências e simulados completos.',
    iconName: 'Award',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Aprovação Universitária'
  },
  {
    id: Category.EJA,
    title: 'EJA',
    shortDesc: 'Educação de Jovens e Adultos com letramento digital e matemática cidadã.',
    iconName: 'Users',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Inclusão & Cidadania'
  }
];
