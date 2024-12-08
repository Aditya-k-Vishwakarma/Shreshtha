import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { NSHDashboard } from './pages/NSHDashboard';
import { ICHDashboard } from './pages/ICHDashboard';
import { SPODashboard } from './pages/SPODashboard';
import { AddParcelPage } from './pages/AddParcelPage';
import { RouteSummary } from './pages/RouteSummary';
import {RouteMap }from './components/dashboard/RouteMap';
import {InvertParcelTable} from "./components/dashboard/InvertParcelTable"
import { useAuth } from './contexts/AuthContext';
import { ParcelDetails } from './pages/ParcelDetails';

// Wrapper component to handle root route redirection
const RootRedirect: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect based on user role
  switch (user.role) {
    case 'NSH':
      return <Navigate to="/nsh-dashboard" replace />;
    case 'ICH':
      return <Navigate to="/ich-dashboard" replace />;
    case 'SPO':
      return <Navigate to="/spo-dashboard" replace />;
    default:
      return <Navigate to="/home" replace />;
  }
};

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <AuthProvider>
      <Router>
        <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''}`}>
          <Header isDark={isDark} toggleTheme={toggleTheme} />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<RootRedirect />} />
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/home" 
                element={
                  <ProtectedRoute allowedRoles={['USER']}>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route 
                path="/nsh-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['NSH']}>
                    <NSHDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/ich-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['ICH']}>
                    <ICHDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/spo-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['SPO']}>
                    <SPODashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/add-parcel" 
                element={
                  <ProtectedRoute allowedRoles={['SPO']}>
                    <AddParcelPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/route-summary" 
                element={
                  <ProtectedRoute allowedRoles={['NSH', 'ICH']}>
                    <RouteSummary />
                  </ProtectedRoute>
                } 
              />
              {/* Add the new Route for RouteMap */}
              <Route path="/plan/:parcelId" element={<RouteMap/>} />
              {/* <Route path="/InvertParcelTable" element={<InvertParcelTable />} /> */}
              <Route path="/InvertParcelTable" element={<InvertParcelTable />} />
              <Route path="/parcel-details/:id" element={<ParcelDetails />} />

              
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
