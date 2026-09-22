import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Phone, AlertCircle, Sparkles, Home } from 'lucide-react';
import { Logo } from '../components/Logo';

interface AuthScreenProps {
  onLogin: () => void;
  onBack?: () => void;
}

type AuthMode = 'login' | 'register' | 'forgot' | 'terms' | 'privacy';

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin, onBack }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Login State
  const [loginEmail, setLoginEmail] = useState('apprenant@academylona.cd');
  const [loginPassword, setLoginPassword] = useState('@123456@');
  const [loginError, setLoginError] = useState('');

  // Register State
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    idNumber: '',
    password: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Register Logic
    if (mode === 'register') {
      if (!termsAccepted) return;
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onLogin();
      }, 1000);
      return;
    }

    // Login Logic
    if (mode === 'login') {
      if (
        (loginEmail === 'apprenant@academylona.cd' && loginPassword === '@123456@') ||
        (loginEmail === 'boursier.excellentia@fondationlona.org' && loginPassword === '@123456@') ||
        (loginEmail.includes('@') && loginPassword.length >= 6)
      ) {
        setLoginError('');
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          onLogin();
        }, 900);
      } else {
        setLoginError('Adresse email ou mot de passe incorrect (utilisez les identifiants de démonstration ci-dessous).');
        setIsLoading(false);
      }
    }
  };

  const fillDemoCredentials = () => {
    setLoginEmail('apprenant@academylona.cd');
    setLoginPassword('@123456@');
    setLoginError('');
  };

  const renderLogin = () => (
    <div className="w-full space-y-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-1">
        <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none">
          Espace Apprenant
        </h1>
        <p className="text-[11px] text-[#E8B84B] font-semibold">Portail officiel Fondation Lona</p>
      </div>

      {loginError && (
        <div className="bg-red-500/15 border border-red-500/30 rounded-xl p-3 flex items-center gap-2 animate-in fade-in">
          <AlertCircle size={16} className="text-red-400 shrink-0" />
          <p className="text-[11px] font-semibold text-red-300">{loginError}</p>
        </div>
      )}

      {/* Demo Credentials Helper Pill */}
      <button 
        type="button"
        onClick={fillDemoCredentials}
        className="w-full py-2 px-3 bg-[#183D73]/60 hover:bg-[#183D73] border border-[#E8B84B]/40 rounded-xl flex items-center justify-between text-left text-[11px] text-[#E8B84B] transition-colors cursor-pointer"
      >
        <span className="flex items-center gap-1.5 font-bold">
          <Sparkles size={13} className="text-[#E8B84B]" />
          Accès Démo Élève / Boursier
        </span>
        <span className="text-gray-300 font-mono text-[10px]">apprenant@academylona.cd</span>
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Email académique ou personnel</label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3.5 text-gray-400" size={16} />
            <input 
              type="email" 
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="votre.nom@fondationlona.org"
              className="w-full bg-[#0B1526] border border-white/15 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B84B]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Mot de passe</label>
            <button 
              type="button"
              onClick={() => setMode('forgot')}
              className="text-[10px] text-[#E8B84B] hover:underline"
            >
              Mot de passe oublié ?
            </button>
          </div>
          <div className="relative flex items-center">
            <Lock className="absolute left-3.5 text-gray-400" size={16} />
            <input 
              type={showPassword ? 'text' : 'password'} 
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#0B1526] border border-white/15 rounded-xl py-3 pl-10 pr-10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B84B]"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#E8B84B] to-[#D4A338] hover:from-[#FCE082] hover:to-[#E8B84B] text-[#0F172A] font-black py-3.5 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg shadow-[#E8B84B]/20 hover:scale-[1.02] active:scale-98 cursor-pointer flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-[#0F172A]/30 border-t-[#0F172A] rounded-full animate-spin mx-auto" />
          ) : (
            'Se connecter au portail'
          )}
        </button>
      </form>

      <div className="text-center pt-2">
        <p className="text-[11px] text-gray-400">
          Nouvel apprenant ?{' '}
          <button 
            type="button" 
            onClick={() => setMode('register')}
            className="text-[#E8B84B] font-bold hover:underline"
          >
            Créer un compte
          </button>
        </p>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className="w-full space-y-4 animate-in slide-in-from-right-4 duration-500">
      <div className="text-center space-y-1">
        <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none">Inscription Apprenant</h1>
        <p className="text-[11px] text-[#E8B84B]">Rejoignez la communauté Academy Lona</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Nom complet</label>
          <div className="relative flex items-center">
            <User className="absolute left-3.5 text-gray-400" size={16} />
            <input 
              type="text" 
              required
              value={registerData.name}
              onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              placeholder="Ex : Marie Kabedi"
              className="w-full bg-[#0B1526] border border-white/15 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B84B]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Email académique ou personnel</label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3.5 text-gray-400" size={16} />
            <input 
              type="email" 
              required
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              placeholder="nom@domaine.cd"
              className="w-full bg-[#0B1526] border border-white/15 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B84B]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Téléphone / WhatsApp RDC</label>
          <div className="relative flex items-center">
            <Phone className="absolute left-3.5 text-gray-400" size={16} />
            <input 
              type="tel" 
              required
              value={registerData.phone}
              onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
              placeholder="+243 81 000 0000"
              className="w-full bg-[#0B1526] border border-white/15 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B84B]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Mot de passe</label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3.5 text-gray-400" size={16} />
            <input 
              type={showPassword ? 'text' : 'password'} 
              required
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              placeholder="••••••••"
              className="w-full bg-[#0B1526] border border-white/15 rounded-xl py-2.5 pl-10 pr-10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B84B]"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="flex items-start gap-2 pt-2">
          <input 
            type="checkbox"
            id="termsCheck"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mt-1 accent-[#E8B84B]"
          />
          <label htmlFor="termsCheck" className="text-[10px] text-gray-300 leading-tight">
            J'accepte les{' '}
            <button type="button" onClick={() => setMode('terms')} className="text-[#E8B84B] underline">
              Conditions d'utilisation
            </button>{' '}
            et la{' '}
            <button type="button" onClick={() => setMode('privacy')} className="text-[#E8B84B] underline">
              Politique de confidentialité
            </button>
            {' '}de la Fondation Lona.
          </label>
        </div>

        <button 
          type="submit" 
          disabled={isLoading || !termsAccepted}
          className="w-full bg-[#183D73] hover:bg-[#245398] disabled:opacity-50 text-white font-bold py-3 rounded-xl uppercase tracking-widest text-xs transition-all border border-[#E8B84B]/40 shadow-md cursor-pointer mt-2"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
          ) : (
            'Finaliser l\'inscription'
          )}
        </button>
      </form>

      <div className="text-center pt-2">
        <p className="text-[11px] text-gray-400">
          Vous avez déjà un compte ?{' '}
          <button 
            type="button" 
            onClick={() => setMode('login')}
            className="text-[#E8B84B] font-bold hover:underline"
          >
            Se connecter
          </button>
        </p>
      </div>
    </div>
  );

  const renderForgot = () => (
    <div className="w-full space-y-4 animate-in slide-in-from-right-4 duration-500">
      <div className="text-center space-y-1">
        <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none">Réinitialisation</h1>
        <p className="text-[11px] text-gray-300">Recevez un lien de réinitialisation sécurisé</p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setMode('login'); }} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Votre email</label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3.5 text-gray-400" size={16} />
            <input 
              type="email" 
              required
              placeholder="nom@domaine.cd"
              className="w-full bg-[#0B1526] border border-white/15 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B84B]"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-[#E8B84B] to-[#D4A338] text-[#0F172A] font-black py-3.5 rounded-xl uppercase tracking-widest text-xs transition-all shadow-md cursor-pointer hover:scale-105"
        >
          Envoyer le lien
        </button>
      </form>

      <div className="text-center pt-2">
        <button 
          type="button" 
          onClick={() => setMode('login')}
          className="text-[11px] text-gray-300 hover:text-white"
        >
          ← Retour à la connexion
        </button>
      </div>
    </div>
  );

  const renderTerms = () => (
    <div className="h-full flex flex-col justify-between text-xs space-y-4 text-gray-300">
      <h2 className="text-base font-bold text-white uppercase border-b border-white/10 pb-2">
        Conditions Générales d'Utilisation
      </h2>
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 text-justify">
        <p>L'utilisation de la plateforme Academy Lona par la Fondation Lona implique l'adhésion pleine et entière aux présentes conditions régies par les lois de la République Démocratique du Congo.</p>
        <p>Les accès et certificats sont strictement personnels et nominatifs. Les contenus pédagogiques et vidéo sont protégés par le droit d'auteur au bénéfice de la Fondation Lona.</p>
      </div>
      <button 
        type="button" 
        onClick={() => setMode('register')} 
        className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl cursor-pointer"
      >
        Fermer et retourner
      </button>
    </div>
  );

  const renderPrivacy = () => (
    <div className="h-full flex flex-col justify-between text-xs space-y-4 text-gray-300">
      <h2 className="text-base font-bold text-white uppercase border-b border-white/10 pb-2">
        Politique de Confidentialité
      </h2>
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 text-justify">
        <p>La Fondation Lona veille à la protection stricte des données personnelles des apprenants, enseignants et partenaires en conformité avec les réglementations en RDC.</p>
        <p>Vos données sont exclusivement utilisées pour la délivrance des certificats, l'adaptation pédagogique de votre parcours et les communications académiques.</p>
      </div>
      <button 
        type="button" 
        onClick={() => setMode('register')} 
        className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl cursor-pointer"
      >
        Fermer et retourner
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,61,115,0.4)_0%,transparent_70%)] pointer-events-none" />

      {/* Button to Back to Home (Landing Page) */}
      {onBack && (
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
        >
          <Home size={14} /> Accueil
        </button>
      )}

      {/* Main Container */}
      <div className="w-full max-w-[390px] space-y-6 relative z-10 flex flex-col items-center px-4">
        {mode !== 'terms' && mode !== 'privacy' && (
          <div className="flex justify-center mb-1 animate-in fade-in duration-300">
            <Logo inverted={true} className="h-14 w-auto" />
          </div>
        )}

        {/* Card */}
        <div className={`w-full bg-[#102B52]/90 backdrop-blur-xl border border-[#E8B84B]/30 p-6 rounded-3xl shadow-2xl transition-all duration-500 ${mode === 'terms' || mode === 'privacy' ? 'h-[60vh]' : ''}`}>
          {mode === 'login' && renderLogin()}
          {mode === 'register' && renderRegister()}
          {mode === 'forgot' && renderForgot()}
          {mode === 'terms' && renderTerms()}
          {mode === 'privacy' && renderPrivacy()}
        </div>

        {mode !== 'terms' && mode !== 'privacy' && (
          <div className="text-center pt-1">
            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
              Fondation Lona • RDC
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
