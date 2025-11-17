import logoImage from '../src/assets/logo.png'; // O caminho agora está correto após mover a pasta

const Logo = () => {
    return ( // Adicionado o "return" para renderizar o JSX
        <div className="flex items-center space-x-3">
            <img src={logoImage} alt="Logo (re)Qualifica+" className="h-10 w-auto" />
            <span className="text-2xl font-lato font-bold italic tracking-tight">
                <span className="text-gray-500">(re)</span>
                <span className="text-primary">Qualifica</span>
                <span className="text-secondary">+</span>
            </span>
        </div>
    );
};

export default Logo;
