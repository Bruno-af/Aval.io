import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return(
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>AVAL.io</h1>
                    <a href="https://github.com/Bruno-af">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-text'>GitHub</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;