
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserRoleContext } from '../UserRoleContext';
import { UserRole } from '../types';
import Logo from './Logo';

const Header: React.FC = () => {
    const { userRole, setUserRole } = useContext(UserRoleContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const handleLogin = (role: UserRole) => {
        setUserRole(role);
        setIsProfileMenuOpen(false);
        if (role === 'student') navigate('/student');
        if (role === 'creator') navigate('/creator');
        if (role === 'recruiter') navigate('/recruiter');
    };

    const handleLogout = () => {
        setUserRole(null);
        setIsProfileMenuOpen(false);
        navigate('/');
    };

    const navLinks = [
        { path: '/ai-recommendations', label: 'Insights IA' },
        { path: '/marketplace', label: 'Marketplace' },
        { path: '/forum', label: 'Fórum' },
    ];
    
    let dashboardPath = '/';
    if (userRole === 'student') dashboardPath = '/student';
    if (userRole === 'creator') dashboardPath = '/creator';
    if (userRole === 'recruiter') dashboardPath = '/recruiter';


    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <NavLink to="/">
                            <Logo />
                        </NavLink>
                    </div>
                    <nav className="hidden md:flex md:space-x-8 items-center">
                        {userRole && <NavLink to={dashboardPath} className={({ isActive }) => `text-gray-600 hover:text-primary transition-colors duration-200 font-medium ${isActive ? 'text-primary' : ''}`}>Meu Painel</NavLink>}
                        {navLinks.map(link => (
                             <NavLink key={link.path} to={link.path} className={({ isActive }) => `text-gray-600 hover:text-primary transition-colors duration-200 font-medium ${isActive ? 'text-primary' : ''}`}>{link.label}</NavLink>
                        ))}
                         {/* Links para avaliação */}
                        <div className="border-l border-gray-300 h-6 mx-2"></div>
                        <button onClick={() => handleLogin('student')} className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 font-medium">Área do Aluno</button>
                        <button onClick={() => handleLogin('creator')} className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 font-medium">Área do Criador</button>
                        <button onClick={() => handleLogin('recruiter')} className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 font-medium">Área do Recrutador</button>
                    </nav>
                    <div className="flex items-center">
                        <div className="relative">
                             <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="flex items-center justify-center w-10 h-10 bg-primary-light text-primary rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </button>
                            {isProfileMenuOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {userRole ? (
                                        <>
                                            <div className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">Logado como {userRole}</div>
                                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sair</button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="px-4 py-2 text-sm text-gray-500">Entrar como:</div>
                                            <button onClick={() => handleLogin('student')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Aluno</button>
                                            <button onClick={() => handleLogin('creator')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Criador do Saber</button>
                                            <button onClick={() => handleLogin('recruiter')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Recrutador</button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="md:hidden ml-4">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {userRole && <NavLink to={dashboardPath} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50'}`}>Meu Painel</NavLink>}
                        {navLinks.map(link => (
                            <NavLink key={link.path} to={link.path} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50'}`}>{link.label}</NavLink>
                        ))}
                        <div className="border-t border-gray-200 my-2"></div>
                        <button onClick={() => { handleLogin('student'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">Área do Aluno</button>
                        <button onClick={() => { handleLogin('creator'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">Área do Criador</button>
                        <button onClick={() => { handleLogin('recruiter'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">Área do Recrutador</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;