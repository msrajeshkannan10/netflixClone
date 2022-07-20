// import background from "../images/background.png"
import logo from "../images/logo.png";
import React, { useState } from "react";
import child from "../images/child-2.png";
import mobile from "../images/mobile.jpg";
import devices from "../images/devices.png";
import kids from "../images/kidsValueProp.png";
import Accordin from "./accordin";
export default function Welcome() {
  const [show, Setshow] = useState(false);
  const accordinData = [
    {
      title: "What is Netflix?",
      content: `  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
      You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
  `,
    },
    {
      title: " How much does Netflix cost?",
      content: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts  `,
    },
    {
      title: "Where can I watch?",
      content: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      
      You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      title: "How do I cancel?",
      content: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      title: "What can I watch on Netflix?",
      content: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
  ];
  const { title, content } = accordinData;
  return (
    <div className="home">
      <div className="whole">
        <div class="img-gradient">
          <div className="nav_container">
            <div className="logo">
              <img src={logo} alt="netflix-logo" />
            </div>
            <div className="nav-btn">
              <div className="select-btn-1">
                <select>
                  <i class="material-icons">language</i>
                  <option value="">English</option>
                  <option value="">Tamil</option>
                  <option value="">French</option>
                  <option>Chinese</option>
                </select>
              </div>
              <button>Sign In</button>
            </div>
          </div>
          <div class="content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <input
              type="text"
              id="Email"
              name="Email"
              placeholder="Email Address"
            />
            <button className="start-btn">
              Get Started <i class="material-icons">arrow_forward_ios</i>
            </button>
          </div>
        </div>
      </div>
      <div className="content-2">
        <div className="child-1">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="child-2">
          <img src={child} alt="" />
          <div class="card-animation card-animation-1">
            <video className="card-animation-video" autoPlay={true} muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" />
            </video>
          </div>
        </div>
      </div>
      <div className="content-2 content-media">
        <div className="child-2">
          <img src={mobile} alt="" />
          <div class="download-card-animator">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
            />
            <div class="download-text">Downloading...</div>
          </div>
        </div>
        <div className="child-1">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
      <div className="content-2">
        <div className="child-1">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="child-2">
          <img src={devices} alt="" />
          <div class="card-animation">
            <video autoPlay={true} muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" />
            </video>
          </div>
        </div>
      </div>
      <div className="content-2 content-media">
        <div className="child-2">
          <img src={kids} alt="" />
        </div>
        <div className="child-1">
          <h1>Create profiles for children.</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <div className="content-2">
        <div className="content-3">
          <h1>Frequently Asked Questions</h1>
          <div className="accordin">
            {accordinData.map(({ title, content }) => (
              <Accordin title={title} content={content} />
            ))}
          </div>
          <div class="sigin-2">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div class="sigin-btn">
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="Email Address"
              />
              <button className="start-btn">
                Get Started <i class="material-icons">arrow_forward_ios</i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content-4">
        <div class="footer-content">
          <h5 style={{ color: "grey" }}>Questions? Call 000-800-040-1843</h5>

          <div class="footer_content-1">
            <ul className="list">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Media Centre</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
          </div>
          <div class="footer-content-bottom">
            <div class="select-btn">
              <select>
                <option value="">English</option>
                <option value="">Tamil</option>
                <option value="">French</option>
                <option>Chinese</option>
              </select>
            </div>
            <p>Netflix India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
