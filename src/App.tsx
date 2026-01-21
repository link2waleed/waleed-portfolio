import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppDetail from './pages/AppDetail';

// Home Page Component
const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle hash navigation (e.g., /#projects)
        if (location.hash) {
            const elementId = location.hash.substring(1); // Remove the '#'
            const element = document.getElementById(elementId);
            if (element) {
                // Small delay to ensure DOM is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
};

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-950">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/app/:id" element={<AppDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
