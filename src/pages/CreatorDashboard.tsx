
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageBackground from '../../components/PageBackground';
import { mockCourses } from '../../constants/mockData';
import { ChartBarIcon, SparklesIcon, UserGroupIcon, StarIcon, LightBulbIcon } from '../../components/icons';
import { Link } from 'react-router-dom';

const MetricCard: React.FC<{ title: string, value: string, icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
        <div className="bg-primary-light p-3 rounded-full mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-slate-500">{title}</p>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
        </div>
    </div>
);

const CreatorDashboard: React.FC = () => {
    return (
        <PageBackground>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Painel do Criador</h1>
                    <div className="flex gap-4">
                        <button className="bg-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary-dark transition-colors duration-200">Criar Trilha</button>
                        <button className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200">Criar Nova Aula</button>
                    </div>
                </div>

                {/* Metrics Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <MetricCard title="Visualizações Totais" value="1.2M" icon={<ChartBarIcon className="h-6 w-6 text-primary" />} />
                    <MetricCard title="Avaliação Média" value="4.8/5" icon={<StarIcon className="h-6 w-6 text-primary" />} />
                    <MetricCard title="Alunos Inscritos" value="8,492" icon={<UserGroupIcon className="h-6 w-6 text-primary" />} />
                    <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg shadow-lg text-white">
                        <div className="flex items-start">
                            <div className="bg-white/20 p-3 rounded-full mr-4">
                                <LightBulbIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm">Impact Score</p>
                                <p className="text-2xl font-bold">850/1000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course List Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Minhas Aulas Publicadas</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="p-4 font-semibold text-slate-600">Curso</th>
                                    <th className="p-4 font-semibold text-slate-600">Alunos</th>
                                    <th className="p-4 font-semibold text-slate-600">Avaliação</th>
                                    <th className="p-4 font-semibold text-slate-600">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockCourses.slice(0, 4).map(course => (
                                    <tr key={course.id} className="border-b hover:bg-slate-50">
                                        <td className="p-4 font-medium text-slate-800">{course.title}</td>
                                        <td className="p-4 text-slate-600">{(course.id * 345).toLocaleString()}</td>
                                        <td className="p-4 text-slate-600 flex items-center">
                                            4.{course.id + 3} <StarIcon className="h-4 w-4 text-yellow-400 ml-1" />
                                        </td>
                                        <td className="p-4">
                                            <button className="text-primary font-semibold hover:underline mr-4">Editar</button>
                                            <button className="text-slate-500 font-semibold hover:text-slate-800">Ver Stats</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions */}
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link to="/ai-recommendations" className="bg-white p-6 rounded-lg shadow-lg flex items-center hover:shadow-xl transition-shadow">
                        <div className="bg-primary-light p-4 rounded-full mr-4">
                            <SparklesIcon className="h-8 w-8 text-primary"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Recomendações da IA</h3>
                            <p className="text-slate-600">Veja insights para criar conteúdos de maior impacto.</p>
                        </div>
                    </Link>
                     <Link to="/forum" className="bg-white p-6 rounded-lg shadow-lg flex items-center hover:shadow-xl transition-shadow">
                        <div className="bg-secondary/20 p-4 rounded-full mr-4">
                            <UserGroupIcon className="h-8 w-8 text-secondary"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Fórum de Criadores</h3>
                            <p className="text-slate-600">Conecte-se com outros criadores e troque experiências.</p>
                        </div>
                    </Link>
                </div>
            </main>
            <Footer />
        </PageBackground>
    );
};

export default CreatorDashboard;
