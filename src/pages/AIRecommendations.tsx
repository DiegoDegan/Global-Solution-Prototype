
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageBackground from '../../components/PageBackground';
import { professionsChartData, techTrendsChartData } from '../../constants/mockData';
import { SparklesIcon } from '../../components/icons';

const AIRecommendations: React.FC = () => {
    return (
        <PageBackground>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <SparklesIcon className="h-12 w-12 text-primary mx-auto"/>
                    <h1 className="mt-4 text-4xl font-extrabold text-slate-900 tracking-tight">Recomendações da IA</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Insights e previsões sobre o mercado de trabalho para guiar sua jornada profissional.
                    </p>
                </div>
                
                {/* Professions Chart */}
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Profissões em Alta e em Declínio</h2>
                    <div className="w-full h-80 sm:h-96">
                        <ResponsiveContainer>
                            <BarChart data={professionsChartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" angle={-20} textAnchor="end" height={60} interval={0} tick={{fontSize: 12}} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Em Alta" fill="#2d7a9f" />
                                <Bar dataKey="Em Declínio" fill="#d1d5db" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Tech Trends Chart */}
                 <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Tendências de Tecnologia (Adoção em Milhões de Profissionais)</h2>
                     <div className="w-full h-80 sm:h-96">
                        <ResponsiveContainer>
                            <LineChart data={techTrendsChartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="IA Generativa" stroke="#2d7a9f" strokeWidth={3} />
                                <Line type="monotone" dataKey="Computação Quântica" stroke="#4a9c8c" strokeWidth={3} />
                                <Line type="monotone" dataKey="Web3" stroke="#89c4d4" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                 {/* Insights Text */}
                 <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-primary mb-2">Análise Preditiva</h3>
                    <p className="text-slate-700">
                       Nossos modelos indicam que profissionais com habilidades híbridas (técnicas + soft skills) terão um aumento de 40% na empregabilidade nos próximos 3 anos.
                       A automação impactará principalmente tarefas repetitivas, criando novas oportunidades em supervisão de IA e análise de dados.
                       Recomendamos focar em cursos de <span className="font-semibold text-primary-dark">Inteligência Artificial</span>, <span className="font-semibold text-primary-dark">Análise de Dados</span> e <span className="font-semibold text-primary-dark">Comunicação Interpessoal</span> para se manter relevante.
                    </p>
                </div>
            </main>
            <Footer />
        </PageBackground>
    );
};

export default AIRecommendations;
