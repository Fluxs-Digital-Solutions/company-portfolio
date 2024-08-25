import React,{useState} from "react";
import { Link } from "react-router-dom";


import digital from "../assets/images/digital/02.jpg"
import digital1 from "../assets/images/digital/01.jpg"
import digital3 from "../assets/images/digital/03.jpg"
import digital4 from "../assets/images/digital/04.jpg"
import square from "../assets/images/square/square-warning.png"
import squareSucess from "../assets/images/square/square-success.png"
import bgImg from "../assets/images/digital/bg01.jpg"
import cta from "../assets/images/digital/cta.jpg"

import pro1 from "../assets/images/portfolio/pro1.jpg"
import pro2 from "../assets/images/portfolio/pro2.jpg"
import pro4 from "../assets/images/portfolio/pro4.jpg"

import DigitalNavbar from "../componants/navbar/digitalAgencyNavbat";
import Clients from "../componants/clients";
import FooterThree from "../componants/footer/footerThree";
import DigitalProject from "../componants/digitalProject";
import ScrollTop from "../componants/scrollTop";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';

import Modal from 'react-bootstrap/Modal';
import {partnersImg} from "../data/data"

import {FiAirplay, RiPresentationLine, AiOutlineMobile,FiCrop,MdArrowForward,FiVideo,MdKeyboardArrowRight} from "../assets/icons/vander"

export default function IndexDigitalAgency(){
    const [isOpen, setOpen] = useState(false);

  const [show, setShow] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     comments: "",
//   });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, subject, comments } = formData;
//     const mailtoLink = `mailto:fluxslive@gmail.com?subject=${encodeURIComponent(
//       subject
//     )}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(
//       email
//     )}%0D%0AComments: ${encodeURIComponent(comments)}`;
//     window.location.href = mailtoLink;
//   };

    const featuresData = [
        {
            icon:FiAirplay,
            title:'Web Development',
            desc:'we’re focused on creating innovative, user-friendly websites that deliver results. Your website is the online face of your company.',
            background:'card border-0 text-center features feature-success feature-clean'
        },
        {
            icon:RiPresentationLine,
            title:'AI Driven Development',
            desc:'Streamline and enhance the software creation process, boosting speed, efficiency, and code quality while reducing manual effort.',
            background:'card border-0 text-center features feature-danger feature-clean'
        },
        {
            icon:AiOutlineMobile,
            title:'Mobile Development',
            desc:'Creating applications specifically for mobile devices, focusing on user experience, performance, and accessibility.',
            background:'card border-0 text-center features feature-info feature-clean'
        },
        {
            icon:FiCrop,
            title:'Cloud Services',
            desc:'Enabling scalable, flexible, and cost-effective solutions for data storage, processing, and application deployment.',
            background:'card border-0 text-center features feature-warning feature-clean'
        },
    ]
    const productData = [
        {
            image: pro1,
            name:'M-Finance',
            title:'fully Customizable micro finance application',
            background:'portfolio portfolio-primary'
        },
        {
            image: pro4,
            name:'F-Store',
            title:'e-commerce platform for Online Stores',
            background:'portfolio portfolio-warning'
        },
        {
            image: pro2,
            name:'Chat Me',
            title:'AI Powerd Chat Bot',
            background:'portfolio portfolio-success'
        }
    ]

    
    return(
        <>
        <DigitalNavbar/>
        <section className="bg-half-170 d-table w-100 pt-5" id="home" style={{ margin: '0', padding: '0' }}>
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="title-heading">
                            {/* <img src={logo} alt=""/> */}
                            <h4 className="text-primary fw-normal mt-4">We are High Performace Tech Team</h4>
                            <h4 className="heading mb-4"style={{ lineHeight: '1' }}>Comprehensive Tech Services for every need</h4>
                            <p className="text-muted para-desc mb-0">we drive your business forward with real-time support and cutting edge technology, ensuring you stay ahead in an ever evolving market.</p>
                        
                            {/* <div className="mt-4">
                                <Link to="#!" onClick={() => setOpen(true)}  className="btn btn-icon btn-pills btn-primary lightbox"><FiVideo className="fea icon-sm"/></Link><span className="fw-normal align-middle ms-2">Watch Now</span>
                            </div> */}
                            <ModalVideo
                                channel="youtube"
                                youtube={{ mute: 0, autoplay: 0 }}
                                isOpen={isOpen}
                                videoId="yba7hPeTSjk"
                                onClose={() => setOpen(false)} 
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 offset-lg-1 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-5 col-6">
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-12">
                                        <img src={digital} className="img-fluid rounded-md" alt=""/>
                                    </div>
    
                                    <div className="col-lg-12 col-md-12 text-end">
                                        <img src={square} className="avatar avatar-medium img-fluid rounded-md" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-6">
                                <img src={digital1}className="img-fluid rounded-md" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="container pt-5">
            <div className="row">
                <div className="col text-center mb-4">
                    <h6 className="fw-normal text-muted">We are privileged to collaborate with these outstanding partners.</h6>
                </div>
            </div>

            <div className="row justify-content-center">
                {partnersImg.map((item,index)=>{
                    return(
                    <div className="col-lg-2 col-md-2 col-6 py-2" key={index}>
                        <div className="text-center">
                            <img src={item} className="avatar avatar-md-md w-auto" alt=""/>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        <section className="section -fluid  overflow-hidden position-relative">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={bgImg}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="container py-5 mt-md-5 mt-0">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card bg-white rounded-md">
                            <div className="card-body">
                                <h6 className="text-primary fw-normal mb-2">Fluxs Digital Solutions</h6>
                                <h4 className="fw-semibold mb-4">Leading Digital <br/> Business For 
                                <TypeAnimation
                                    sequence={[
                                        'Software',
                                        2000,
                                        'Mobile',
                                        2000,
                                        'AI',
                                        2000,
                                        'Technology',
                                        2000,
                                        'Webapps',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    className="text-primary typewrite ms-1" 
                                    repeat={Infinity}
                                    cursor={false}
                                />
                                
                                 <br/> Solution.</h4>
                                <p className="text-muted mb-0">Develop personalized plans using the latest IT innovations to support your business goals and drive growth.</p>
                            
                                <div className="mt-4">
                                    {/* <Link onClick={handleShow} className="btn" style={{background:"#ff6408",color:"white"}}>Want a project?</Link> */}
                                    <a href="https://cal.com/fluxs" className="btn" style={{background:"#ff6408",color:"white"}} target="_blank">Want a project?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comments" className="form-label">
                Comments
              </label>
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                rows="3"
                value={formData.comments}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal> */}

        <section className="section" id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Our Valuable Services</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Begin partnering with Fronter, your all-in-one solution to generate awareness, increase traffic, and build connections.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item,index) =>{
                        const Icon = item.icon
                        return(
                            <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                                <div className={item.background}>
                                    <div className="icons bg-lg rounded-lg text-center mx-auto">
                                        <Icon className="d-block icon h2 mb-0"/>
                                    </div>
                                    <div className="content mt-4 pt-2">
                                        <h5 className="mb-3">{item.title}</h5>
                                        <p className="text-muted mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-7 col-6">
                                <img src={digital3} className="img-fluid rounded-md" alt=""/>
                            </div>
                            
                            <div className="col-lg-5 col-6">
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-12">
                                        <img src={digital4} className="img-fluid rounded-md" alt=""/>
                                    </div>
    
                                    <div className="col-lg-12 col-md-12">
                                        <img src={squareSucess} className="avatar avatar-medium img-fluid rounded-md" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                            <h4 className="text-primary fw-normal mb-2">Why need web site ?</h4>
                            <h4 className="title mb-4">Optimize your entire <br/> web presence effectively</h4>
                            <p className="text-muted para-desc mb-0">A website boosts your online visibility, credibility, and helps attract more customers to your business.</p>
                        
                            <div className="mt-4">
                                <a href ="https://cal.com/fluxs" target="_blank" className="btn" style={{background:"#ff6408",color:"white"}}>Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="video-solution-cta position-relative z-index-1">
                          
                            <div className="position-relative">
                                {/* <img src={cta} className="img-fluid rounded-md shadow-lg" alt=""/> */}
                                {/* <div className="play-icon">
                                    <Link to="#!" onClick={() => setOpen(true)}  className="play-btn lightbox">
                                        <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                                    </Link>
                                </div> */}
                            </div>
                            <div className="content mt-md-4 pt--7">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mt-4 pt-0">
                                                <div className="section-title text-md-start">
                                                    <img src={cta} className="img-fluid rounded-md shadow-lg" alt=""/>
                                                    <h4 className="title text-white title-dark mb-0 pt-3">We are providing full <br/> AI Driven Development Services</h4>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-12 mt-4 pt-md-2">
                                                <div className="section-title text-md-start">
                                                    <p className="text-white-50 para-desc">We are a full service provider specializing in AI driven development, offering comprehensive solutions that leverage artificial intelligence to optimize and streamline your software projects. From intelligent automation to data-driven insights, we help you harness the power of AI to drive innovation and efficiency.</p>
                                                    <Link to="" className="text-white title-dark">Read More <MdArrowForward  className="align-middle"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-posts-placeholder bg-primary"></div>
            </div>
        </section>

        <section className="section pb-0" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="text-primary fw-normal mb-2">Testimonial</h4>
                            <h4 className="title mb-4">Hear From Our Satisfied  <br/> Clients </h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Partner with Fronter to access all the tools required to boost visibility, increase traffic, and foster connections.</p>
                        </div>
                    </div>
                </div>
                <Clients/>
            </div>
        </section>

        <section className="section" id="products">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-md-8">
                        <div className="section-title text-center text-md-start">
                            <h4 className="text-primary fw-normal">Our Recent Works</h4>
                            <h4 className="title mb-4">Our Digital Products</h4>
                            <p className="text-muted mb-0 para-desc">Start working with Fluxs that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-sm-0">
                        <div className="text-center text-md-end">
                            <Link to="#" className="text-primary h6">See More <MdKeyboardArrowRight className="align-middle"/></Link>
                        </div>
                    </div>
                </div>

                <div className="row" id="grid">
                    {productData.map((item,index) => {
                        return(
                            <div className="col-lg-4 col-md-6 picture-item mt-5 pt-2" key={index}>
                                <div className={item.background}>
                                    <div className="position-relative">
                                        <div className="shadow rounded pt-4 px-4 img-bg">
                                            <img src={item.image} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                    </div>

                                    <div className="d-flex pt-3 px-3 align-items-center">
                                        <div className="flex-1">
                                            <Link to="#" className="title mb-0 h6 d-block text-dark">{item.name}</Link>
                                            <span className="text-muted">{item.title}</span>

                                            <div className="pt-3">
                                                <Link to="" className="text-dark title-dark">Read More <MdArrowForward  className="align-middle"/></Link>
                                            </div>
                                        </div>

                                        <span className="fs-5 link fw-semibold">{item.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <DigitalProject/>
        </section>
        <FooterThree/>
        <ScrollTop/>
        </>
    )
}