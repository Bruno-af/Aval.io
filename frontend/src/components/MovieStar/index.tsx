import {ReactComponent as StarFull} from 'assets/img/star.svg';
import {ReactComponent as StarHalf} from 'assets/img/half-star.svg';
import {ReactComponent as StarEmpty} from 'assets/img/empty-star.svg';

import './styles.css';

function MovieStar() {
    return(
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStar;