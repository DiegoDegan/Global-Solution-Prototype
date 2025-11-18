import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpenIcon, ChartBarIcon, SparklesIcon, UserGroupIcon, LightBulbIcon } from '../components/icons';
import { UserRoleContext } from '../UserRoleContext';
import { UserRole } from '../types';
import PageBackground from '../components/PageBackground';

const HomePage: React.FC = () => {
    const { setUserRole } = useContext(UserRoleContext);
    const navigate = useNavigate();

    const values = [
        {
            icon: <BookOpenIcon className="h-10 w-10 text-primary"/>,
            title: "Acesso Universal",
            description: "Conhecimento gratuito e de qualidade para todos, quebrando barreiras sociais e geográficas."
        },
        {
            icon: <UserGroupIcon className="h-10 w-10 text-primary"/>,
            title: "Comunidade Forte",
            description: "Um ecossistema colaborativo onde todos aprendem, ensinam e crescem juntos."
        },
        {
            icon: <SparklesIcon className="h-10 w-10 text-primary"/>,
            title: "Inovação Contínua",
            description: "Uso de IA e dados para antecipar o futuro do trabalho e guiar o desenvolvimento profissional."
        },
        {
            icon: <LightBulbIcon className="h-10 w-10 text-primary"/>,
            title: "Impacto Real",
            description: "Capacitação que se traduz em empregabilidade, mobilidade social e recompensas tangíveis."
        },
    ]

    const handleLoginAndNavigate = (role: UserRole) => {
        setUserRole(role);
        if (role === 'student') navigate('/student');
        if (role === 'creator') navigate('/creator');
        if (role === 'recruiter') navigate('/recruiter');
    };

    return (
        <PageBackground showLogo>
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-20 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-primary-light/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                            Seu Futuro Profissional Começa <span className="text-primary">Agora</span>.
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
                            Um hub de aprendizado inteligente que conecta você às habilidades do futuro, com trilhas de capacitação, recompensas e uma comunidade vibrante.
                        </p>
                        <div className="mt-10 flex justify-center gap-4 flex-wrap">
                            <button onClick={() => handleLoginAndNavigate('student')} className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg">Comece a Aprender</button>
                            <button onClick={() => handleLoginAndNavigate('creator')} className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg">Compartilhe seu Saber</button>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-slate-900">Nossos Valores</h2>
                            <p className="mt-4 text-lg text-slate-600">Os pilares que sustentam nossa comunidade.</p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map(value => (
                                <div key={value.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                    <div className="flex items-center justify-center h-16 w-16 bg-primary-light rounded-full mx-auto">
                                        {value.icon}
                                    </div>
                                    <h3 className="mt-6 text-xl font-bold text-slate-900 text-center">{value.title}</h3>
                                    <p className="mt-2 text-slate-600 text-center">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 sm:py-24">
                     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-slate-900">Junte-se à nossa Comunidade</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Escolha seu caminho e comece a transformar seu futuro hoje mesmo.</p>
                        </div>
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="border border-gray-200 rounded-lg p-8 text-center flex flex-col items-center bg-white hover:border-primary transition-colors duration-300">
                                <h3 className="text-2xl font-bold text-primary">Aluno</h3>
                                <p className="mt-4 text-slate-600 flex-grow">Aprenda novas habilidades, ganhe pontos e resgate recompensas incríveis.</p>
                                <button onClick={() => handleLoginAndNavigate('student')} className="mt-6 bg-primary/10 text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary/20">Quero Aprender</button>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-8 text-center flex flex-col items-center bg-white hover:border-secondary transition-colors duration-300">
                                <h3 className="text-2xl font-bold text-secondary">Criador do Saber</h3>
                                <p className="mt-4 text-slate-600 flex-grow">Compartilhe seu conhecimento, crie cursos e gere impacto social.</p>
                                <button onClick={() => handleLoginAndNavigate('creator')} className="mt-6 bg-secondary/10 text-secondary font-semibold py-2 px-4 rounded-lg hover:bg-secondary/20">Quero Ensinar</button>
                            </div>
                                      <div className="border border-gray-200 rounded-lg p-8 text-center flex flex-col items-center bg-white hover:border-slate-500 transition-colors duration-300">
                                          <h3 className="text-2xl font-bold text-slate-700">Recrutador</h3>
                                <p className="mt-4 text-slate-600 flex-grow">Encontre os melhores talentos qualificados pelo nosso hub.</p>
                                <button onClick={() => handleLoginAndNavigate('recruiter')} className="mt-6 bg-slate-200 text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-300">Quero Recrutar</button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </PageBackground>
    );
};

export default HomePage;