import './styles.css';
function Listing() {
    return(
        <>
            <div className='dsmovie-list'>

                {/* <div className="dsmovie-card">
                    <img 
                        src="https://cdn.europosters.eu/image/1300/posters/hunter-x-hunter-heroes-i122814.jpg"
                        alt="Imagem do título" 
                    />

                    <h1 className="dsmovie-card-title">Rede neural 2</h1>

                    <section className="dsmovie-card-about">
                        <span>descrição... </span>
                        <span>stars </span>
                        <span>Avaliações </span>
                    </section>
                </div> */}

                <div className='FAKECARD'>
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
                        <h1 className="dsmovie-card-title">mob</h1>
                        <h3>8.0</h3>
                    </span>
                </div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>
                <div className='FAKECARD'></div>

            </div>

            <footer className='footer'>
            </footer>
        </>
    );
}

export default Listing;