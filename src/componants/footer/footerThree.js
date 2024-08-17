import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo-icon-100.png";

import {AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile} from "../../assets/icons/vander"

export default function FooterThree(){
    return(
    <footer className="bg-footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-120">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="text-lg-start text-center">
                                    <img src={logoImage} style={{width:"100px"}} alt=""/>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <div className="text-lg-start text-center">
                                    <h4 className="footer-head mb-0">Fluxs Digital Solutions</h4>
                                    <p className="mt-3 para-desc mx-auto mb-0">Start working with Fluxs that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="text-lg-end text-center">
                                    <h6>Follow us on</h6>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item me-1"><Link to="http://linkedin.com/company/fluxslive" target="_blank" className="rounded"><AiFillLinkedin/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="https://www.facebook.com/profile.php?id=61561247263014" target="_blank" className="rounded"><BiLogoFacebook/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="https://www.instagram.com/" target="_blank" className="rounded"><AiOutlineInstagram/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="mailto:fluxslive@gmail.com" className="rounded"><FiMail/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="https://www.behance.net/fluxslive" target="_blank" className="rounded"><AiOutlineBehance/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-py-30 footer-bar">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <p className="mb-0">© {new Date().getFullYear()} Fluxs. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}