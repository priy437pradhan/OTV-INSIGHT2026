import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RulesPage from './pages/Rules.jsx';
//import SchedulePage from './pages/Schedule.jsx';
import CatagoriesPage from './pages/CatagoriesPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import  ContactUsPage from './pages/ContactPage.jsx';
import PrivacypolicyPage from './pages/PrivacypolicyPage.jsx'
import TermconditionPage from './pages/TermconditionPage.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <ScrollToTop /> 
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catagories" element={<CatagoriesPage />} />
            <Route path="/RulePage" element={<RulesPage />} />
            {/* <Route path="/SchedulePage" element={<SchedulePage />} /> */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contactus" element={< ContactUsPage />} />
            <Route path="/privacypolicy" element={< PrivacypolicyPage />} />
            <Route path="/termandcondition" element={< TermconditionPage />} />
          </Routes>
            <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;