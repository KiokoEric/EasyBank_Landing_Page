import React from 'react'
import Articles from '../Articles/Articles';
import Currency from '../../assets/image-currency.jpg';
import Restaurant from '../../assets/image-restaurant.jpg';
import Plane from '../../assets/image-plane.jpg';
import Confetti from '../../assets/image-confetti.jpg';

const Blog = () => {
return (
    <div id='Blog' class='flex flex-col gap-5 mb-32 px-20' >
        <h2 class='font-bold text-4xl'>Latest Articles</h2>
        <section class='flex justify-between gap-12 mt-5'>
            <Articles Source={Currency} Author='By Claire Robinson' Title='Receive money in any currency with no fees' Text='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…'/>
            <Articles Source={Restaurant} Author='By Wilson Hutton' Title='Treat yourself without worrying about money' Text='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…'  />
            <Articles Source={Plane} Author='By Wilson Hutton' Title='Take your Easybank card wherever you go' Text='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you…'  />
            <Articles Source={Confetti} Author='By Claire Robinson' Title='Our invite-only Beta accounts are now live!' Text='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...'  />
        </section>
    </div>
)
}

export default Blog