import Image from 'next/image'
import frog from '../../public/Images/sapo.png';

const Jumbotron = () => {
    return (< >
        <div className="background-image">
            <Image src={frog} alt="Ícone de sapo"/>
        </div>
        
        <div className="promotional-message">
            <h3>REDISCOVER</h3>
            <h2>Miçangas</h2> 
            {/* criar nome promocional com isso */}
            <p>
                🐸 Acessórios brincantes
                📩 Encomendas via DM
                🙋🏻‍♀️ Personalizados por
                <a href="https://www.instagram.com/aylatorrens/" target='_blank'>@aylatorrens</a> e 
                <a href="https://www.instagram.com/vanessa_torrens/" target='_blank'>@vanessa_torrens</a>
             </p>
        </div>
    </>)
}
export default Jumbotron;