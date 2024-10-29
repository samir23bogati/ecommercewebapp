import "./ProductCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProductCard({ productItem }) {
    return (
        <div className="product-card">
            <div className="product-card-thumbnail">
                <img src={productItem.imgUrl} alt={productItem.title} />
                <div className="card-overlayer">
                    <ul>
                        <li>
                            <Link to="#">
                                View Details
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="product-card-details">
                <span>{productItem.productCat}</span>
                <h4>{productItem.title}</h4>
                <p>${productItem.price}</p>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    productItem: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        productCat: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        review: PropTypes.number
    }).isRequired
};