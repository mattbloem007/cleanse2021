import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';
import Five from '../components/mailingForm'

import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';
import pic04 from '../assets/images/bg-cta.jpg'


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-5 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Group Cleanse with ixCacao
              </h1>
              <p>
              Two weeks of gentle healing
              Bringing deep harmony within and attaining greater spiritual heights without
              </p>
                <a target="_blank" href="https://shop.alchemyremember.me/product/group-cleanse-2020/" className="btn btn-outline btn-xl">
                  Join the Cleanse
                </a>
            </div>
          </div>
          <div className="col-lg-7 my-auto">
          <h1 className="section-heading">
            28 January - 11 February 2021
          </h1>                  </div>
                </div>
              </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              TOGETHER is BETTER.
            </h2>
            <p>
            Whole heartedly inviting You. From beginners to advanced, this group cleanse is made
              for All of us.
              A cleanse can be gentle, fun, and enlightening. Through the two weeks, we will support
              each other as we slowly reduce our food intake while increasing healing Liquids
              that wash clean and rejuvenate.
              As a "tribe", we can move together into the deeper layers of a Cleanse.
              The deeper we go, the better off we will be in the months to come.
            </p>
            <br/>
            <p>
            ixCacao is both a superfood and a Hand Maiden who will support us during the cleanse.
                With just the right amount, cacao gently opens up our detoxification pathways
                We are also mentally and emotionally supported by the Love medicine of ixCacao
                that brings a sense of peace while going through the natural ebbs and flows of a cleanse.
            </p>
            {/**<div className="badges">
              <a className="badge-link" href="/#">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/#">
                <img src={astore} alt="" />
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Cleanse Outline</h2>
          <p className="text-muted">
            Slowly, gently entering into a deep cleanse
          </p>
          <hr />
        </div>
        <div className="row">
        <div className="col-lg-4 my-auto">
          <img src={demo1} className="img-fluid" alt="" />
        </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Week One Guidelines</h3>
                    <p className="text-muted">
                    All liquids throughout the day with one meal for either lunch or dinner.
        This meal is best to contain lots of vegetables raw and/or cooked.
        Focus on getting different colours in the meal and good sources of fiber.
        It is best to refrain from dairy and meat.
        Eggs are ok as long as they are free range.
        Slowly reduce the intake of eggs as the cleanse progresses.
        Liquids can be juices, teas, smoothies and soups.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Week Two Guidelines</h3>
                    <p className="text-muted">
                    All liquids throughout the day.  Liquids can be juices, teas, smoothies and soups.
                    Slowly reduce the fiber intake by having more water, teas and juices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h1>Here's Whats Inculded</h1>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Group Chats</h3>
                    <p className="text-muted">
                      Feel supported and motivated with all those doing the cleanse in our Telegram group chat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Three Live Zoom Calls</h3>
                    <p className="text-muted">
                      A call once a week is available to gather as a "tribe" for support and sharing.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Informational PDF Guide</h3>
                    <p className="text-muted">
                      Receive the guidelines for the 2 week cleanse in written form for easy viewing.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>A Detox Bundle (Optional)</h3>
                    <p className="text-muted">
                    Supplement bundle specifically designed to efficiently cleanse the system and
                    strengthen your immunity to all diseases. (Milk Thistle, Turmeric, Glutathione, Sulforaphane)
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">

          <p>
            One of the known truths that has stood the test of time throughout many religions is the
            practice of fasting to cleanse the mind, body and spirit and gain a closer connection to the
            Divine. There are many different variations of a fast but essentially it is about choosing to
            let go of habits that do not serve you any longer. The cleanse is about focusing on harmony
            on a physical, emotional, mental and spiritual level. Harmony is the key here.
          </p>
          <p>
            We are inevitably exposed to toxins and chemicals that keep rising in numbers.
            These play as an obstacle to the Divine spark that wants to flow naturally within us.
            Our energy levels can drop over time and some of us are fighting on and off sicknesses in
            many different forms. A cleanse is a natural journey that all life goes through, a death and
            a rebirth... A renewal.
          </p>
          <p>
            A classical fast or a quick 3 day cleanse is not a sustainable or a fun journey.
            It can be harsh on the body and our mental state. With two weeks, we can give our bodies
            time to really unravel and renew. The cleanse is designed to sustainably ease us into a process
            of limiting our intake of food and effectively ridding the body of all obstructions so that we
            can have more energy.
          </p>
          <p>
            A healthy, clean body is capable of sustaining more energy, giving us more time in a day to do
            what we need to do. Most of our energy is spent digesting food, when we slowly use less energy
            towards digesting, the body can use this energy to clean and HEAL.
            This allows us to reconnect to the truth of who we Are.
            A cleanse is a tool for Remembrance.
          </p>

        </div>
      </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
          <h2>
            Who Am I?
          </h2>
          <p style={{ color: 'white' }}>
          My name is Matthew Bloemetje. We were designed to be extraordinary
          and I am just a regular human being on the path of becoming an extraordinary being.
          I am a graduated, yet ever learning Sangoma and Cacao Kuchina.
          </p>
          <br />
          <p style={{ color: 'white' }}>
          My ancestral name is Gabriel.
          As a facilitator, I have been blessed to unlock the ancient knowledge about nutrition and body-work healing.
          I have a complex understanding about the inner and outer workings of the body and brain and how to best optimize their functioning.
          </p>
            <a target="_blank" href="https://shop.alchemyremember.me/product/group-cleanse-2020/" className="btn btn-outline btn-xl">
              Join the Course
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <Five/>
      {/**<h2>
        We
        <i className="fas fa-heart"></i>
        new friends!
      </h2>
      <Social />*/}
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
