import React, { Component } from 'react';

import ImageOne from '../../static/images/portfolio/mixed/1.jpg';
import ImageTwo from '../../static/images/portfolio/mixed/2.jpg';
import ImageThree from '../../static/images/portfolio/mixed/3.jpg';
import ImageFour from '../../static/images/portfolio/mixed/4.jpg';

export default class PortfolioContainer extends Component {
  render() {
    return (
      <section className="container-fluid page-section clearfix">
        <div id="section-portfolio" class="page-section">
          <h2 class="bottommargin">Portfolio.</h2>

          <div
            id="portfolio"
            class="portfolio grid-container portfolio-nomargin portfolio-full portfolio-3 portfolio-masonry mixed-masonry clearfix"
          >
            <article class="portfolio-item pf-media pf-icons wide">
              <div class="portfolio-image imagescale">
                <a href="/">
                  <img src={ImageOne} alt="Open Imagination" />
                </a>
                <div
                  class="i-overlay on-hover"
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <a href="/">
                    <i class="icon-line-plus"></i>
                  </a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3>
                  <a href="/">Open Imagination</a>
                </h3>
                <span>
                  <a href="/">Media</a>, <a href="/">Icons</a>
                </span>
              </div>
            </article>

            <article class="portfolio-item pf-illustrations">
              <div class="portfolio-image imagescale">
                <a href="/">
                  <img src={ImageTwo} alt="Locked Steel Gate" />
                </a>
                <div
                  class="i-overlay on-hover"
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <a href="/">
                    <i class="icon-line-plus"></i>
                  </a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3>
                  <a href="/">Locked Steel Gate</a>
                </h3>
                <span>
                  <a href="/">Illustrations</a>
                </span>
              </div>
            </article>

            <article class="portfolio-item pf-graphics pf-uielements">
              <div class="portfolio-image imagescale">
                <a href="/">
                  <img src={ImageThree} alt="Mac Sunglasses" />
                </a>
                <div
                  class="i-overlay on-hover"
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <a href="/">
                    <i class="icon-line-plus"></i>
                  </a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3>
                  <a href="/">Mac Sunglasses</a>
                </h3>
                <span>
                  <a href="/">Graphics</a>, <a href="/">UI Elements</a>
                </span>
              </div>
            </article>

            <article class="portfolio-item pf-media pf-icons wide">
              <div class="portfolio-image imagescale">
                <a href="/">
                  <img src={ImageFour} alt="Open Imagination" />
                </a>
                <div
                  class="i-overlay on-hover"
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <a href="/">
                    <i class="icon-line-stack-2"></i>
                  </a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3>
                  <a href="/">Open Imagination</a>
                </h3>
                <span>
                  <a href="/">Media</a>, <a href="/">Icons</a>
                </span>
              </div>
            </article>

            <article class="portfolio-item pf-uielements pf-icons">
              <div class="portfolio-image imagescale">
                <a href="/">
                  <img src={ImageOne} alt="Backpack Contents" />
                </a>
                <div
                  class="i-overlay on-hover"
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <a href="/">
                    <i class="icon-line-play"></i>
                  </a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3>
                  <a href="/">The Orange Bag</a>
                </h3>
                <span>
                  <a href="/">Illustrations</a>
                </span>
              </div>
            </article>

            <article class="portfolio-item pf-media pf-icons">
              <div class="portfolio-image imagescale">
                <a href="/">
                  <img src={ImageFour} alt="Open Imagination" />
                </a>
                <div
                  class="i-overlay on-hover"
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <a href="/">
                    <i class="icon-line-plus"></i>
                  </a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3>
                  <a href="/">Open Imagination</a>
                </h3>
                <span>
                  <a href="/">Media</a>, <a href="/">Icons</a>
                </span>
              </div>
            </article>

            <article class="portfolio-item pf-uielements pf-icons">
              <div class="portfolio-image imagescale">
                <a href="/">
                  <img src={ImageTwo} alt="Backpack Contents" />
                </a>
                <div
                  class="i-overlay on-hover"
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <a href="/">
                    <i class="icon-line-play"></i>
                  </a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3>
                  <a href="/">Backpack Contents</a>
                </h3>
                <span>
                  <a href="/">UI Elements</a>, <a href="/">Icons</a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div class="line topmargin-lg bottommargin-lg"></div>
      </section>
    );
  }
}
