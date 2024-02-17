import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Portfolio Page</title>
          <meta property="og:title" content="Portfolio Page" />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <span className="Card-Heading home-heading">Logo</span>
            <div className="home-links-container">
              <span className="home-link Navbar-Link">About you</span>
              <Link href="/">
                <a className="home-link02 Navbar-Link">Design projects</a>
              </Link>
              <span className="home-link03 Navbar-Link">UX</span>
              <span className="Navbar-Link">Contact</span>
            </div>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-container01">
                <span className="Card-Heading home-heading1">Logo</span>
                <div data-role="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container1">
                <span className="home-link05 Navbar-Link">About</span>
                <span className="home-link06 Navbar-Link">Experience</span>
                <span className="home-link07 Navbar-Link">Portofolio</span>
                <span className="Navbar-Link">Contact</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator"></div>
        <div className="home-section-separator1"></div>
        <div className="home-container02">
          <div className="home-hero">
            <div className="home-hero-text-container">
              <h1 className="home-heading2">
                <br></br>
                <span>&quot;Hello there,</span>
                <br></br>
                <span>I’m a UX designer…&quot;</span>
                <br></br>
              </h1>
              <div className="home-cta-btn-container"></div>
            </div>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="home-image"
            />
          </div>
        </div>
        <div className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text05">
              <span className="home-text06">
                This is what I can help you with
              </span>
              <span>…</span>
            </h2>
          </div>
          <div className="home-cards-container">
            <div className="home-card">
              <div className="home-icon-container">
                <img
                  alt="image"
                  src="/assets/wireframes-200h.png"
                  className="home-image1"
                />
              </div>
              <div className="home-content-container">
                <span className="home-heading3 Card-Heading">UX Design</span>
                <span className="home-text08">
                  Produce products that offer users rich, relevant experiences
                  in aspects of branding, design, usability, and function.
                </span>
              </div>
            </div>
            <div className="home-card1">
              <div className="home-icon-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M832 512q28 0 46-18t18-46-18-46-46-18-46 18-18 46 18 46 46 18zM662 640q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM470 554v-84h-128v-128h-86v128h-128v84h128v128h86v-128h128zM896 256q34 0 60 26t26 60v340q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-340q0-34 26-60t60-26h768z"></path>
                </svg>
              </div>
              <div className="home-content-container1">
                <span className="home-heading4 Card-Heading">
                  Interactive Design 
                </span>
                <span className="home-text09">
                  Designs that are cutting edge and emphasise meaningful
                  communication while maintaining a sense of humour.
                </span>
              </div>
            </div>
            <div className="home-card2">
              <div className="home-icon-container2">
                <img
                  alt="image"
                  src="/assets/graphic%20design%20icon%203-200h.png"
                  className="home-image2"
                />
              </div>
              <div className="home-content-container2">
                <span className="home-heading5 Card-Heading">
                  Graphic Design
                </span>
                <span className="home-text10">
                  Designs that effectively express ideas or messages through the
                  use of text and images.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-heading-container1">
            <h1 className="home-text11 Section-Heading">Case Studies</h1>
            <span className="home-text12 Section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="home-pricing-card-container">
            <div className="home-card3">
              <div className="home-card-heading">
                <span className="home-type Anchor">Minimal</span>
                <span className="Section-Heading">Olive Health</span>
              </div>
              <div className="home-card-content">
                <div className="home-feature">
                  <span className="Card-Text">Feature one</span>
                  <span className="home-limit Card-Text">TBD</span>
                </div>
                <div className="home-feature1">
                  <span className="Card-Text">Feature two</span>
                  <span className="home-limit1 Card-Text">TBD</span>
                </div>
                <div className="home-feature2">
                  <span className="Card-Text">Feature three</span>
                  <span className="home-limit2 Card-Text">UNLIMITED</span>
                </div>
                <div className="home-feature3">
                  <span className="Card-Text">Feature four</span>
                  <span className="home-limit3 Card-Text">UNLIMITED</span>
                </div>
                <button className="home-choose button Anchor">CHOOSE</button>
              </div>
            </div>
            <div className="home-card4">
              <div className="home-card-heading1">
                <span className="home-type1 Anchor">medium</span>
                <span className="home-price1 Card-Text">Vocab App</span>
              </div>
              <div className="home-card-content1">
                <div className="home-container03">
                  <span className="Card-Text">Feature one</span>
                  <span className="home-text14 Card-Text">TBD</span>
                </div>
                <div className="home-container04">
                  <span className="Card-Text">Feature two</span>
                  <span className="home-text16 Card-Text">TBD</span>
                </div>
                <div className="home-container05">
                  <span className="Card-Text">Feature three</span>
                  <span className="home-text18 Card-Text">UNLIMITED</span>
                </div>
                <div className="home-container06">
                  <span className="Card-Text">Feature four</span>
                  <span className="home-text20 Card-Text">UNLIMITED</span>
                </div>
                <button className="home-button Anchor button">CHOOSE</button>
              </div>
            </div>
            <div className="home-card5">
              <div className="home-card-heading2">
                <span className="home-type2 Anchor">Premium</span>
                <span className="Section-Heading">Professional</span>
              </div>
              <div className="home-card-content2">
                <div className="home-container07">
                  <span className="Card-Text">Feature one</span>
                  <span className="home-text22 Card-Text">TBD</span>
                </div>
                <div className="home-container08">
                  <span className="Card-Text">Feature two</span>
                  <span className="home-text24 Card-Text">TBD</span>
                </div>
                <div className="home-container09">
                  <span className="Card-Text">Feature three</span>
                  <span className="home-text26 Card-Text">UNLIMITED</span>
                </div>
                <div className="home-container10">
                  <span className="Card-Text">Feature four</span>
                  <span className="home-text28 Card-Text">UNLIMITED</span>
                </div>
                <button className="home-button1 Anchor button">CHOOSE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div className="home-section-separator3"></div>
        <div className="home-faqs">
          <h2 className="home-text29 Section-Heading">
            Check the most common questions
          </h2>
          <div className="home-content-container3">
            <div className="home-faq">
              <div className="home-question-container">
                <span className="home-question">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="home-answer-container">
                <span className="home-answer Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet. Here you would give the
                  answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Integer nec odio. Praesent libero. Sed cursus ante
                  dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum
                  imperdiet.
                </span>
                <span className="Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-faq1">
              <div className="home-question-container1">
                <span className="home-question1">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="home-answer-container1">
                <span className="home-answer2 Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
                <span className="Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero.
                </span>
              </div>
            </div>
            <div className="home-faq2">
              <div className="home-question-container2">
                <span className="home-question2">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="home-answer-container2">
                <span className="home-answer4 Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
                <span className="Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator4"></div>
        <div className="home-subscribe">
          <img
            alt="image"
            src="/assets/default-img.svg"
            className="home-image3"
          />
          <div className="home-container11">
            <div className="home-heading-container2">
              <h1 className="home-text30 Section-Heading">Favourite Quote</h1>
              <span className="home-text31">
                <span>
                  “Two of the most important characteristics of good design are
                  discoverability and understanding.”
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="Section-Text"></br>
                <span>― Donald A. Norman, The Design of Everyday Things</span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-section-separator5"></div>
        <div className="home-footer-container">
          <div className="home-footer">
            <div className="home-social-links">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="home-copyright-container">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="Anchor">Copyright, 2024</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .home-link02 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link03 {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .home-burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon {
            width: 36px;
            height: 36px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-tripleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tenunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            background-color: #f1f1f1;
          }
          .home-hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            color: rgb(4, 4, 4);
            font-size: 70px;
            font-family: 'Arial';
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-cta-btn-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image {
            width: 40%;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text05 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text06 {
            font-size: 32px;
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-image1 {
            width: 160px;
            object-fit: cover;
          }
          .home-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text08 {
            text-align: center;
          }
          .home-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon04 {
            width: 160;
            height: auto;
          }
          .home-content-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading4 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text09 {
            text-align: center;
          }
          .home-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-image2 {
            width: 160px;
            object-fit: cover;
          }
          .home-content-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading5 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text10 {
            text-align: center;
          }
          .home-pricing {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text11 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text12 {
            text-align: center;
          }
          .home-pricing-card-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card3 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-card-content {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-feature {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-limit {
            color: var(--dl-color-gray-700);
          }
          .home-feature1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-limit1 {
            color: var(--dl-color-gray-700);
          }
          .home-feature2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-limit2 {
            color: var(--dl-color-gray-700);
          }
          .home-feature3 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-limit3 {
            color: var(--dl-color-gray-700);
          }
          .home-choose {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-card4 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-price1 {
            color: var(--dl-color-gray-black);
            font-size: 48px;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
            font-family: 'Overpass';
            font-weight: 900;
            line-height: 1.22;
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-card-content1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-container03 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text14 {
            color: var(--dl-color-gray-700);
          }
          .home-container04 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text16 {
            color: var(--dl-color-gray-700);
          }
          .home-container05 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text18 {
            color: var(--dl-color-gray-700);
          }
          .home-container06 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text20 {
            color: var(--dl-color-gray-700);
          }
          .home-button {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-card5 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-card-content2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-container07 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text22 {
            color: var(--dl-color-gray-700);
          }
          .home-container08 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text24 {
            color: var(--dl-color-gray-700);
          }
          .home-container09 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text26 {
            color: var(--dl-color-gray-700);
          }
          .home-container10 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text28 {
            color: var(--dl-color-gray-700);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-faqs {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-text29 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-content-container3 {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-faq {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .home-answer-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-faq1 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container1 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question1 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .home-answer-container1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-faq2 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container2 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question2 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .home-answer-container2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-subscribe {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image3 {
            width: 50%;
            object-fit: cover;
          }
          .home-container11 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-heading-container2 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text30 {
            align-self: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text31 {
            align-self: center;
          }
          .home-section-separator5 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon06 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon08 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
          }
          .home-copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .home-heading {
              text-align: center;
            }
            .home-heading1 {
              text-align: center;
            }
            .home-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading2 {
              text-align: center;
            }
            .home-image {
              width: 100%;
            }
            .home-text05 {
              text-align: center;
            }
            .home-pricing-card-container {
              justify-content: center;
            }
            .home-card3 {
              margin-right: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-card4 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              position: relative;
            }
            .home-links-container {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading-container1 {
              width: 100%;
            }
            .home-card3 {
              margin-right: 0px;
            }
            .home-content-container3 {
              width: 100%;
              flex-direction: column;
            }
            .home-faq {
              width: 100%;
            }
            .home-faq1 {
              width: 100%;
            }
            .home-faq2 {
              width: 100%;
            }
            .home-subscribe {
              flex-direction: column;
            }
            .home-image3 {
              width: 70%;
            }
            .home-container11 {
              width: 100%;
              align-items: center;
            }
            .home-heading-container2 {
              width: 100%;
            }
            .home-text30 {
              text-align: center;
            }
            .home-text31 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .home-burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .home-hero-text-container {
              width: 100%;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
            }
            .home-card2 {
              width: 100%;
            }
            .home-text11 {
              text-align: center;
            }
            .home-content-container3 {
              padding-left: 0px;
            }
            .home-image3 {
              width: 100%;
            }
            .home-container11 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
