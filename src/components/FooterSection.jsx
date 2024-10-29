import "./FooterSection.css";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.jpg";

export default function FooterSection() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-12">
                        <div className="footer-content">
                            <img src={logo} alt="sale24/7" />
                            <p>Aspiring Full Stack Developer | Computer Engineer       | Passionate about creating innovative mobile apps and websites. Fueled by curiosity and a desire to build solutions for the future.</p>
                            <ul className="footer-social-link">
                                <li>
                                    <a href="https://www.facebook.com/Snookysamir/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/sami88094" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/samir-bogati-62bb04165/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/samirbogati/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@samirbogati4451" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8 col-12">
                        <div className="row">
                            <div className="col-sm-4 col-12">
                                <div className="footer-content">
                                    <h4>My Account</h4>
                                    <ul>
                                        <li><Link to="#">Track Orders</Link></li>
                                        <li><Link to="#">Shipping</Link></li>
                                        <li><Link to="#">Wishlist</Link></li>
                                        <li><Link to="#">My Account</Link></li>
                                        <li><Link to="#">Order History</Link></li>
                                        <li><Link to="#">Returns</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-12">
                                <div className="footer-content">
                                    <h4>Customer Service</h4>
                                    <ul>
                                        <li><Link to="#">Help Center</Link></li>
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="#">Size Guide</Link></li>
                                        <li><Link to="#">Shipping Info</Link></li>
                                        <li><Link to="#">Return Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-12">
                                <div className="footer-content">
                                    <h4>Information</h4>
                                    <ul>
                                        <li><Link to="#">About Us</Link></li>
                                        <li><Link to="#">Careers</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Terms & Conditions</Link></li>
                                        <li><Link to="#">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© {new Date().getFullYear()} - All Rights Reserved || @samirbogati</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
