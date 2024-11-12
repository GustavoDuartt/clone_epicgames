
import './Nav.css';
import logo from './imgs/Epic-Games-Simbolo-transformed.png'
import globo from './imgs/globo.png'
import seta from './imgs/seta-para-baixo.png'
import lupa from './imgs/pesquisa.png'

function Nav() {
    return (
        <div>
            <div className='inicialNav'>
                <div className="EsquerdaNav">
                    <img src={logo} alt="Logo" width='59px'/>
                    <h2>STORE</h2>
                    <a href="#">Suporte</a>
                    <a href="#">Distribuir <img src={seta} width='12px' style={{ filter: 'invert(100%)' }}/></a>
                </div>

                <div className="DireitaNav">
                    <img src={globo} alt="Logo" width='25px' style={{ filter: 'invert(100%)' }} />
                    <button id='entrar'>Entrar</button>
                    <button id='download'>Download</button>
                </div>
            </div>
            
            <div className="SegundaNav">
                <div className="pesquisa-container">
                    <input
                        id="pesquisa"
                        type="text"
                        placeholder="Pesquisar"
                        className="input-pesquisa"
                    />
                    <img src={lupa}style={{ filter: 'invert(100%)' }} alt="Ícone de pesquisa" className="input-icone" />
                </div>
                    <a href="#">Descobrir</a>
                    <a href="#">Navegar</a>
                    <a href="#">Novidades</a>
                </div>
           </div>
    );
}

export default Nav;
