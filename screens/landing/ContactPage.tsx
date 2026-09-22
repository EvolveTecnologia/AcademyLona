import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Send, CheckCircle, Loader2, Building, ExternalLink, Bot, Check } from 'lucide-react';
import LandingFooter from '../../components/LandingFooter';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface PageProps {
  onBack: () => void;
  onViewChange: (v: LandingView) => void;
}

type Step = 'name' | 'email' | 'phone' | 'company' | 'interest' | 'message' | 'summary';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  type?: 'text' | 'options' | 'action';
  options?: string[];
}

const ContactPage: React.FC<PageProps> = ({ onBack, onViewChange }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis l\'assistant virtuel d\'Academy Lona (Fondation Lona). Comment puis-je vous orienter ? Pour commencer, quel est votre nom complet ?',
      sender: 'bot',
      type: 'text'
    }
  ]);
  const [currentStep, setCurrentStep] = useState<Step>('name');
  const [userInput, setUserInput] = useState('');
  const [collectedData, setCollectedData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!userInput.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: userInput,
      sender: 'user',
      type: 'text'
    };

    setMessages(prev => [...prev, userMsg]);
    processStep(userInput);
    setUserInput('');
  };

  const processStep = (input: string) => {
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: Message;
      let nextStep = currentStep;
      const newData = { ...collectedData };

      switch (currentStep) {
        case 'name':
          newData.name = input;
          setCollectedData(newData);
          nextStep = 'email';
          botResponse = {
            id: Date.now().toString(),
            text: `Ravi de faire votre connaissance, ${input}. À quelle adresse email pouvons-nous vous répondre ?`,
            sender: 'bot',
            type: 'text'
          };
          break;
        case 'email':
          newData.email = input;
          setCollectedData(newData);
          nextStep = 'phone';
          botResponse = {
            id: Date.now().toString(),
            text: 'Parfait ! Quel est votre numéro de téléphone ou WhatsApp de contact (idéalement en RDC ou à l\'international) ?',
            sender: 'bot',
            type: 'text'
          };
          break;
        case 'phone':
          newData.phone = input;
          setCollectedData(newData);
          nextStep = 'company';
          botResponse = {
            id: Date.now().toString(),
            text: 'Quelle est votre institution, établissement scolaire, entreprise ou ONG ?',
            sender: 'bot',
            type: 'text'
          };
          break;
        case 'company':
          newData.company = input;
          setCollectedData(newData);
          nextStep = 'interest';
          botResponse = {
            id: Date.now().toString(),
            text: 'Quel est votre principal domaine d\'intérêt avec la Fondation Lona et Academy Lona ?',
            sender: 'bot',
            type: 'options',
            options: [
              'Programme EXCELLENTIA & Bourses STEM',
              'Santé, Dépistage Drépanocytose & Maternité',
              'Autonomisation Féminine & Micro-projets',
              'Éducation Civique & Lutte contre les VBG',
              'Partenariat Institutionnel / Mécénat',
              'Autre Demande'
            ]
          };
          break;
        case 'message':
          newData.message = input;
          setCollectedData(newData);
          nextStep = 'summary';
          botResponse = {
            id: Date.now().toString(),
            text: `Merci infiniment, ${newData.name} ! Votre requête a bien été transmise aux équipes de la Fondation Lona. Nous vous contacterons très rapidement sur ${newData.email}.`,
            sender: 'bot',
            type: 'text'
          };
          break;
        default:
          botResponse = {
            id: Date.now().toString(),
            text: 'Merci pour votre message !',
            sender: 'bot'
          };
      }

      setMessages(prev => [...prev, botResponse]);
      setCurrentStep(nextStep);
      setIsTyping(false);
    }, 700);
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const confirmInterests = () => {
    const selectedText = selectedInterests.join(', ');
    const userMsg: Message = {
      id: Date.now().toString(),
      text: selectedText,
      sender: 'user',
      type: 'text'
    };

    setMessages(prev => [...prev, userMsg]);
    setCollectedData({ ...collectedData, interest: selectedText });
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now().toString(),
        text: 'Très bien noté ! Précisez brièvement votre projet ou votre question pour notre secrétariat général.',
        sender: 'bot',
        type: 'text'
      };
      setMessages(prev => [...prev, botResponse]);
      setCurrentStep('message');
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans animate-in slide-in-from-right duration-500">
      {/* Header */}
      <div className="sticky top-0 left-0 right-0 z-50 p-4 md:p-6 flex items-center justify-between bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 px-4 py-2 bg-[#183D73]/10 hover:bg-[#183D73]/20 rounded-full text-[#183D73] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Retour</span>
        </button>
        <span className="text-xs font-black text-[#183D73] uppercase tracking-widest">
          Fondation Lona • RDC
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Institutional Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#183D73]/10 rounded-full text-[#183D73] text-xs font-black uppercase tracking-widest mb-4">
                <Building size={14} />
                <span>Secrétariat Général</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
                Prendre Contact avec la <span className="text-[#183D73]">Fondation Lona</span>
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les équipes de la Fondation Lona et d'Academy Lona sont à votre écoute pour tout renseignement académique, demande de partenariat ou soutien aux programmes.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#183D73] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#183D73]/10 text-[#183D73] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Siège Officiel</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Boulevard du 30 Juin, Commune de la Gombe<br />
                    Kinshasa, République Démocratique du Congo
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#E8B84B] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E8B84B]/20 text-[#183D73] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Ligne Téléphonique & WhatsApp</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    +243 81 000 0000 • +243 99 000 0000
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#183D73] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#183D73]/10 text-[#183D73] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Email Institutionnel</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    contact@fondationlona.org<br />
                    academylona@fondationlona.org
                  </p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-700">Boulevard du 30 Juin • Kinshasa</span>
                <a 
                  href="https://maps.google.com/?q=Boulevard+du+30+Juin+Kinshasa" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-[#183D73] font-bold flex items-center gap-1 hover:underline"
                >
                  Ouvrir <ExternalLink size={12} />
                </a>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.502947113117!2d15.293424755419922!3d-4.305141699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33f48866509f%3A0x6a0c0ad78ec688fa!2sBoulevard%20du%2030%20Juin%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1700000000000!5m2!1sfr!2scd" 
                className="w-full h-48 border-0" 
                allowFullScreen={false} 
                loading="lazy" 
                title="Carte Siège Fondation Lona Kinshasa"
              />
            </div>
          </div>

          {/* Right Column: Interactive Chat Assistant */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 shadow-md flex flex-col h-[640px] overflow-hidden">
            {/* Chat Header */}
            <div className="p-5 bg-gradient-to-r from-[#183D73] to-[#102B52] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8B84B] flex items-center justify-center text-[#0F172A] shadow-inner font-bold">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Assistant Virtuel Academy Lona</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-[#E8B84B] animate-pulse" />
                    <span>Fondation Lona • Kinshasa</span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full text-[#E8B84B]">
                Orientation 24/7
              </span>
            </div>

            {/* Chat Body */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                    m.sender === 'user' 
                      ? 'bg-[#183D73] text-white rounded-br-none shadow-sm' 
                      : 'bg-white text-[#0F172A] rounded-bl-none border border-gray-200 shadow-sm'
                  }`}>
                    <p>{m.text}</p>
                    
                    {/* Render Multi-options */}
                    {m.type === 'options' && m.options && currentStep === 'interest' && (
                      <div className="mt-4 space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {m.options.map((opt, i) => {
                            const isSelected = selectedInterests.includes(opt);
                            return (
                              <button
                                key={i}
                                type="button"
                                onClick={() => toggleInterest(opt)}
                                className={`text-left p-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between cursor-pointer ${
                                  isSelected 
                                    ? 'bg-[#183D73] text-white border-[#183D73]' 
                                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-[#183D73]'
                                }`}
                              >
                                <span>{opt}</span>
                                {isSelected && <Check size={14} className="text-[#E8B84B]" />}
                              </button>
                            );
                          })}
                        </div>
                        <button
                          type="button"
                          onClick={confirmInterests}
                          disabled={selectedInterests.length === 0}
                          className={`w-full mt-3 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0F172A] transition-all cursor-pointer ${
                            selectedInterests.length > 0
                              ? 'bg-gradient-to-r from-[#E8B84B] to-[#D4A338] shadow-md hover:scale-[1.01]'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          Confirmer la sélection ({selectedInterests.length})
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-gray-400 italic">
                  <Loader2 size={14} className="animate-spin text-[#183D73]" />
                  <span>Academy Lona prépare sa réponse...</span>
                </div>
              )}
            </div>

            {/* Chat Footer Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 flex gap-3">
              <input 
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={currentStep === 'summary' ? 'Message envoyé ! Nous vous répondrons bientôt.' : 'Écrivez votre réponse ici...'}
                disabled={currentStep === 'summary' || currentStep === 'interest'}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#183D73] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!userInput.trim() || currentStep === 'summary' || currentStep === 'interest'}
                className="bg-[#183D73] hover:bg-[#245398] disabled:opacity-50 text-white font-bold px-5 py-3 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>

      <LandingFooter onViewChange={onViewChange} />
    </div>
  );
};

export default ContactPage;
