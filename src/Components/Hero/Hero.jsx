import React from 'react';
import HeroImage from '../../assets/image-mockups.png';
import Button from '../Button/Button';

const Hero = () => {
return (
    <div class='flex justify-between items-center pl-20'>
        <section class=' flex flex-col gap-5 w-80'>
            <h1 class='font-bold text-4xl'>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <Button />
        </section>
        <section className='HeroImage'>
            <img src={HeroImage} alt='HeroImage' />
        </section>
    </div>
)
}

export default Hero