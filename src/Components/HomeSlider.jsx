import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HomeSlider = () => {
  return (
    <>
      {/* home page slider */}
      <OwlCarousel
        items={1}
        loop
        autoplay
        className="homepage-slider owl-theme"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* single home slider */}
        <div className="single-homepage-slider homepage-bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                <div className="hero-text">
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Fresh &amp; Organic</p>
                    <h1>Delicious Seasonal Fruits</h1>
                    <div className="hero-btns">
                      <a href="shop.html" className="boxed-btn">
                        Fruit Collection
                      </a>
                      <a href="contact.html" className="bordered-btn">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single home slider */}
        <div className="single-homepage-slider homepage-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <div className="hero-text">
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Fresh Everyday</p>
                    <h1>100% Organic Collection</h1>
                    <div className="hero-btns">
                      <a href="shop.html" className="boxed-btn">
                        Visit Shop
                      </a>
                      <a href="contact.html" className="bordered-btn">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single home slider */}
        <div className="single-homepage-slider homepage-bg-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-right">
                <div className="hero-text">
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Mega Sale Going On!</p>
                    <h1>Get December Discount</h1>
                    <div className="hero-btns">
                      <a href="shop.html" className="boxed-btn">
                        Visit Shop
                      </a>
                      <a href="contact.html" className="bordered-btn">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      {/* end home page slider */}
    </>
  );
};

export default HomeSlider;
