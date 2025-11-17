
import React, { useState, useContext, ReactNode } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentDashboard from './pages/StudentDashboard';
import CreatorDashboard from './pages/CreatorDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import AIRecommendations from './pages/AIRecommendations';
import Marketplace from './pages/Marketplace';
import Forum from './pages/Forum';
import { UserRole } from './types';
import { UserRoleContext } from './contexts/UserRoleContext';
import backgroundImage from './assets/background.png';

// Componente para proteger rotas que exigem um tipo de usuário específico
interface PrivateRouteProps {
  element: ReactNode;
  requiredRole: UserRole;
}

function PrivateRoute({ element, requiredRole }: PrivateRouteProps) {
  const { userRole } = useContext(UserRoleContext);
  return userRole === requiredRole ? <>{element}</> : <Navigate to="/" />;
}

function App() {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      >
        <HashRouter>
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-recommendations" element={<AIRecommendations />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/forum" element={<Forum />} />

            {/* Rotas Privadas */}
            <Route path="/student" element={<PrivateRoute requiredRole="student" element={<StudentDashboard />} />} />
            <Route path="/creator" element={<PrivateRoute requiredRole="creator" element={<CreatorDashboard />} />} />
            <Route path="/recruiter" element={<PrivateRoute requiredRole="recruiter" element={<RecruiterDashboard />} />} />

            {/* Rota para qualquer outro caminho, redireciona para a Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
      </div>
    </UserRoleContext.Provider>
  );
}

export default App;
