import "./CategorySection.css";
import { Link } from "react-router-dom";
import pc2 from "./../assets/images/pc2.png"
import pc3 from "./../assets/images/pc3.png"
import homemade1 from "./../assets/images/homemade.png"
export default function CategorySection() {
    const productCategoryList =[
        {
            title: 'HOME MADE ',
            totalProduct: 4,
            imageUrl : homemade1
        },
        {
            title: 'RE-SALE',
            totalProduct: 4,
            imageUrl : pc2
        },
        {
            title: 'SOUVENIR',
            totalProduct: 4,
            imageUrl : pc3
        },
    ]
return (
<section className="categories-section">
    <div className="container">
        <ul className="categories-list">
            {
                productCategoryList.map((item,i) => {
                    return(
<li key={i} className="categories-list-item">
    <Link to ={'#'}className="categories-list-item-thumbnail" >
    <img src={item.imageUrl} alt=""/>
    </Link> 
                <h4>
                <Link to ={'#'} > {item.title}</Link></h4>
                <p>{item.totalProduct} Product</p>
            </li>
                    )
                }) 
            }
            
        </ul>
    </div>
</section>
);
}