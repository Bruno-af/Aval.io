import './styles.css';
import Card, {CardData} from './Card/Card';

function Listing() {
    const data: CardData[] = [
        {
            id:0,
            src:'https://cdn.europosters.eu/image/1300/posters/hunter-x-hunter-heroes-i122814.jpg',
            avaliation:9.6,
            title:"Hunter X Hunter"
        },
        {
            id:1,
            src:'https://i.pinimg.com/736x/45/86/b0/4586b08b49039f0b3d17393920ccfa3f.jpg',
            avaliation:5.4,
            title:"Jojo's bizarre adventure"
        },
        {
            id:2,
            src:'https://i.pinimg.com/originals/02/1f/85/021f858662377dedcfa4084d1085b68c.jpg',
            avaliation:7.9,
            title:'Mob'
        },
        {
            id:3,
            src:'',
            avaliation:0.0,
            title:''
        }
        ]
    const data1: CardData[] = []


    return(
        <div className='dsmovie-list'>
        {data.length!==0 ?
            <div className='dsmovie-grid'>
                {data.map((card) => Card(card))}
            </div>:
            <div className='dsmovie-empty-list'>
                <span>Não encontramos resultados...</span>
            </div>
        }
        </div>
    );
}

export default Listing;
            {/* <div className='FAKECARD'>
                <img 
                    src="https://cdn.europosters.eu/image/1300/posters/hunter-x-hunter-heroes-i122814.jpg"
                    alt="Imagem do título" 
                />
                <span className='hight'>
                    <h1 className="dsmovie-card-title">Hunter X Hunter</h1>
                    <h3>9.6</h3>
                </span>
            </div>

            <div className='FAKECARD'>
                <img 
                    src="https://i.pinimg.com/736x/45/86/b0/4586b08b49039f0b3d17393920ccfa3f.jpg"
                    alt="Imagem do título" 
                />
                <span className='low'>
                    <h1 className="dsmovie-card-title">Jojo's bizarre adventure</h1>
                    <h3>5.4</h3>
                </span>
            </div>

            <div className='FAKECARD'>
                <img 
                    src="https://i.pinimg.com/originals/02/1f/85/021f858662377dedcfa4084d1085b68c.jpg"
                    alt="Imagem do título" 
                />
                <span className='medium'>
                    <h1 className="dsmovie-card-title">Mob</h1>
                    <h3>8.0</h3>
                </span>
            </div> */}