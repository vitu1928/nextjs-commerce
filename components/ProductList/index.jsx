import Product, { IProduct } from "../Product";
import styles from "./style.module.scss"

const ProductList = (props) => {
    return (
        <ul className={styles['product-list']}>
            {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </ul>
    )
}


export default ProductList