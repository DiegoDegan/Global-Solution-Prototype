
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageBackground from '../../components/PageBackground';
import { BookOpenIcon, SparklesIcon, UserGroupIcon } from '../../components/icons';
import { Link } from 'react-router-dom';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary-light mr-4">
                {icon}
            </div>
            <div>
                <p className="text-3xl font-bold text-primary">{value}</p>
                <p className="text-slate-500 font-medium">{title}</p>
            </div>
        </div>
    </div>
);

const RecruiterDashboard: React.FC = () => {
    return (
        <PageBackground>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-8">Painel do Recrutador</h1>

                {/* Platform Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <StatCard title="Alunos Ativos" value="125,430" icon={<UserGroupIcon className="h-8 w-8 text-primary" />} />
                    <StatCard title="Criadores do Saber" value="3,210" icon={<SparklesIcon className="h-8 w-8 text-primary" />} />
                    <StatCard title="Cursos Disponíveis" value="8,940" icon={<BookOpenIcon className="h-8 w-8 text-primary" />} />
                </div>
                
                {/* Talent Search Tool */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Encontre Talentos</h2>
                    <p className="text-slate-500 mb-6">Utilize os filtros para encontrar o candidato ideal para sua vaga.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="md:col-span-3 lg:col-span-2">
                            <label htmlFor="skills" className="block text-sm font-medium text-slate-700">Habilidades</label>
                            <input type="text" id="skills" placeholder="Ex: React, Node.js, UI/UX" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-slate-700">Localização</label>
                            <input type="text" id="location" placeholder="Ex: São Paulo, BR" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="level" className="block text-sm font-medium text-slate-700">Nível</label>
                            <select id="level" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                                <option>Todos</option>
                                <option>Júnior</option>
                                <option>Pleno</option>
                                <option>Sênior</option>
                            </select>
                        </div>
                        <div className="col-span-full mt-4">
                             <button className="w-full md:w-auto bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors duration-200 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                Pesquisar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link to="/ai-recommendations" className="bg-white p-6 rounded-lg shadow-lg flex items-center hover:shadow-xl transition-shadow">
                        <div className="bg-primary-light p-4 rounded-full mr-4">
                            <SparklesIcon className="h-8 w-8 text-primary"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Insights do Mercado</h3>
                            <p className="text-slate-600">Veja tendências e previsões para o mercado de trabalho.</p>
                        </div>
                    </Link>
                     <Link to="/forum" className="bg-white p-6 rounded-lg shadow-lg flex items-center hover:shadow-xl transition-shadow">
                        <div className="bg-secondary/20 p-4 rounded-full mr-4">
                            <UserGroupIcon className="h-8 w-8 text-secondary"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Fórum de Recrutadores</h3>
                            <p className="text-slate-600">Conecte-se com outros recrutadores e discuta tendências.</p>
                        </div>
                    </Link>
                </div>

            </main>
            <Footer />
        </PageBackground>
    );
};

export default RecruiterDashboard;
