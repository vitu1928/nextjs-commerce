import Product, { IProduct } from "../Product";
import styles from "./style.module.scss"
interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    return (
        <ul className={styles['product-list']}>
            {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </ul>
    )
}


export default ProductList