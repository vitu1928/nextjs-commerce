import Image from 'next/image'
import frog from '../../public/Images/sapo.png';
import styles from "./style.module.scss"

const Jumbotron = () => {
    return (< >
        <div className="background-image">
            <Image src={frog} alt="Ícone de sapo"/>
        </div>
        
        <div className={styles['promotional-message']}>
            <h3>EncantoBeads</h3>
            <h2>Bijuterias</h2> 
            {/* criar nome promocional com isso */}
            <p>
                🐸 Acessórios brincantes
                📩 Encomendas via DM
                🙋🏻‍♀️ Personalizados por
                <a href="https://www.instagram.com/aylatorrens/" target='_blank'> @aylatorrens</a> e 
                <a href="https://www.instagram.com/vanessa_torrens/" target='_blank'> @vanessa_torrens</a>
             </p>
        </div>
    </>)
}
export default Jumbotron;