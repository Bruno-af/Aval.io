import {ReactComponent as Sad} from 'assets/img/sad.svg';
import './styles.css';

export interface CardData {
    id: number;
    src: string;
    alt?: string;
    avaliation: number;
    title: string;
}

function Card( item:CardData ) {
    return(
        <div className='FAKECARD'>
            {(item.src && item.src!=='')?
                <img 
                    src={item.src}
                    alt={(item.alt && item.alt!=='')?item.alt:"Imagem do título"}
                />
                :
                <div className='ErrorImg'>
                    <Sad />
                </div>
            }
            <span className={
                (item.avaliation>0.0)?
                    (item.avaliation>=8.0?'hight':
                    (item.avaliation>=6.0?'medium':
                    'low'))
                : 'underfined'
            }>
                <h1 className="dsmovie-card-title">{(item.title && item.title!='')?item.title:'Title'}</h1>
                <h3>{item.avaliation.toFixed(1)}</h3>
            </span>
        </div>
    );
}

export default Card;