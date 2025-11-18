
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBackground from '../components/PageBackground';
import { mockForumTopics } from '../constants/mockData';
import { ForumTopic } from '../types';

const categoryColors: { [key: string]: string } = {
    'Tira-dúvidas': 'bg-blue-100 text-blue-800',
    'Networking': 'bg-green-100 text-green-800',
    'Projetos compartilhados': 'bg-purple-100 text-purple-800',
};

const TopicItem: React.FC<{ topic: ForumTopic }> = ({ topic }) => (
    <div className="grid grid-cols-12 gap-4 items-center p-4 border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200">
        <div className="col-span-12 sm:col-span-7 flex items-center">
            <div className="flex-shrink-0 h-10 w-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold mr-4">
                {topic.author.charAt(0)}
            </div>
            <div>
                <a href="#" className="font-bold text-slate-800 hover:text-primary transition-colors">{topic.title}</a>
                <div className="text-sm text-slate-500 mt-1">
                    por {topic.author} em <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[topic.category]}`}>{topic.category}</span>
                </div>
            </div>
        </div>
        <div className="hidden sm:block col-span-2 text-center text-slate-600">{topic.replies}</div>
        <div className="hidden sm:block col-span-3 text-right text-sm text-slate-500">{topic.lastPost}</div>
    </div>
);


const Forum: React.FC = () => {
    return (
        <PageBackground>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Fórum da Comunidade</h1>
                        <p className="mt-2 text-lg text-slate-600">
                            Conecte-se, tire dúvidas e colabore em projetos.
                        </p>
                    </div>
                    <button className="mt-4 sm:mt-0 bg-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-primary-dark transition-colors duration-200">
                        Criar Novo Tópico
                    </button>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 font-bold text-slate-600 text-sm">
                        <div className="col-span-7">Tópico</div>
                        <div className="col-span-2 text-center">Respostas</div>
                        <div className="col-span-3 text-right">Última Postagem</div>
                    </div>
                    <div>
                        {mockForumTopics.map(topic => (
                            <TopicItem key={topic.id} topic={topic} />
                        ))}
                    </div>
                </div>

            </main>
            <Footer />
        </PageBackground>
    );
};

export default Forum;
