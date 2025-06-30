import { useState, useEffect } from 'react';
import Header from '../Aranya/Header.jsx';
import Footer from '../Aranya/Footer.jsx';
import CareSection from './Care.jsx';




function CareDashboard() {
    const [vrMode, setVrMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax-leaf');
            if (parallax) {
                parallax.style.setProperty('--scroll-y', `${scrolled * 0.5}px`);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleVrMode = () => {
        setVrMode(!vrMode);
    };

    return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 leaf-bg">
            <Header toggleVrMode={toggleVrMode} />
            <div className='mt-5' style={{marginTop:'66px'}}>
                <CareSection />
            </div>
            <Footer />
        </div>
    );
}

export default CareDashboard;