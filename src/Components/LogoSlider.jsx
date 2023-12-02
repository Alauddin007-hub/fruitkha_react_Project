import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LogoSlider = () => {
  return (
    <>
       {/* logo carousel */}
<div className="logo-carousel-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <OwlCarousel items={4} loop autoPlay className="logo-carousel-inner owl-theme">
          <div className="single-logo-item">
            <img src="assets/img/company-logos/1.png" alt />
          </div>
          <div className="single-logo-item">
            <img src="assets/img/company-logos/2.png" alt />
          </div>
          <div className="single-logo-item">
            <img src="assets/img/company-logos/3.png" alt />
          </div>
          <div className="single-logo-item">
            <img src="assets/img/company-logos/4.png" alt />
          </div>
          <div className="single-logo-item">
            <img src="assets/img/company-logos/5.png" alt />
          </div>
        </OwlCarousel>
      </div>
    </div>
  </div>
</div>
{/* end logo carousel */}
  
    </>
  )
}

export default LogoSlider