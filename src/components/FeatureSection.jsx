import "./FeatureSection.css";

export default function FeatureSection() {
    const featureSectionList = [
        {
            title: 'Free Delivery',
            subTitle: "Orders from all items",
            icon: 'truck'
        },
        {
            title: 'Return & Refund',
            subTitle: "Money-back guarantee",
            icon: 'sack-dollar'
        },
        {
            title: 'Member Discount',
            subTitle: "Every order over $140.00",
            icon: 'sack-dollar'
        },
        {
            title: 'Customer Support',
            subTitle: "Contact us 24 hours a day",
            icon: 'headset'
        },
    ];

    return (
        <section className="feature-section">
            <div className="container">
                <div className="row">
                    {featureSectionList.map((item, i) => (
                        <div key={i} className="col-sm-6 col-12">
                            <div className="features-section-item">
                                <span>
                                    <i className={`fa-solid fa-${item.icon}`}></i>
                                </span>
                                <span>
                                    <h4>{item.title}</h4>
                                    <p>{item.subTitle}</p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
