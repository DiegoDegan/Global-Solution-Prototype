import React, { ReactNode } from 'react';
import backgroundImage from '../assets/background.png';
import logoFullImage from '../assets/logofull.png';

interface Props {
  children: ReactNode;
  showLogo?: boolean;
  className?: string;
}

const PageBackground: React.FC<Props> = ({ children, showLogo = false, className = '' }) => {
  const background = showLogo
    ? `url(${logoFullImage}), url(${backgroundImage})`
    : `url(${backgroundImage})`;

  const style: React.CSSProperties = {
    backgroundImage: background,
    backgroundPosition: showLogo ? 'center, center' : 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: showLogo ? 'contain, cover' : 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  };

  return (
    <div style={style} className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default PageBackground;
