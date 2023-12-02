import React from 'react'

const LatestNews = () => {
  return (
    <>
        {/* latest news */}
<div className="latest-news pt-150 pb-150">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="section-title">	
          <h3><span className="orange-text">Our</span> News</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-latest-news">
          <a href="single-news.html"><div className="latest-news-bg news-bg-1" /></a>
          <div className="news-text-box">
            <h3><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></h3>
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
            <a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-latest-news">
          <a href="single-news.html"><div className="latest-news-bg news-bg-2" /></a>
          <div className="news-text-box">
            <h3><a href="single-news.html">A man's worth has its season, like tomato.</a></h3>
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
            <a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
        <div className="single-latest-news">
          <a href="single-news.html"><div className="latest-news-bg news-bg-3" /></a>
          <div className="news-text-box">
            <h3><a href="single-news.html">Good thoughts bear good fresh juicy fruit.</a></h3>
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
            <a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 text-center">
        <a href="news.html" className="boxed-btn">More News</a>
      </div>
    </div>
  </div>
</div>
{/* end latest news */}

    </>
  )
}

export default LatestNews