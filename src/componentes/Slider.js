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
                        <div id="text-slide">
                            <button id="btn-comprar">Compre agora</button>
                        </div>
                        <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S1_2560x1440-0c41fcc8db62992e8d098d304b2277f8" alt="Slide 1" />
                    </div>
                    <div className='slide'>
                        <div id="text-slide">
                            <button id="btn-comprar">Compre agora</button>
                        </div>
                        <img src="https://preview.redd.it/subreddit-icon-banner-remake-poll-v0-8x3avh91tvkd1.png?width=2560&format=png&auto=webp&s=5ed458e441a74ede36c3e808bbbe8ff34c0df545" alt="Slide 2" />
                    </div>
                    <div className='slide'>
                        <div id="text-slide">
                            <button id="btn-comprar">Compre agora</button>
                        </div>
                        <img src="https://preview.redd.it/99y2mf66kqh21.jpg?auto=webp&s=c9b128105150c65e2ea725ddf4b080a9270fb2fe" alt="Slide 3" />
                    </div>
                    <div className='slide'>
                        <div id="text-slide">
                            <button id="btn-comprar">Compre agora</button>
                        </div>
                        <img src="https://psxbrasil.com.br/wp-content/uploads/2020/02/EQgBBE1XkAAbPOS.jpg" alt="Slide 4" />
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

            <div className='card-slide'>
                <div className='card'>
                    <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S1_2560x1440-0c41fcc8db62992e8d098d304b2277f8" alt="Slide 1" />
                    <p>Tomb Raider</p>
                </div>
                <div className='card'>
                    <img src="https://preview.redd.it/subreddit-icon-banner-remake-poll-v0-8x3avh91tvkd1.png?width=2560&format=png&auto=webp&s=5ed458e441a74ede36c3e808bbbe8ff34c0df545" alt="Slide 2" />
                    <p>Until Down</p>
                </div>
                <div className='card'>
                    <img src="https://preview.redd.it/99y2mf66kqh21.jpg?auto=webp&s=c9b128105150c65e2ea725ddf4b080a9270fb2fe" alt="Slide 3" />
                    <p>Rainbow six</p>
                </div>
                <div className='card'>
                    <img src="https://psxbrasil.com.br/wp-content/uploads/2020/02/EQgBBE1XkAAbPOS.jpg" alt="Slide 4" />
                    <p>The last of Us</p>
                </div>
            </div>
        </div>
    );
}

export default Slider;
