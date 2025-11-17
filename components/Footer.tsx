
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Insights IA', path: '/ai-recommendations' },
        { name: 'Marketplace', path: '/marketplace' },
        { name: 'Fórum', path: '/forum' },
    ];

    const socialLinks = [
        // Placeholder social links (update hrefs to real pages)
        { name: 'Facebook', href: '#', title: 'Facebook' },
        { name: 'X', href: '#', title: 'X (Twitter)' },
        { name: 'LinkedIn', href: '#', title: 'LinkedIn' },
    ];

    return (
        <footer className="bg-slate-800 text-slate-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                       <Link to="/" className="inline-block">
                          <Logo />
                       </Link>
                       <p className="mt-4 text-sm text-slate-400">Transformando carreiras através do conhecimento contínuo.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Navegação</h3>
                        <ul className="mt-4 space-y-2">
                            {links.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-primary-light transition-colors duration-200">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Legal</h3>
                        <ul className="mt-4 space-y-2">
                           <li><a href="#" className="hover:text-primary-light transition-colors duration-200">Termos de Serviço</a></li>
                           <li><a href="#" className="hover:text-primary-light transition-colors duration-200">Política de Privacidade</a></li>
                        </ul>
                    </div>
                    <div>
                         <h3 className="text-lg font-semibold text-white">Conecte-se</h3>
                         <div className="flex mt-4 space-x-4">
                             <a href={socialLinks[0].href} title={socialLinks[0].title} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                                 {/* Facebook SVG */}
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                     <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3v7.03C18.34 21.19 22 17.06 22 12.07z" />
                                 </svg>
                             </a>

                             <a href={socialLinks[1].href} title={socialLinks[1].title} target="_blank" rel="noopener noreferrer" aria-label="X" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                                 {/* X (Twitter) SVG - simple X mark */}
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                     <path d="M20.12 7.53c.01.18.01.36.01.54 0 5.52-4.2 11.89-11.89 11.89-2.36 0-4.55-.69-6.4-1.88.33.04.66.06.99.06 1.95 0 3.75-.66 5.17-1.78-1.82-.04-3.36-1.23-3.89-2.88.25.05.5.08.76.08.37 0 .74-.05 1.09-.15-1.9-.38-3.33-2.06-3.33-4.07v-.05c.56.31 1.2.5 1.88.52-1.12-.75-1.86-2.03-1.86-3.48 0-.77.21-1.5.58-2.13 2.06 2.53 5.13 4.19 8.59 4.36-.07-.3-.11-.61-.11-.93 0-2.24 1.81-4.05 4.05-4.05 1.16 0 2.21.49 2.95 1.28.92-.18 1.78-.52 2.55-.99-.3.94-.94 1.73-1.78 2.22.82-.1 1.6-.32 2.33-.65-.54.81-1.22 1.52-2.01 2.09z" />
                                 </svg>
                             </a>

                             <a href={socialLinks[2].href} title={socialLinks[2].title} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                                 {/* LinkedIn SVG */}
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                     <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.98h4.5V24h-4.5V8.98zM8.98 8.98h4.32v2.06h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.99 5.38 6.88V24h-4.5v-7.12c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4.5V8.98z" />
                                 </svg>
                             </a>
                         </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} (re)Qualifica+. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
