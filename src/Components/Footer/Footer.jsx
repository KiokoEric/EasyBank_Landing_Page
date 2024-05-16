import React from 'react';
import Facebook from '../../assets/icon-facebook.svg';
import YouTube from '../../assets/icon-youtube.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import Instagram from '../../assets/icon-instagram.svg';
import Button from '../Button/Button';

const Footer = () => {
return (
    <div id='Footer'>
        <section class='flex justify-between px-20 py-10 '>
            <article class='flex gap-28' >
                <div class='flex gap-2 h-5' >
                    <img src={Facebook} alt="" />
                    <img src={YouTube} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Pinterest} alt="" />
                    <img src={Instagram} alt="" />
                </div>
                <div>
                    <ul class='flex flex-col gap-2'>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <ul class='flex flex-col gap-2' >
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </article>
            <article class='flex flex-col items-end' >
                <Button />
                <p class='mt-8' >© Easybank. All Rights Reserved</p>
            </article>
        </section>
    </div>
)
}

export default Footer