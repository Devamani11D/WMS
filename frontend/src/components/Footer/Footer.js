import React from "react";
import { Fragment } from "react";
import './footer.css'

function Footer(){
    return (
        <Fragment>
        <section id="footer">
        <div class="footer_box reveal_it">
            <div class="footer_item">
                <a href="#"><img src="./img/logo.png" alt="#"/></a>
            </div>
            <div class="footer_item hide_mobile_screen">
                <h3>Get Started</h3>
                <h4>Home</h4>
                <h4>Store</h4>
                <h4>About Us</h4>
                <h4>Blog</h4>
                
            </div>
            <div class="footer_item">
                <h3>Reach Us</h3>
                <h4>500 Terry Francine St.</h4>
                <h4>San Francisco, CA 94158</h4>

                <h4>Email: info@domain.co.in</h4>
            </div>
            <div class="footer_item">
                <h4>Shipping & Returns</h4>
                <h4>FAQ</h4>
                <h4>Help Desk</h4>
            </div>
            <div class="footer_item big_screen">
                <a href="#" class="footer_icons"><i class="fa-brands fa-facebook fa-2xl"></i></a>
                <a href="#" class="footer_icons"><i class="fa-brands fa-twitter fa-2xl"></i></a>
                <a href="#" class="footer_icons"><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
            </div>
        </div>
    </section>
    <div class="footer_item side_mobile_screen">
        <a href="#" class="footer_icons"><i class="fa-brands fa-facebook fa-2xl"></i></a>
        <a href="#" class="footer_icons"><i class="fa-brands fa-twitter fa-2xl"></i></a>
        <a href="#" class="footer_icons"><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
    </div>
    </Fragment>
    );
}

export default Footer;