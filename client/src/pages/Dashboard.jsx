import React from 'react'
import SkillsScroller from './SkillsScroller';
import { Helmet } from 'react-helmet'
import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
// import '../styles/Dashboard.css';
import FeatureCard from '../components/feature-card';
import BlogPostCard1 from '../components/blog-post-card1';
import Question1 from '../components/question1';
import '../styles/home.css';

import Marquee from "react-fast-marquee";
import { skillsData } from './skillsData';
import { skillsImage } from './skillsImage';

const Home = (props) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('auth')) || '');
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});

  const fetchUserData = async () => {
    if (token === '') {
      return;
    }

    try {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get('http://localhost:3000/api/v1/dashboard', axiosConfig);
      // console.log("Inside frontend response.data");
      // setUserData(response.data);
      setProfileData(response.data);
      console.log("Hello");
      console.log(profileData);
      // console.log(profileData.name);
    } catch (error) {
      toast.error(error.message);
    }
    // console.log(userData);
  };

  useEffect(() => {
    fetchUserData();
    if (token === '') {
      navigate('/login');
      toast.warn('Please login first to access the dashboard');
    }
  }, [token]);  



    // const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        // backgroundColor: ,
        boxShadow: `0px 0px 30px red`
    }

  return (
    <div className="home-container">
      {/* <Helmet>
        <title>Metafiser</title>
        <meta property="og:title" content="Charming Humming Squid" />
      </Helmet> */}
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer home-navbar-interactive"
        >
          <span className="logo"><img src='https://metafiser.tech/wp-content/uploads/2023/07/cropped-metafiser.tech-logo-it-sol-300x72.png' /></span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span className="home-nav12 bodySmall">Profile</span>
              <span className="home-nav2 bodySmall">Skills</span>
              <span className="home-nav3 bodySmall">Certificates</span>
              <span className="home-nav4 bodySmall">Projects</span>
              <span className="home-nav5 bodySmall">Module Coverage</span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1 heroContainer">
          <h1 className="home-hero-heading heading1">{profileData.name}</h1>
          <img
            alt="image"
            src={profileData.profileURL}
            loading="eager"
            className="home-image"
          />
          <div className="home-container01">
            <div className="home-container02">
              <div className="home-container03">
                <span className="home-hero-sub-heading bodyLarge">
                  <span>
                    <span>
                      <span>{profileData.email}</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </span>
                <div className="home-btn-group"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container featuresContainer">
          <div className="home-features1">
            <div className="home-container04">
              {/* <h2 className="home-features-heading heading2">Skills</h2> */}
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    {/* <span>Enhance your profile with these key features</span> */}
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="skills-scroller-container">
              <h2 className="skills-heading">Skills</h2>
              <div className="skills-scroller">
                {profileData.skills && profileData.skills.map((skillItem, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-name">{skillItem.topic}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skillItem.percentage}%` }}
                      >
                        {skillItem.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="home-container05">
            {profileData.skills && profileData.skills.map((skill, idx) => (
              <div className="hello" key={idx}>
                <FeatureCard
                  heading={skill.topic}
                  subHeading={`${skill.percentage}%`}
                />
                <Box sx={{ width: 300 }}>
                  <span>{skill.percentage}</span>
                  <span>
                  <Slider hideThumb={true} disabled={true} defaultValue={skill.percentage} aria-label="Default" valueLabelDisplay="auto" />
                  </span>
                </Box>
              </div>
            ))}
          </div> */}

              {/* <FeatureCard
                heading="Skills"
                subHeading="Showcase your skills in rectangular boxes"
              ></FeatureCard>
              <FeatureCard
                heading="Skills"
                subHeading="Skills demo"
              ></FeatureCard>
              <FeatureCard
                heading="Skills "
                subHeading="Skills demo"
              ></FeatureCard>
              <FeatureCard
                heading="Skills"
                subHeading="Skills demo"
              ></FeatureCard> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1 pricingContainer">
          <div className="home-container06">
            <h2 className="heading2">Certificates</h2>
            {/* <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock amazing features with our flexible pricing options
                </span>
              </span>
            </span> */}
          </div>
          <div className="home-container07"></div>
          <div className="home-container08">
            <div className="home-blog">
              <div className="home-container09">
                <BlogPostCard1 rootClassName="rootClassName3"></BlogPostCard1>
              </div>
              <div className="home-container10">
                <BlogPostCard1
                  imageSrc="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName2"
                ></BlogPostCard1>
              </div>
              <div className="home-container11">
                <BlogPostCard1
                  imageSrc="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName1"
                  label="Metafiser"
                ></BlogPostCard1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner"></div>
      <div className="home-faq">
        <div className="faqContainer home-faq-container">
          <div className="home-faq1">
            <div className="home-container12">
              <h2 className="home-text30 heading2">Projects</h2>
            </div>
            <div className="home-container13">
              <Question1
                answer="Tech Used: NLP, Python, KAFKA"
                question="Project: Personalized Customer Experience Chatbot Development"
              ></Question1>
              <Question1
                answer="Tech Used: NLP, Python, Lanchain, OpenAI"
                question="Project: Intelligent Conversational Agent: Multi-Document Reader and Chatbot Integration with LangChain and ChatGPT"
                rootClassName="question1-root-class-name"
              ></Question1>
              <Question1
                answer="Tech Used: NLP, Python, KAFKA"
                question="Project: Real-Time Facial Emotion Recognition System"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container14"></div>
          <div className="home-separator"></div>
          <div className="home-features2">
            <div className="home-container15">
              <h2 className="home-features-heading1 heading2">TOOLS</h2>
            </div>
            <div className="home-container16">
              <img
                src="https://images.unsplash.com/photo-1707301454103-1384f7c535d8?ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTcwNzU3MDA3Nnw&amp;ixlib=rb-4.0.3&amp;h=600"
                alt="image"
                className="home-image1"
              />
            </div>
          </div>
        </footer>
      </div>
      <div id ="skills"className="skills">
            <div className="skillsHeader">
                <h2>Tools</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
      <Link to="/logout" className="logout-button">Logout</Link>
    </div>
    
//     <div className="home-container">
//       <Helmet>
//         <title>Presentation Page</title>
//         <meta property="og:title" content="Presentation Page" />
//       </Helmet>
//       <div data-role="Header" className="home-navbar-container">
//         <div className="home-navbar">
//           <div className="home-logo">
//             <a
//               href="https://certification.metafiser.tech/wp-content/uploads/2024/01/cropped-Colour-1-190x63.png"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="home-link"
//             >
//               <img alt="image" src="/default-img.svg" className="home-image" />
//             </a>
//           </div>
//           <div className="home-links-container">
//             <a href="#features" className="home-link1 Anchor">
//               Logout Page
//             </a>
//             <a href="#services" className="home-link2 Anchor">
//               Password Reset Page
//             </a>
//             <a href="#about-us" className="home-link3 Anchor">
//               Account Page
//             </a>
//             <span className="home-link4 Anchor">Member Page</span>
//           </div>
//           <div className="home-cta-container">
//             <button className="home-cta-btn button">Verification</button>
//             <div data-role="BurgerMenu" className="home-burger-menu">
//               <svg viewBox="0 0 1024 1024" className="home-icon">
//                 <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
//               </svg>
//             </div>
//           </div>
//           <div data-role="MobileMenu" className="home-mobile-menu">
//             <div className="home-top">
//               <img alt="image" src="/default-img.svg" className="home-image1" />
//               <div data-role="CloseMobileMenu" className="home-container1">
//                 <svg viewBox="0 0 1024 1024" className="home-icon02">
//                   <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
//                 </svg>
//               </div>
//             </div>
//             <div className="home-mid">
//               <div className="home-links-container1">
//                 <a href="#features" className="home-link5 Anchor">
//                   features
//                 </a>
//                 <a href="#services" className="home-link6 Anchor">
//                   services
//                 </a>
//                 <a href="#about-us" className="home-link7 Anchor">
//                   About Us
//                 </a>
//                 <span className="home-link8 Anchor">contact</span>
//               </div>
//               <button className="home-cta-btn1 Anchor button">
//                 START BUILDING
//               </button>
//             </div>
//             <div className="home-bot">
//               <div className="home-social-links-container">
//                 <svg
//                   viewBox="0 0 950.8571428571428 1024"
//                   className="home-icon04"
//                 >
//                   <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
//                 </svg>
//                 <svg
//                   viewBox="0 0 877.7142857142857 1024"
//                   className="home-icon06"
//                 >
//                   <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
//                 </svg>
//                 <svg
//                   viewBox="0 0 877.7142857142857 1024"
//                   className="home-icon08"
//                 >
//                   <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-hero">
//         <div className="home-hero-text-container">
//           <h1 className="home-heading">{profileData.name}</h1>
//           <span className="home-text">{profileData.email}</span>
//           <button className="home-cta-btn2 button Anchor">
//             START BUILDING
//           </button>
//         </div>
//         <img
//           alt="image"
//           src="https://images.unsplash.com/photo-1619314528204-59477dba78d2?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
//           className="home-image2"
//         />
//       </div>
//       <div className="home-section-separator"></div>
//       <div id="features" className="home-features">
//         <div className="home-heading-container">
//           <h2 className="home-text01 Section-Heading">CERTIFICATE</h2>
//           <span className="home-text02">Certificate Awarded to candidate</span>
//         </div>
//         <div className="home-cards-container">
//           <div className="home-feature-card">
//             <img
//               alt="image"
//               src="https://images.unsplash.com/photo-1619548683455-23b17c3ddc30?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
//               className="home-image3"
//             />
//             <span className="home-heading1">
//               <span className="Card-Heading">{profileData.aboutUs}</span>
//               <br></br>
//               <span>Certificate</span>
//               <br></br>
//             </span>
//           </div>
//           <div className="home-feature-card1">
//             <img
//               alt="image"
//               src="https://images.unsplash.com/photo-1619547871672-b6562e042c1e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
//               className="home-image4"
//             />
//             <span className="home-heading2">
//               <span className="Card-Heading">METAFISER</span>
//               <br></br>
//               <span>Certificate</span>
//               <br></br>
//             </span>
//           </div>
//           <div className="home-feature-card2">
//             <img
//               alt="image"
//               src="https://images.unsplash.com/photo-1619555241737-9c364cf1fbce?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
//               className="home-image5"
//             />
//             <span className="home-heading3 Card-Heading">PROJECT AWARD</span>
//           </div>
//         </div>
//       </div>
//       {/* <ul className="list">
//         <li className="list-item">
//           <span>Text</span>
//         </li>
//         <li className="list-item">
//           <span>Text</span>
//         </li>
//         <li className="list-item">
//           <span>Text</span>
//         </li>
//       </ul> */}

// <div className="home-container">
//       <Helmet>
//         {/* ... existing helmet content ... */}
//       </Helmet>
//       <div data-role="Header" className="home-navbar-container">
//         {/* ... existing navbar content ... */}
//       </div>
//       <div className="home-hero">
//         {/* ... existing hero content ... */}
//       </div>
      
//       {/* Add SkillsScroller component here */}
//       <SkillsScroller />

//       <div className="home-section-separator"></div>
//       <div id="features" className="home-features">
//         {/* ... existing features content ... */}
//       </div>
//       {/* ... rest of your Home component ... */}
//     </div>
  

//       {/* <div id="services" className="home-services">
//         <div className="home-service-card">
//           <div className="home-card-content">
//             <h3 className="home-text14 BigCard-Heading">Certificates</h3>
//             <span className="home-text15 Card-Text">
//               Certificates details
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: ' ',
//                 }}
//               />
//             </span>
//             <button className="home-button button Anchor">READ MORE</button>
//           </div>
//         </div>
//         <div className="home-service-card1">
//           <div className="home-card-content1">
//             <h3 className="home-text16 BigCard-Heading">Certificate</h3>
//             <span className="home-text17 Card-Text">
//               Certificate details
              
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: ' ',
//                 }}
//               />
//             </span>
//             <button className="home-button1 button Anchor">READ MORE</button>
//           </div>
//         </div>
//         <div className="home-service-card2">
//           <div className="home-card-content2">
//             <h3 className="home-text18 BigCard-Heading">Service name</h3>
//             <span className="home-text19 Card-Text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//               nec odio. Praesent libero.
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: ' ',
//                 }}
//               />
//             </span>
//             <button className="home-button2 Anchor button">READ MORE</button>
//           </div>
//         </div>
//         <div className="home-service-card3">
//           <div className="home-card-content3">
//             <h3 className="home-text20 BigCard-Heading">Service name</h3>
//             <span className="home-text21 Card-Text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//               nec odio. Praesent libero.
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: ' ',
//                 }}
//               />
//             </span>
//             <button className="home-button3 button Anchor">READ MORE</button>
//           </div>
//         </div>
//       </div> */}

//       <div id="about-us" className="home-about-us">
//         <div className="home-heading-container1">
//           <h2 className="home-text22 Section-Heading">Projects</h2>
//           <span className="home-secondary-text">
//             <span>Project details by student</span>
//             <br></br>
//           </span>
//         </div>
//         <div className="home-text-container">
//           <span className="home-text25">
//             <span className="Section-Text">
//               Project: Personalized Customer Experience Chatbot Development
//             </span>
//             <br className="home-text27"></br>
//             <br className="Section-Text"></br>
//             <span className="Section-Text">Tech Used: NLP, Python, KAFKA</span>
//             <br className="home-text30"></br>
//             <br className="Section-Text"></br>
//             <br className="home-text32"></br>
//             <br className="Section-Text"></br>
//             <span className="Section-Text">
//               Project: Intelligent Conversational Agent: Multi-Document Reader
//               and Chatbot Integration with LangChain and ChatGPT
//             </span>
//             <br className="home-text35"></br>
//             <br className="Section-Text"></br>
//             <span className="Section-Text">
//               Tech Used: NLP, Python, Lanchain, OpenAI
//             </span>
//             <br className="home-text38"></br>
//             <br className="Section-Text"></br>
//             <br className="home-text40"></br>
//             <br className="Section-Text"></br>
//             <span className="Section-Text">
//               Project: Real-Time Facial Emotion Recognition System
//             </span>
//             <br className="home-text43"></br>
//             <br className="Section-Text"></br>
//             <span className="Section-Text">Tech Used: NLP, Python, KAFKA</span>
//           </span>
//         </div>
//         <button className="home-cta-btn3 button Anchor">START BUILDING</button>
//       </div>
//       <div className="home-section-separator1"></div>
//       <Link to="/logout" className="logout-button">Logout</Link>

//     </div>
  )
}
export default Home


// Dashboard.jsx
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Dashboard = () => {
  // const [token, setToken] = useState(JSON.parse(localStorage.getItem('auth')) || '');
  // const [userData, setUserData] = useState({});
  // const navigate = useNavigate();

  // const fetchUserData = async () => {
  //   if (token === '') {
  //     return;
  //   }

  //   try {
  //     const axiosConfig = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };

  //     const response = await axios.get('http://localhost:3000/api/v1/dashboard', axiosConfig);
  //     setUserData(response.data);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  //   console.log(userData);
  // };

  // useEffect(() => {
  //   fetchUserData();
  //   if (token === '') {
  //     navigate('/login');
  //     toast.warn('Please login first to access the dashboard');
  //   }
  // }, [token]);

//   return (
//     <div className='dashboard-main'>
//       <h1>{userData.name}'s Dashboard</h1>
//       <p>Email: {userData.email}</p>
//       <p>Certificate ID: {userData.password}</p>
//       <p>About Us: {userData.aboutUs}</p>
//       {/* Add other user details */}
//       <Link to='/logout' className='logout-button'>
//         Logout
//       </Link>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react'
// import "../styles/Dashboard.css";
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Dashboard = () => {
//   const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
//   const [ data, setData ] = useState({});
//   const navigate = useNavigate();

//   const fetchLuckyNumber = async () => {

//     let axiosConfig = {
//       headers: {
//         'Authorization': `Bearer ${token}`
//     }
//     };

//     try {
//       const response = await axios.get("http://localhost:3000/api/v1/dashboard", axiosConfig);
//       setData(response.data);
//       // setData({ msg: response.data.msg, luckyNumber: response.data.secret });
//     } catch (error) {
//       toast.error(error.message);
//     }
//   }


  
//   useEffect(() => {
//     fetchLuckyNumber();
//     if(token === ""){
//       navigate("/login");
//       toast.warn("Please login first to access dashboard");
//     }
//   }, [token]);

//   return (
//     <div className='dashboard-main'>
//       <h1>Hiiiiiiii{ data.email }</h1>
//       <h1>Dashboard</h1>
//       <p>Hi { data.msg }! { data.luckyNumber }</p>
      // <Link to="/logout" className="logout-button">Logout</Link>
//     </div>
//   )
// }

// export default Dashboard
