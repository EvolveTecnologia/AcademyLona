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

// --- 📚 5. ÉDUCATION & QUALIFICATION ---
const EDUCACAO_COURSES: Course[] = [
  {
    id: 'formation-continue-francais-maths',
    title: 'Formation Continue - Français Professionnel & Mathématiques Pratiques',
    category: Category.Educacao,
    description: 'Renforcement des compétences fondamentales : communication écrite et orale en contexte de travail, calculs commerciaux, pourcentages et raisonnement logique appliqué.',
    instructor: 'Prof. Jean-Marc Boucher • Académie Pédagogique',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    progress: 35,
    duration: '60h',
    modulesCount: 3,
    materials: [
      { id: 'mat-edu-1', title: 'Guide de Formation Continue : Français & Mathématiques Pratiques', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: true }
    ],
    quiz: [
      { id: 1, question: "Comment rédiger une note de service formelle et concise ?", options: ["En précisant directement l'objet, les faits clés et les actions attendues", "Sans mentionner de date ni d'émetteur", "Uniquement par un message oral informel", "En rédigeant un texte de dix pages sans paragraphe"], correctAnswer: 0 }
    ],
    modules: [
      {
        title: 'Module 1 : Maîtrise de la Communication Écrite en Entreprise',
        lessons: [
          { id: 'edu-1', title: 'Rédaction d\'E-mails Professionnels et Comptes-Rendus', duration: '25 min', completed: true, videoUrl: STEM_VIDEO_1 },
          { id: 'edu-2', title: 'Calculs Commerciaux et Pourcentages Appliqués', duration: '30 min', completed: false, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'mathematiques-appliquees-industrie',
    title: 'Mathématiques Appliquées à l\'Industrie et à la Logistique',
    category: Category.Educacao,
    description: 'Statistiques opérationnelles, calculs métriques, gestion des stocks, optimisation des flux industriels et résolutions graphiques.',
    instructor: 'Ing. Patrice Kalala • Consultant Industriel',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    progress: 20,
    duration: '50h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Calculs de Rendement et Flux Logistiques',
        lessons: [
          { id: 'mat-ind-1', title: 'Gestion Quantitative des Stocks et Délais de Réapprovisionnement', duration: '28 min', completed: true, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'communication-ethique-entreprise',
    title: 'Communication Professionnelle et Éthique en Entreprise',
    category: Category.Educacao,
    description: 'Déontologie, culture de service client, prise de parole en équipe, résolution des conflits interpersonnels et posture de travail exemplaire.',
    instructor: 'Dre Clémence Ntumba • Psychologue du Travail',
    thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
    progress: 10,
    duration: '45h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Déontologie et Climat d\'Équipe Positif',
        lessons: [
          { id: 'inc-1', title: 'Principes d\'Éthique et Prise de Parole Assertive', duration: '22 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'lecture-documents-techniques-normes',
    title: 'Lecture et Interprétation de Documents Techniques & Normes',
    category: Category.Educacao,
    description: 'Schémas techniques, notices de sécurité, manuels d\'utilisation d\'équipements et protocoles industriels standards.',
    instructor: 'Ing. Christian Mulamba • Expert Qualité & Process',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '40h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Compréhension des Schémas Techniques',
        lessons: [
          { id: 'doc-1', title: 'Symboles Standards et Plans de Montage', duration: '24 min', completed: false, videoUrl: STEM_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'redaction-strategique-argumentative',
    title: 'Maîtrise de la Rédaction Stratégique et Argumentative',
    category: Category.Educacao,
    description: 'Rapports d\'activité, correspondances officielles, notes de synthèse et argumentaires persuasifs pour décideurs.',
    instructor: 'Me Astrid Mwamba • Experte Rédactionnelle',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '45h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Argumentation d\'Impact et Synthèse',
        lessons: [
          { id: 'red-strat-1', title: 'Structure Logique d\'une Note de Synthèse', duration: '26 min', completed: false, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 💻 6. TECHNOLOGIE & INNOVATION DIGITALE ---
const TECNOLOGIA_COURSES: Course[] = [
  {
    id: 'informatique-professionnelle-cloud',
    title: 'Informatique Professionnelle & Outils Collaboratifs Cloud',
    category: Category.Tecnologia,
    description: 'Suite bureautique moderne, travail collaboratif en ligne, stockage cloud sécurisé, automatisation documentaire et productivité numérique.',
    instructor: 'David Mbayo • Spécialiste Cloud & Productivité',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    progress: 50,
    duration: '70h',
    modulesCount: 3,
    materials: [
      { id: 'mat-tec-1', title: 'Guide Pratique du Travail Collaboratif Cloud', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: true }
    ],
    quiz: [
      { id: 1, question: "Quel est le principe d'une sauvegarde cloud 3-2-1 ?", options: ["3 copies de vos données, sur 2 supports différents, dont 1 hors site", "Faire 3 copies sur une seule clé USB", "Sauvegarder une fois tous les 3 ans", "Supprimer les anciennes données chaque mois"], correctAnswer: 0 }
    ],
    modules: [
      {
        title: 'Module 1 : Outils Collaboratifs et Sécurité Quotidienne',
        lessons: [
          { id: 'tec-1', title: 'Gestion Sécurisée des Documents Cloud et Droits d\'Accès', duration: '28 min', completed: true, videoUrl: STEM_VIDEO_3 },
          { id: 'tec-2', title: 'Automatisation des Tâches Bureautiques Courantes', duration: '32 min', completed: true, videoUrl: STEM_VIDEO_3 }
        ]
      }
    ]
  },
  {
    id: 'industrie-40-iot',
    title: 'Industrie 4.0, Automatisation & Objets Connectés (IoT)',
    category: Category.Tecnologia,
    description: 'Capteurs intelligents, protocoles de communication industrielle, maintenance prédictive et intégration de l\'IoT en usine.',
    instructor: 'Ing. Marc Tshimanga • Spécialiste Automatismes',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    progress: 15,
    duration: '75h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Introduction aux Systèmes Connectés',
        lessons: [
          { id: 'iot-1', title: 'Réseaux de Capteurs Industriels et Passerelles IoT', duration: '30 min', completed: true, videoUrl: STEM_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'supervision-scada',
    title: 'Supervision Industrielle et Systèmes SCADA',
    category: Category.Tecnologia,
    description: 'Architecture SCADA, automates programmables (API), supervision en temps réel et contrôle des processus énergétiques et miniers.',
    instructor: 'Ing. Blaise Kibwe • Consultant Énergie & Mines',
    thumbnail: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '80h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Fondements des Réseaux SCADA',
        lessons: [
          { id: 'scada-1', title: 'Interfaces Homme-Machine (IHM) et Télégestion en RDC', duration: '35 min', completed: false, videoUrl: STEM_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'cybersecurite-protection-actifs',
    title: 'Cybersécurité & Protection des Actifs Numériques',
    category: Category.Tecnologia,
    description: 'Hygiène informatique, protection contre le phishing, sécurisation des terminaux mobiles, sauvegardes chiffrées et conformité RGPD/RDC.',
    instructor: 'Arlette Kabeya • Experte en Cybersécurité',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '65h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Hygiène et Résilience Numérique',
        lessons: [
          { id: 'cld-1', title: 'Authentification Forte, Gestion des Mots de Passe et Menaces Actuelles', duration: '27 min', completed: false, videoUrl: STEM_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'algorithmique-developpement-logiciel',
    title: 'Algorithmique & Initiation au Développement Logiciel',
    category: Category.Tecnologia,
    description: 'Logique de programmation moderne, structures conditionnelles, boucles, création d\'applications web interactives avec JavaScript et Python.',
    instructor: 'Lucas Ferreira & Yannick Tshilumba • Lead Développeurs',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
    progress: 25,
    duration: '85h',
    modulesCount: 4,
    modules: [
      {
        title: 'Module 1 : Pensée Algorithmique et Logique',
        lessons: [
          { id: 'ai-1', title: 'Variables, Structures de Données et Premiers Programmes', duration: '35 min', completed: true, videoUrl: STEM_VIDEO_3 }
        ]
      }
    ]
  }
];

// --- 🌿 7. ENVIRONNEMENT & DURABILITÉ ---
const SUSTENTABILIDADE_COURSES: Course[] = [
  {
    id: 'bassin-congo-vr-360',
    title: 'Le Bassin du Congo en Réalité Virtuelle 360°',
    category: Category.Sustentabilidade,
    description: 'Exploration immersive du deuxième poumon vert mondial : biodiversité, tourbières, cycle de l\'eau et enjeux de conservation communautaire.',
    instructor: 'Dr. Eric Kasongo • Écologue & Chercheur',
    thumbnail: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop',
    progress: 30,
    duration: '45h',
    modulesCount: 2,
    materials: [
      { id: 'mat-sus-1', title: 'Atlas Pédagogique du Bassin du Congo et des Tourbières', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: true }
    ],
    modules: [
      {
        title: 'Module 1 : Richesse Écologique et Climat Mondial',
        lessons: [
          { id: 'sus-1', title: 'Le Bassin du Congo : Réservoir de Carbone Planétaire', duration: '26 min', completed: true, videoUrl: STEM_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'gestion-environnementale-rse-industries',
    title: 'Gestion Environnementale et RSE Appliquée aux Industries',
    category: Category.Sustentabilidade,
    description: 'Études d\'impact environnemental, conformité réglementaire, plans de gestion sociale et responsabilité sociétale des entreprises en RDC.',
    instructor: 'Mariana Duarte • Experte ESG & Environnement',
    thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
    progress: 10,
    duration: '50h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Normes et Pratiques RSE',
        lessons: [
          { id: 'agr-1', title: 'Mise en Œuvre d\'un Plan de Gestion Sociale et Environnementale', duration: '28 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'dechets-industriels-economie-circulaire',
    title: 'Gestion des Déchets Industriels et Économie Circulaire',
    category: Category.Sustentabilidade,
    description: 'Tri sélectif, valorisation des matières recyclables, réduction de l\'empreinte carbone et modèles économiques circulaires durables.',
    instructor: 'Ing. François Bope • Consultant Économie Verte',
    thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '40h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Valorisation et Recyclage',
        lessons: [
          { id: 'dech-1', title: 'Filières de Recyclage et Débouchés Économiques Locaux', duration: '25 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'surveillance-eau-climat',
    title: 'Surveillance Communautaire de l\'Eau et du Climat',
    category: Category.Sustentabilidade,
    description: 'Qualité des eaux de surface, préservation des sources, adaptation aux variations climatiques et mobilisation citoyenne.',
    instructor: 'Thérèse Kanyeba • Hydrobiologiste',
    thumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '35h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Analyse et Protection de l\'Eau',
        lessons: [
          { id: 'eau-1', title: 'Indicateurs de Pureté de l\'Eau et Filtration Communautaire', duration: '22 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'normes-esg-afrique-centrale',
    title: 'Normes ESG et Investissement Responsable en Afrique Centrale',
    category: Category.Sustentabilidade,
    description: 'Critères environnementaux, sociaux et de gouvernance exigés par les bailleurs internationaux pour les projets d\'infrastructures.',
    instructor: 'Michel Ndongala • Analyste Finance Durable',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '45h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Cadres ESG Internationaux',
        lessons: [
          { id: 'esg-1', title: 'Reporting Extra-Financier et Conformité RDC', duration: '30 min', completed: false, videoUrl: WOMEN_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 📈 8. GESTION, MANAGEMENT & ENTREPRENEURIAT ---
const GESTAO_COURSES: Course[] = [
  {
    id: 'creation-entreprise-business-model',
    title: 'Création d\'Entreprise & Business Model Innovant',
    category: Category.Gestao,
    description: 'Du concept au lancement commercial : Business Model Canvas, étude de faisabilité, statuts juridiques OHADA et plan d\'exécution opérationnel.',
    instructor: 'Fabio Meireles • Mentor Entrepreneuriat & Investissement',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    progress: 45,
    duration: '65h',
    modulesCount: 3,
    materials: [
      { id: 'mat-ges-1', title: 'Canevas Business Model & Modèle d\'Affaires OHADA', type: 'pdf', url: WOMEN_GUIDE_URL, isDownloaded: true }
    ],
    modules: [
      {
        title: 'Module 1 : Structuration du Projet d\'Entreprise',
        lessons: [
          { id: 'ges-1', title: 'Conception de la Proposition de Valeur et Segments Clients', duration: '30 min', completed: true, videoUrl: WOMEN_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'gestion-financiere-tresorerie-pme',
    title: 'Gestion Financière et Trésorerie pour TPE & PME',
    category: Category.Gestao,
    description: 'Budget prévisionnel, maîtrise du besoin en fonds de roulement (BFR), tenue des livres de comptes et optimisation de trésorerie.',
    instructor: 'Patricia Santos • Directrice Financière & Consultante',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    progress: 10,
    duration: '55h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Rigueur Comptable et Gestion des Flux',
        lessons: [
          { id: 'fin-1', title: 'Contrôle des Coûts et Prévision de Trésorerie Quotidienne', duration: '32 min', completed: false, videoUrl: WOMEN_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'gouvernance-cooperatives-associations',
    title: 'Gouvernance des Coopératives et Associations Solidaires',
    category: Category.Gestao,
    description: 'Gestion démocratique, transparence comptable, fidélisation des membres et conduite de projets à impact communautaire fort.',
    instructor: 'Me Sylvain Lukusa • Juriste d\'Affaires OHADA',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '40h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Statuts et Rôles des Organes Dirigeants',
        lessons: [
          { id: 'coop-1', title: 'Assemblées Générales et Règles de Transparence Financière', duration: '28 min', completed: false, videoUrl: WOMEN_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'acces-marches-publics-grands-comptes',
    title: 'Accès aux Marchés Publics et Fourniture aux Grands Comptes',
    category: Category.Gestao,
    description: 'Réponse aux appels d\'offres, constitution du dossier technique et financier, conformité légale et négociation avec les donneurs d\'ordre.',
    instructor: 'Albertine Mbuyi • Consultante Achats Stratégiques',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '50h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Maîtrise des Appels d\'Offres',
        lessons: [
          { id: 'marche-1', title: 'Montage d\'une Offre Conforme et Compétitive', duration: '26 min', completed: false, videoUrl: WOMEN_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'marketing-digital-vente-sociale',
    title: 'Marketing Digital, Vente Sociale et Visibilité en Ligne',
    category: Category.Gestao,
    description: 'Stratégie de contenu sur les réseaux sociaux, prospection via messageries, campagnes publicitaires ciblées et fidélisation client.',
    instructor: 'Vanessa Luboya • Consultante Marketing Digital',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '45h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Prospection et Vente sur Canaux Mobiles',
        lessons: [
          { id: 'mkt-soc-1', title: 'Acquisition Client et Automatisation WhatsApp', duration: '25 min', completed: false, videoUrl: WOMEN_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 🌐 9. LANGUES & COMMUNICATION INTERNATIONALE ---
const IDIOMAS_COURSES: Course[] = [
  {
    id: 'anglais-professionnel-industrie-commerce',
    title: 'Anglais Professionnel pour l\'Industrie & le Commerce International',
    category: Category.Idiomas,
    description: 'Vocabulaire technique, correspondances commerciales, négociations contractuelles et présentations en anglais des affaires.',
    instructor: 'Sarah Jenkins • Formatrice Business English',
    thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop',
    progress: 25,
    duration: '75h',
    modulesCount: 4,
    modules: [
      {
        title: 'Module 1 : Communication Professionnelle en Anglais',
        lessons: [
          { id: 'ing-1', title: 'Conduite de Réunions et Échanges Commerciaux', duration: '25 min', completed: true, videoUrl: STEM_VIDEO_1 },
          { id: 'ing-2', title: 'Rédaction d\'E-mails et Négociation Commerciale', duration: '30 min', completed: false, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'anglais-accueil-services-protocole',
    title: 'Anglais pour l\'Accueil, les Services et le Protocole Commercial',
    category: Category.Idiomas,
    description: 'Accueil des délégations, hôtellerie, service client d\'excellence et fluidité conversationnelle au téléphone et en direct.',
    instructor: 'Brian O\'Connor • Consultant Hôtellerie & Accueil',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '50h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Vocabulaire de l\'Accueil et de l\'Écoute Client',
        lessons: [
          { id: 'acc-1', title: 'Salutations Professionnelles et Orientation des Visiteurs', duration: '22 min', completed: false, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'espagnol-affaires-relations-internationales',
    title: 'Espagnol des Affaires & Relations Internationales',
    category: Category.Idiomas,
    description: 'Bases solides et tournures professionnelles pour échanger avec les partenaires hispanophones d\'Amérique latine et d\'Espagne.',
    instructor: 'Elena Martinez • Professeure de Langues Appliquées',
    thumbnail: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '60h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Espagnol Pratique du Travail',
        lessons: [
          { id: 'esp-1', title: 'Formules de Politesse et Dialogues Commerciaux', duration: '26 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'culture-entreprise-leadership-diversifie',
    title: 'Culture d\'Entreprise, Inclusion et Leadership Diversifié',
    category: Category.Idiomas,
    description: 'Valorisation des talents, intelligence intergénérationnelle, intégration des personnes en situation de handicap et climat de travail positif.',
    instructor: 'Prof. Augustin Kalombo • Sociologue d\'Entreprise',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '40h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Cohésion et Valeurs Partagées',
        lessons: [
          { id: 'lead-div-1', title: 'Management Bienveillant et Égalité des Chances', duration: '24 min', completed: false, videoUrl: WOMEN_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'communication-interculturelle-diplomatie-afrique',
    title: 'Communication Interculturelle et Diplomatie d\'Affaires en Afrique',
    category: Category.Idiomas,
    description: 'Codes culturels, négociation dans l\'espace OHADA, partenariats régionaux et étiquette protocolaire panafricaine.',
    instructor: 'Ambassadeur Hon. Jean-Luc Masangu • Diplomate',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '45h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Protocoles Régionaux et Partenariats',
        lessons: [
          { id: 'diplo-1', title: 'Négociation Diplomatique et Respect des Cultures Régionales', duration: '28 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 🍽️ 10. AGROALIMENTAIRE & PRODUCTION LOCALE ---
const ALIMENTOS_COURSES: Course[] = [
  {
    id: 'normes-haccp-hygiene-alimentaire',
    title: 'Normes HACCP et Bonnes Pratiques d\'Hygiène Alimentaire',
    category: Category.Alimentos,
    description: 'Contrôle de la chaîne du froid, désinfection des surfaces de travail, prévention des toxi-infections et conformité sanitaire officielle.',
    instructor: 'Juliana Ramos • Inspectrice Sécurité Sanitaire',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop',
    progress: 40,
    duration: '45h',
    modulesCount: 2,
    materials: [
      { id: 'mat-ali-1', title: 'Manuel de Bonnes Pratiques et Hygiène HACCP', type: 'pdf', url: HEALTH_GUIDE_URL, isDownloaded: true }
    ],
    modules: [
      {
        title: 'Module 1 : Sécurité Sanitaire des Aliments',
        lessons: [
          { id: 'ali-1', title: 'Identification des Risques Biologiques et Chimiques', duration: '24 min', completed: true, videoUrl: HEALTH_VIDEO_2 },
          { id: 'ali-2', title: 'Étiquetage, Conservation et Chaîne du Froid', duration: '28 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'agroecologie-cultures-vivrieres-tropical',
    title: 'Agroécologie et Cultures Vivrières en Milieu Tropical',
    category: Category.Alimentos,
    description: 'Manioc, maïs, haricot, maraîchage bio : préparation des sols sans brûlis, compostage et rotation des cultures à fort rendement.',
    instructor: 'João Pedro Mendonça • Ingénieur Agronome',
    thumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '50h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Agronomie Durable et Semences Améliorées',
        lessons: [
          { id: 'agro-1', title: 'Compostage Organique et Gestion Hydrique', duration: '25 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'pisciculture-continentale-bassin',
    title: 'Pisciculture Continentale & Élevage en Bassin',
    category: Category.Alimentos,
    description: 'Élevage de tilapias et poissons-chats (clarias) : construction de bassins, alimentation locale, gestion de l\'eau et commercialisation rentable.',
    instructor: 'Ing. Jacques Mayamba • Spécialiste Aquaculture',
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '45h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Création et Gestion de Bassins Aquacoles',
        lessons: [
          { id: 'pisci-1', title: 'Reproduction, Nourriture et Qualité de l\'Eau', duration: '27 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'transformation-locale-manioc-mais-fruits',
    title: 'Transformation Locale : Valorisation du Manioc, Maïs et Fruits',
    category: Category.Alimentos,
    description: 'Farines panifiables, confitures artisanales, séchage solaire et emballage hygiénique pour prolonger la conservation et décupler la valeur ajoutée.',
    instructor: 'Chef André Fontana • Technologue Agroalimentaire',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '50h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Transformation et Conservation sans Gaspillage',
        lessons: [
          { id: 'trans-1', title: 'Techniques de Séchage et Ensachage Hermétique', duration: '25 min', completed: false, videoUrl: WOMEN_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'nutrition-familiale-securite-alimentaire',
    title: 'Nutrition Familiale & Sécurité Alimentaire Communautaire',
    category: Category.Alimentos,
    description: 'Équilibre des repas, lutte contre la malnutrition infantile, valorisation des produits locaux riches en fer et micronutriments.',
    instructor: 'Dr. Patient Banza • Médecin Nutritionniste',
    thumbnail: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '35h',
    modulesCount: 2,
    modules: [
      {
        title: 'Module 1 : Alimentation Équilibrée avec Produits du Marché',
        lessons: [
          { id: 'nutri-1', title: 'Besoins Nutritionnels de l\'Enfant et de la Mère', duration: '22 min', completed: false, videoUrl: HEALTH_VIDEO_2 }
        ]
      }
    ]
  }
];

// --- 📝 11. PRÉPARATION AUX EXAMENS D'ÉTAT (EXETAT) ---
const ENEM_COURSES: Course[] = [
  {
    id: 'prepa-exetat-sciences-maths',
    title: 'Préparation Complète aux Examens d\'État (EXETAT) - Sciences & Maths',
    category: Category.ENEM,
    description: 'Résolution commentée des items des sessions précédentes : analyse mathématique, physique, chimie organique et biologie cellulaire.',
    instructor: 'Prof. Dieudonné Mwamba • Enseignant Émérite EXETAT',
    thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop',
    progress: 60,
    duration: '80h',
    modulesCount: 4,
    materials: [
      { id: 'mat-exetat-1', title: 'Recueil des Épreuves et Solutions Officielles EXETAT', type: 'pdf', url: EXCELLENTIA_GUIDE_URL, isDownloaded: true }
    ],
    modules: [
      {
        title: 'Module 1 : Mathématiques et Physique aux Examens d\'État',
        lessons: [
          { id: 'exetat-1', title: 'Résolution Stratégique des QCM et Calcul Rapide', duration: '28 min', completed: true, videoUrl: STEM_VIDEO_1 },
          { id: 'exetat-2', title: 'Points Clés de Physique et Électricité', duration: '32 min', completed: true, videoUrl: STEM_VIDEO_2 }
        ]
      }
    ]
  },
  {
    id: 'dissertation-francais-culture-generale',
    title: 'Méthodologie de Réussite aux Épreuves de Français et Culture Générale',
    category: Category.ENEM,
    description: 'Structure de la dissertation littéraire et philosophique, règles grammaticales strictes, rédaction d\'une argumentation percutante et gestion du temps d\'examen.',
    instructor: 'Prof. Tiago Meira • Spécialiste des Épreuves Écrites',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
    progress: 15,
    duration: '70h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Plan de Dissertation et Argumentation',
        lessons: [
          { id: 'diss-1', title: 'Introduction, Problématique et Conclusion Réussies', duration: '25 min', completed: false, videoUrl: STEM_VIDEO_1 }
        ]
      }
    ]
  }
];

// --- 🎓 12. ÉDUCATION DES ADULTES ---
const EJA_COURSES: Course[] = [
  {
    id: 'alphabetisation-fonctionnelle-calcul',
    title: 'Alphabétisation Fonctionnelle & Calcul Pratique pour Adultes',
    category: Category.EJA,
    description: 'Apprentissage personnalisé et bienveillant : lecture des documents du quotidien, calcul des transactions, signatures et formulaires administratifs.',
    instructor: 'Profa. Rosa Maria Silveira • Pédagogue d\'Adultes',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    progress: 25,
    duration: '50h',
    modulesCount: 3,
    materials: [
      { id: 'mat-eja-1', title: 'Cahier Pratique d\'Alphabétisation et Calcul Quotidien', type: 'pdf', url: RIGHTS_GUIDE_URL, isDownloaded: true }
    ],
    modules: [
      {
        title: 'Module 1 : Communication et Calcul dans la Vie Quotidienne',
        lessons: [
          { id: 'eja-1', title: 'Lecture de Documents, Reçus et Formulaires Courants', duration: '20 min', completed: true, videoUrl: CIVIC_VIDEO_1 },
          { id: 'eja-2', title: 'Gestion Pratique des Sommes et Paiements Mobiles', duration: '25 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
        ]
      }
    ]
  },
  {
    id: 'insertion-professionnelle-metiers-techniques',
    title: 'Insertion Professionnelle et Métiers Techniques Urbains',
    category: Category.EJA,
    description: 'Bases en électricité domestique, plomberie sanitaire, maintenance mécanique de base et techniques de recherche d\'emploi et devis.',
    instructor: 'Prof. Antônio Carlos Pereira • Éducateur Technique',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    progress: 0,
    duration: '45h',
    modulesCount: 3,
    modules: [
      {
        title: 'Module 1 : Notions Clés des Métiers Techniques de Proximité',
        lessons: [
          { id: 'eja-m1', title: 'Sécurité au Travail et Outils Standards du Bâtiment', duration: '22 min', completed: false, videoUrl: CIVIC_VIDEO_1 }
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
    title: 'Éducation & Qualification',
    shortDesc: 'Compétences fondamentales, formation continue, mathématiques appliquées et pédagogie professionnelle.',
    iconName: 'BookOpen',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Formation Continue & Qualification'
  },
  {
    id: Category.Tecnologia,
    title: 'Technologie & Innovation',
    shortDesc: 'Informatique professionnelle, Cloud, Industrie 4.0, IoT, SCADA et cybersécurité opérationnelle.',
    iconName: 'Terminal',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Transformation Numérique & Industrie 4.0'
  },
  {
    id: Category.Sustentabilidade,
    title: 'Environnement & Durabilité',
    shortDesc: 'Préservation du Bassin du Congo, RSE, économie circulaire, gestion des déchets et normes ESG.',
    iconName: 'Leaf',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Impact Écologique & Bassin du Congo'
  },
  {
    id: Category.Gestao,
    title: 'Gestion & Entrepreneuriat',
    shortDesc: 'Création d\'entreprise, gestion financière, coopératives, marchés publics et marketing digital.',
    iconName: 'Briefcase',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Leadership & Gestion d\'Entreprise'
  },
  {
    id: Category.Idiomas,
    title: 'Langues & Communication',
    shortDesc: 'Anglais professionnel et commercial, espagnol des affaires, accueil et diplomatie.',
    iconName: 'Globe',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Communication Internationale'
  },
  {
    id: Category.Alimentos,
    title: 'Agroalimentaire & Production Locale',
    shortDesc: 'Normes HACCP, agroécologie, pisciculture en bassin, transformation locale et nutrition.',
    iconName: 'Utensils',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Sécurité Alimentaire & Souveraineté'
  },
  {
    id: Category.ENEM,
    title: 'Préparation Examens d\'État (EXETAT)',
    shortDesc: 'Sciences, mathématiques, méthodologie de dissertation, culture générale et annales commentées.',
    iconName: 'Award',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Excellence Académique & Diplôme d\'État'
  },
  {
    id: Category.EJA,
    title: 'Éducation des Adultes',
    shortDesc: 'Alphabétisation fonctionnelle, calcul pratique, insertion professionnelle et métiers techniques.',
    iconName: 'Users',
    color: '#183D73',
    accentColor: '#E8B84B',
    stats: 'Inclusion Sociale & Compétences Pratiques'
  }
];
