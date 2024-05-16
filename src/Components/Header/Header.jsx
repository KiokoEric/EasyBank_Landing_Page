import React from 'react';
import Logo from '../../assets/logo.svg'
import Button from '../Button/Button';

const Header = () => {
return (
    <div class='flex items-center justify-between px-20 py-5'>
        <section>
            <img src={Logo} alt="EasyBank Logo" />
        </section>
        <section>
            <ul class='flex gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
        </section>
        <section>
            <Button />
        </section>
    </div>
)
}

export default Header