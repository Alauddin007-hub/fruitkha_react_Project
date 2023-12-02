import React from 'react'

const AboutTeam = () => {
  return (
    <>
        {/* team section */}
<div className="mt-150">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="section-title">
          <h3>Our <span className="orange-text">Team</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-team-item">
          <div className="team-bg team-bg-1" />
          <h4>Jimmy Doe <span>Farmer</span></h4>
          <ul className="social-link-team">
            <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-team-item">
          <div className="team-bg team-bg-2" />
          <h4>Marry Doe <span>Farmer</span></h4>
          <ul className="social-link-team">
            <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
        <div className="single-team-item">
          <div className="team-bg team-bg-3" />
          <h4>Simon Joe <span>Farmer</span></h4>
          <ul className="social-link-team">
            <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end team section */}

    </>
  )
}

export default AboutTeam