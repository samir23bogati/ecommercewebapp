import "./BannerSection.css";
import Slider from "react-slick";
import slide1 from "./../assets/images/slider3.png";
import slide2 from "./../assets/images/slider-2.png";
import slide3 from "./../assets/images/slider-1.png";

export default function BannerSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    const slides = [
        {
            id: 1,
            title: "THE UPCOMING BEST E-MART IN  KTM",
            price: "NRS 99.99",
            offer: "20%",
            imgSrc: slide2,
            imgAlt: "Notepad Collection",
        },
        {
            id: 2,
            title: "YOUR ONE-STOP SHOP, WHERE KATHMANDU SHOPS LIKE A PRO",
            price: "NRS  99.99",
            offer: "20%",
            imgSrc: slide1,
            imgAlt: "Mobile Collection",
        },
        {
            id: 3,
            title: "SHOP SMARTER, NOT HARDER – ONLY AT THE BEST E-MART IN KATHMANDU",
            price: "NRS 99.99",
            offer: "23%",
            imgSrc: slide3,
            imgAlt: "Smart Watch Collection",
        },
    ];

    return (
        <section className="banner-section">
            <div className="container">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div className="item" key={slide.id}>
                            <div className="banner-slide-item">
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <h4>
                                            STARTING AT <span>{slide.price}</span>
                                        </h4>
                                        <h3>{slide.title}</h3>
                                        <p>
                                            Exclusive offer <span>{slide.offer}</span> for limited time.
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <img src={slide.imgSrc} alt={slide.imgAlt} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
