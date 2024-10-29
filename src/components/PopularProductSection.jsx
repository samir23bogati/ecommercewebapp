import "./PopularProductSection.css";
import ProductCard from './ProductCard';
import tp1 from "./../assets/images/tp1.jpg";
import tp2 from "./../assets/images/tp2.jpg";
import tp3 from "./../assets/images/tp3.jpg";
export default function PopularProductsSection() {
    let productLists= [
        {
            title:'Airpods',
            price:2423,
            productCat:'Bluetooth',
            imgUrl: tp1,
            review:0
        },
        {
            title:'Headphone',
            price:65.23,
            productCat:'Bluetooth',
            imgUrl: tp2,
            review:0
        },
        {
            title:'Roku Smart TV',
            price:780.00,
            productCat:'Android',
            imgUrl: tp3,
            review:0
        },
        {
            title:'Headphone',
            price:65.23,
            productCat:'Bluetooth',
            imgUrl: tp1,
            review:0
        },
    ]
    return (
        <section className="popular-products-section">
            <div className="container">
                <div className="popular-products-section-title">
                    <h2>Trending Products</h2>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-New-tab" data-bs-toggle="pill" data-bs-target="#pills-New" type="button" role="tab" aria-controls="pills-New" aria-selected="true">New</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-Featured-tab" data-bs-toggle="pill" data-bs-target="#pills-Featured" type="button" role="tab" aria-controls="pills-Featured" aria-selected="false">Featured</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-TopSellers-tab" data-bs-toggle="pill" data-bs-target="#pills-TopSellers" type="button" role="tab" aria-controls="pills-TopSellers" aria-selected="false">TopSellers</button>
                        </li>
                    </ul>
                </div>
                <div className="popular-products-section-content">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-New" role="tabpanel" aria-labelledby="pills-New-tab" tabIndex="0">
                            <div className="row">
                                {productLists.map((item, i) => (
                                    <div key={i} className="col-md-3 col-sm-6 col-12">
                                        <ProductCard productItem={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade show" id="pills-Featured" role="tabpanel" aria-labelledby="pills-New-Featured" tabIndex="0">
                            <p>This is Content for Featured Product</p>
                        </div>
                        <div className="tab-pane fade show" id="pills-TopSellers" role="tabpanel" aria-labelledby="pills-New-TopSellers" tabIndex="0">
                            <p>This is Content for TopSellers Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}