import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import {ReactComponent as Lupa} from 'assets/img/lupa.svg';
import './styles.css';

function Navbar() {
    return(
        <header style={{zIndex: '1000'}}>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>AVAL.io</h1>

                    <form className='dsmovie-nav-form' action="" method="get">
                        <input type={'text'} placeholder={'Insira um título'}></input>
                        <button type="submit">
                            <Lupa />
                        </button>
                    </form>
                    
                    <a href="https://github.com/BrunoAndradeF">
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