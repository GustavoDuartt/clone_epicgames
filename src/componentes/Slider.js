import React, { useEffect, useState } from 'react';
import './Slider.css';

function Slider() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => (prevCount === 4 ? 1 : prevCount + 1));
        }, 5000); // Tempo de 5 segundos para cada slide

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
    }, []);

    return (
        <div className='step1'>
            <div className='slider'>
                <div className='slides'>
                    {/* Radios escondidos */}
                    <input type="radio" name="radio-btn" id="radio1" checked={count === 1} readOnly />
                    <input type="radio" name="radio-btn" id="radio2" checked={count === 2} readOnly />
                    <input type="radio" name="radio-btn" id="radio3" checked={count === 3} readOnly />
                    <input type="radio" name="radio-btn" id="radio4" checked={count === 4} readOnly />

                    {/* Slides */}
                    <div className='slide first'>
                        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/f8f314104964585.Y3JvcCw4MDgsNjMyLDAsMA.png" alt="Slide 1" />
                    </div>
                    <div className='slide'>
                        <img src="https://cdn-0001.qstv.on.epicgames.com/LyYVOGxXNCxdKejQUO/image/landscape_comp.jpeg" alt="Slide 2" />
                    </div>
                    <div className='slide'>
                        <img src="https://www.dexerto.com/cdn-image/wp-content/uploads/2022/01/10/valorant-neon-guide-abilities-how-to-play-tips-tricks.jpg?width=1200&quality=60&format=auto" alt="Slide 3" />
                    </div>
                    <div className='slide'>
                        <img src="https://sm.ign.com/ign_br/game/g/god-of-war/god-of-war-ragnarok_z48t.jpg" alt="Slide 4" />
                    </div>

                    {/* Navegação automática (não visível mas para facilitar a troca de slides) */}
                    <div className='navigation-auto'>
                        <div className='auto-btn1'></div>
                        <div className='auto-btn2'></div>
                        <div className='auto-btn3'></div>
                        <div className='auto-btn4'></div>
                    </div>
                </div>

                {/* Navegação manual */}
                <div className='manual-navigation'>
                    <label htmlFor="radio1" className='manual-btn'></label>
                    <label htmlFor="radio2" className='manual-btn'></label>
                    <label htmlFor="radio3" className='manual-btn'></label>
                    <label htmlFor="radio4" className='manual-btn'></label>
                </div>
            </div>
        </div>
    );
}

export default Slider;
