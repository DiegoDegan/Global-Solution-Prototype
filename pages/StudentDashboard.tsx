
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBackground from '../components/PageBackground';
import { mockCourses, mockMissions, mockCertificates } from '../constants/mockData';
import { BookOpenIcon, StarIcon, CoinIcon, CertificateIcon, SparklesIcon, UserGroupIcon } from '../components/icons';
import { Link } from 'react-router-dom';
import avatarStudent from '../assets/avatar-student.png';

const CourseCard: React.FC<{ course: typeof mockCourses[0] }> = ({ course }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <img src={course.thumbnail} alt={course.title} className="w-full h-32 object-cover" />
        <div className="p-4">
            <h3 className="font-bold text-md text-slate-800 truncate">{course.title}</h3>
            <p className="text-sm text-slate-500 mt-1">por {course.creator}</p>
            <div className="mt-4">
                <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>Progresso</span>
                    <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
            </div>
            <button className="mt-4 w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200">
                {course.progress === 100 ? 'Revisar' : course.progress > 0 ? 'Continuar' : 'Começar'}
            </button>
        </div>
    </div>
);


const StudentDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderContent = () => {
        switch (activeTab) {
             case 'available':
                const availableCourses = mockCourses.filter(c => c.progress === 0);
                const categories = [...new Set(availableCourses.map(c => c.category))];
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Cursos Disponíveis</h2>
                         {categories.length > 0 ? categories.map(category => (
                            <div key={category} className="mb-8">
                                <h3 className="text-xl font-bold text-slate-700 mb-4 border-b-2 border-secondary pb-2">{category}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {availableCourses.filter(c => c.category === category).map(course => (
                                        <CourseCard key={course.id} course={course} />
                                    ))}
                                </div>
                            </div>
                        )) : <p className="text-slate-500">Não há novos cursos disponíveis no momento. Volte em breve!</p>}
                    </div>
                );
            case 'certificates':
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Meus Certificados</h2>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <ul className="space-y-4">
                               {mockCertificates.map(cert => (
                                   <li key={cert.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
                                       <div className="flex items-center">
                                           <CertificateIcon className="h-8 w-8 text-secondary mr-4"/>
                                           <div>
                                               <p className="font-semibold text-slate-800">{cert.courseTitle}</p>
                                               <p className="text-sm text-slate-500">Emitido em: {cert.dateIssued}</p>
                                           </div>
                                       </div>
                                       <button className="text-sm font-semibold text-primary hover:underline">Ver Certificado</button>
                                   </li>
                               ))}
                            </ul>
                        </div>
                    </div>
                );
            case 'home':
            default:
                const myCourses = mockCourses.filter(course => course.progress > 0);
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Meus Cursos</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {myCourses.map(course => <CourseCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
        }
    }


    return (
        <PageBackground>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar */}
                    <aside className="lg:w-1/4 space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img src={avatarStudent} alt="Avatar" className="w-24 h-24 rounded-full mx-auto border-4 border-primary-light" />
                            <h2 className="mt-4 text-xl font-bold text-slate-800">Enzo Gael</h2>
                            <p className="text-sm text-slate-500">Nível 5: Aprendiz Voraz</p>
                            <div className="mt-4 text-left">
                                <div className="flex justify-between text-xs text-slate-500 mb-1">
                                    <span>Progresso Nível</span>
                                    <span className="font-semibold">450 / 1000 XP</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-secondary to-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                             <h3 className="font-bold text-lg mb-4 text-slate-800">Gamificação</h3>
                             <div className="space-y-4">
                                 <div className="flex items-center justify-between">
                                     <div className="flex items-center text-slate-700">
                                        <StarIcon className="h-6 w-6 text-yellow-400 mr-2"/>
                                        <span className="font-semibold">QualifyXP</span>
                                     </div>
                                     <span className="font-bold text-primary">1,450</span>
                                 </div>
                                  <div className="flex items-center justify-between">
                                     <div className="flex items-center text-slate-700">
                                        <CoinIcon className="h-6 w-6 text-amber-500 mr-2"/>
                                        <span className="font-semibold">QualifyCOIN</span>
                                     </div>
                                     <span className="font-bold text-primary">8,230</span>
                                 </div>
                                 <Link to="/marketplace" className="block text-center mt-4 w-full bg-secondary text-white font-semibold py-2 rounded-lg hover:bg-secondary-dark transition-colors duration-200">
                                    Ir para Marketplace
                                 </Link>
                             </div>
                        </div>

                         <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-bold text-lg mb-4 text-slate-800">Missões Ativas</h3>
                             <ul className="space-y-3">
                                {mockMissions.filter(m => !m.completed).map(mission => (
                                     <li key={mission.id}>
                                         <p className="font-semibold text-sm text-slate-700">{mission.title}</p>
                                         <p className="text-xs text-slate-500">{mission.description}</p>
                                     </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-bold text-lg mb-4 text-slate-800">Ações Rápidas</h3>
                            <div className="space-y-3">
                                <Link to="/ai-recommendations" className="flex items-center p-3 bg-slate-100 rounded-lg hover:bg-primary-light/50 transition-colors duration-200">
                                    <SparklesIcon className="h-6 w-6 text-primary mr-3"/>
                                    <span className="font-semibold text-slate-700">Recomendações da IA</span>
                                </Link>
                                <Link to="/forum" className="flex items-center p-3 bg-slate-100 rounded-lg hover:bg-primary-light/50 transition-colors duration-200">
                                    <UserGroupIcon className="h-6 w-6 text-primary mr-3"/>
                                    <span className="font-semibold text-slate-700">Acessar Fórum</span>
                                </Link>
                                <button className="w-full flex items-center p-3 bg-slate-100 rounded-lg hover:bg-primary-light/50 transition-colors duration-200">
                                    <BookOpenIcon className="h-6 w-6 text-primary mr-3"/>
                                    <span className="font-semibold text-slate-700">Secretaria</span>
                                </button>
                            </div>
                        </div>
                    </aside>
                    
                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <div className="flex border-b border-slate-300 mb-6">
                            <button onClick={() => setActiveTab('home')} className={`py-2 px-4 font-semibold ${activeTab === 'home' ? 'border-b-2 border-primary text-primary' : 'text-slate-500'}`}>
                                Home do Aluno
                            </button>
                             <button onClick={() => setActiveTab('available')} className={`py-2 px-4 font-semibold ${activeTab === 'available' ? 'border-b-2 border-primary text-primary' : 'text-slate-500'}`}>
                                Cursos Disponíveis
                            </button>
                             <button onClick={() => setActiveTab('certificates')} className={`py-2 px-4 font-semibold ${activeTab === 'certificates' ? 'border-b-2 border-primary text-primary' : 'text-slate-500'}`}>
                                Certificados
                            </button>
                        </div>
                        {renderContent()}
                    </div>
                </div>
            </main>
            <Footer />
        </PageBackground>
    );
};

export default StudentDashboard;