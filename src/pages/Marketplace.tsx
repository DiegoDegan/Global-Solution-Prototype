
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageBackground from '../../components/PageBackground';
import { mockRewards } from '../../constants/mockData';
import { Reward } from '../types';
import { CoinIcon } from '../../components/icons';

const RewardCard: React.FC<{ reward: Reward }> = ({ reward }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group">
        <div className="relative">
            <img src={reward.image} alt={reward.title} className="w-full h-40 object-cover" />
            <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-primary font-bold py-1 px-3 rounded-full flex items-center">
                <CoinIcon className="h-5 w-5 mr-1 text-amber-500" />
                {reward.cost.toLocaleString()}
            </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-slate-800">{reward.title}</h3>
            <p className="text-sm text-slate-600 mt-1 flex-grow">{reward.description}</p>
            <button className="mt-4 w-full bg-secondary text-white font-semibold py-2 rounded-lg hover:bg-secondary-dark transition-transform transform group-hover:scale-105 duration-300">
                Resgatar
            </button>
        </div>
    </div>
);


const Marketplace: React.FC = () => {
    const userCoins = 8230; // Mock data

    return (
        <PageBackground>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 bg-white p-6 rounded-xl shadow-md">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Marketplace de Benefícios</h1>
                        <p className="mt-2 text-lg text-slate-600">
                            Use seus QualifyCOINs para resgatar recompensas incríveis!
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex-shrink-0 bg-primary-light/50 border border-primary-light text-primary font-bold p-3 rounded-lg flex items-center">
                        <CoinIcon className="h-8 w-8 mr-3 text-amber-500" />
                        <div>
                            <span className="block text-sm leading-tight">Seu Saldo</span>
                            <span className="block text-2xl leading-tight">{userCoins.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {mockRewards.map(reward => (
                        <RewardCard key={reward.id} reward={reward} />
                    ))}
                </div>
            </main>
            <Footer />
        </PageBackground>
    );
};

export default Marketplace;
