import styles from './style.module.scss';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <h2 className={styles.contact__title}>Qualquer  dúvida, <span className={styles.colored}>Fale conosco!</span>
            </h2>
            <p className={styles.contact__paragraph}>Entre em contato conosco caso tenha alguma dúvida ou necessite de suporte. Estamos prontos para atendê-lo e oferecer a assistência que você precisa. Não hesite em nos contatar!</p>
            <a href="https://ig.me/m/cururuelegante" target='_blank'>
                <button>Converse Conosco</button>
            </a>
        </div>
    )
}
