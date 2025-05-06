import "./PopularProductSection.css";
import ProductCard from './ProductCard';
import tp1 from "./../assets/images/tp1.jpg";
import tp2 from "./../assets/images/tp2.jpg";
import tp3 from "./../assets/images/tp3.jpg";

export default function PopularProductsSection() {
    const newProducts = [
        { title: 'Galaxy Buds Pro', price: 199.99, productCat: 'Wireless Audio', imgUrl: tp1, review: 4 },
        { title: 'Noise Cancelling Headphones', price: 349.00, productCat: 'Audio', imgUrl: tp2, review: 5 },
        { title: 'Smart Home Hub', price: 89.99, productCat: 'Home Tech', imgUrl: tp3, review: 3 },
        { title: 'iPad Mini 6', price: 499.99, productCat: 'Tablet', imgUrl: tp1, review: 4 },
        { title: 'Echo Dot 5th Gen', price: 49.99, productCat: 'Smart Device', imgUrl: tp2, review: 4 },
        { title: 'Sony WH-1000XM5', price: 379.99, productCat: 'Headphones', imgUrl: tp3, review: 5 },
        { title: 'Pixel Buds A-Series', price: 99.99, productCat: 'Bluetooth', imgUrl: tp1, review: 3 },
        { title: 'Fire HD 10 Tablet', price: 149.99, productCat: 'Gadget', imgUrl: tp2, review: 4 },
        { title: 'Bose SoundLink', price: 129.95, productCat: 'Speaker', imgUrl: tp3, review: 4 },
        { title: 'Anker Soundcore', price: 59.99, productCat: 'Portable Audio', imgUrl: tp1, review: 4 },
        { title: 'Logitech Webcam C920', price: 79.99, productCat: 'Accessories', imgUrl: tp2, review: 5 },
        { title: 'Samsung Tab S7', price: 649.99, productCat: 'Tablet', imgUrl: tp3, review: 5 },
    ];
    

    const featuredProducts = [
        { title: 'Airpods', price: 2423, productCat: 'Bluetooth', imgUrl: tp1, review: 0 },
        { title: 'Headphone', price: 65.23, productCat: 'Bluetooth', imgUrl: tp2, review: 0 },
        { title: 'Smart Speaker', price: 150, productCat: 'Audio', imgUrl: tp2, review: 4 },
        { title: 'Tablet Pro', price: 500, productCat: 'Gadget', imgUrl: tp3, review: 5 },
        { title: 'Sony WH-1000XM5', price: 379.99, productCat: 'Headphones', imgUrl: tp3, review: 5 },
    { title: 'Pixel Buds A-Series', price: 99.99, productCat: 'Bluetooth', imgUrl: tp1, review: 3 },
    { title: 'Fire HD 10 Tablet', price: 149.99, productCat: 'Gadget', imgUrl: tp2, review: 4 },
    { title: 'Bose SoundLink', price: 129.95, productCat: 'Speaker', imgUrl: tp3, review: 4 },
    
    ];

    const topSellerProducts = [
        { title: 'Airpods', price: 2423, productCat: 'Bluetooth', imgUrl: tp1, review: 0 },
        { title: 'Headphone', price: 65.23, productCat: 'Bluetooth', imgUrl: tp2, review: 0 },
        { title: 'Logitech Webcam C920', price: 79.99, productCat: 'Accessories', imgUrl: tp2, review: 5 },
        { title: 'Samsung Tab S7', price: 649.99, productCat: 'Tablet', imgUrl: tp3, review: 5 },    
        { title: 'Roku Smart TV', price: 780.00, productCat: 'Android', imgUrl: tp3, review: 5 },
        { title: 'Wireless Mouse', price: 25.50, productCat: 'Accessories', imgUrl: tp1, review: 3 },
    ];

    const renderProductGrid = (products) => (
        <div className="row">
            {products.map((item, i) => (
                <div key={i} className="col-md-3 col-sm-6 col-12 mb-4">
                    <ProductCard productItem={item} />
                </div>
            ))}
        </div>
    );

    return (
        <section className="popular-products-section py-5">
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
                            <button className="nav-link" id="pills-TopSellers-tab" data-bs-toggle="pill" data-bs-target="#pills-TopSellers" type="button" role="tab" aria-controls="pills-TopSellers" aria-selected="false">Top Sellers</button>
                        </li>
                    </ul>
                </div>
                <div className="popular-products-section-content">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-New" role="tabpanel" aria-labelledby="pills-New-tab">
                            {renderProductGrid(newProducts)}
                        </div>
                        <div className="tab-pane fade" id="pills-Featured" role="tabpanel" aria-labelledby="pills-Featured-tab">
                            {renderProductGrid(featuredProducts)}
                        </div>
                        <div className="tab-pane fade" id="pills-TopSellers" role="tabpanel" aria-labelledby="pills-TopSellers-tab">
                            {renderProductGrid(topSellerProducts)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
