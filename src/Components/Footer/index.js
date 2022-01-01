import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__left">
                    <div className="footer__left__item">
                         <span>Powered by</span>
                         <img src="/asset/img/logo-white.svg" alt="" />
                    </div>
                    <div className="footer__left__item">
                        <span>Terms & Conditions</span>
                    </div>
                    <div className="footer__left__item">
                        <span>Privacy Policy</span> 
                    </div>
                    <div className="footer__left__item">
                        <span>Feedback</span> 
                    </div>
                </div>

                <div className="footer__right">
                <div className="footer__right__item">
                    <img src="/asset/img/facebook.svg" alt="" />
                </div>
                <div className="footer__right__item">
                    <img src="/asset/img/instagram.svg" alt="" />
                </div>
                <div className="footer__right__item">
                    <img src="/asset/img/twitter.svg" alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
