import "./AdsSection.css";
import { Link } from "react-router-dom";
import ad1 from "./../assets/images/ad1.jpg";
import ad2 from "./../assets/images/ad2.jpg";

export default function AdsSection() {
    return (
        <section className="ads-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <div className="ads-left-section">
                            <div className="ads-product">
                                <div className="ads-product-content">
                                    <h4>Sale 20% off</h4>
                                    <h2>
                                        <Link to="#">
                                            <span>Smartphone</span>
                                            <span>Iphone2025</span>
                                        </Link>
                                    </h2>
                                    <Link to="#">
                                        <span>Shop Now</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="ads-product-thumbnail">
                                    <img src={ad1} alt="Ad 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="ads-right-section">
                            <div className="ads-product">
                                <div className="ads-product-content">
                                    <h4>Sale 50% off</h4>
                                    <h2>
                                        <Link to="#">
                                            <span>HyperX</span>
                                            <span>CloudII</span>
                                        </Link>
                                    </h2>
                                    <Link to="#">
                                        <span>Shop Now</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="ads-product-thumbnail ad2-thumbnail">
                                    <img src={ad2} alt="Ad 2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
