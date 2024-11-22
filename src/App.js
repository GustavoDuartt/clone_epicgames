import Nav from './componentes/Nav';
import Slider from './componentes/Slider';
import './App.css';
import Cards from './componentes/Cards';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Slider/>
      <Cards/>
      <div className='Corpo'>

        <div className='box'>
          <div className='card2'>
            <div id='img'>
              <img src='https://s2-techtudo.glbimg.com/HX9OXm0EP_vrBcIDtiDl5ze5Pfc=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/P/k/MtjVSiTiCA2S2pym9wxw/fortnite.jpg'/>
            </div>
            <h2>Fortnite</h2>
            <p>Aumente a energia e solte as batidas com Eminem, o ícone da música, com o traje Rap Boy, o Retorno!</p>
            <button>Jogue Grátis <img src='https://cdn-icons-png.flaticon.com/128/1390/1390645.png' style={{ filter: 'invert(100%)' }}/></button>
          </div>

          <div className='card2'>
            <div id='img'>
              <img src='https://upload.wikimedia.org/wikipedia/pt/d/df/Far_Cry_6_capa.jpg'/>
            </div>
            <h2>Far Cry 6</h2>
            <p>Jogue como Dani Rojas, que nasceu em Yara e luta na guerrilha revolucionária atual para libertar sua nação.</p>
            <button>Teste agora</button>
          </div>

          <div className='card2'>
            <div id='img'>
              <img src='https://cdn1.epicgames.com/spt-assets/9be738ad51e949caab95be5e0e3b1436/sherlock-purr-2-15n4l.jpg'/>
            </div>
            <h2>Sherlock purr</h2>
            <p>Sherlock Purr é um jogo divertido onde os jogadores ajudam o detetive felino a procurar objetos escondidos em um apartamento.</p>
            <button>Adicionar</button>
          </div>
        </div>

        <div className='popup1'>

        </div>

        <div className='popup2'>

        </div>

      </div>
    </div>
  );
}

export default App;
