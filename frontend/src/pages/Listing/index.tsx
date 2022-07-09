import './styles.css';
import Card, {CardData} from './Card/Card';

function Listing() {
    const data: CardData[] = [
        {
            id:0,
            src:'https://cdn.europosters.eu/image/1300/posters/hunter-x-hunter-heroes-i122814.jpg',
            avaliation:9.687,
            title:"Hunter X Hunter"
        },
        {
            id:1,
            src:'https://i.pinimg.com/736x/45/86/b0/4586b08b49039f0b3d17393920ccfa3f.jpg',
            avaliation:5.478,
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
        },
        {
            id:3,
            src:'',
            avaliation:0.0,
            title:''
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