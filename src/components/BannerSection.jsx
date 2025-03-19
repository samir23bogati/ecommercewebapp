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
            title: "The Upcoming Best E-Mart In KTM",
            price: "$555",
            offer: "35%",
            imgSrc: slide2,
            imgAlt: "Notepad Collection",
        },
        {
            id: 2,
            title: "Your one-stop shop, where Kathmandu shops like a Pro",
            price: "$400",
            offer: "50%",
            imgSrc: slide1,
            imgAlt: "Mobile Collection",
        },
        {
            id: 3,
            title: "Shop smarter, not harder – only at the best e-mart in Kathmandu",
            price: "$999",
            offer: "50%",
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
                                            Starting at <span>{slide.price}</span>
                                        </h4>
                                        <h3>{slide.title}</h3>
                                        <p>
                                            Exclusive offer <span>{slide.offer}</span> for limited time
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
