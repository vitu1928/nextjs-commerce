import Image from 'next/image'
import styles from './style.module.scss';
import confetti from 'js-confetti';

const Product = ({ product }) => {
    const handleConfetti = (emoji) => new confetti().addConfetti({
        emojis: [emoji]
    })
    
    return (
        <li className={styles.product}>
            <article>
                <div className={styles.infos}>
                    <h2 className={styles.product__title}>{product.name}</h2>
                    <p className={styles.product__description}>{product.description}</p>
                    <div className="product__price-button-container">
                        <div className={styles.product__price}>R${product.price.toFixed(2)}</div>
                        <button
                                onClick={() => handleConfetti(product.emoji)}
                                // className={`snipcart-add-item ${styles.product__button}`}
                                data-item-id={product.id}
                                data-item-name={product.name}
                                data-item-price={product.price}
                                data-item-url={product.url}
                                data-item-image={product.image.src}>
                                Adicionar ao carrinho
                            </button>
                        
                    </div>
                </div>
                <div className={styles.image}>
                    <Image 
                        src={product.image}
                        alt={product.image.src} 
                        layout={'fill'}
                        objectFit={'cover'}
                        objectPosition={"center center"}
                    />
                </div>
            </article>
        </li>
    )
}

export default Product