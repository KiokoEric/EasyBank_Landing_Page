import React from 'react'
import Services from '../Bank_Services/Services';
import OnlineBanking from '../../assets/icon-online.svg';
import Budgeting from '../../assets/icon-budgeting.svg';
import Onboarding from '../../assets/icon-onboarding.svg';
import API from '../../assets/icon-api.svg';

const Why = () => {
return (
    <div class='flex flex-col gap-5 mb-32 px-20'>
        <h2 class='font-bold text-3xl'>Why Choose Easybank ?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before</p>
        <section class='flex justify-between gap-12' >
            <Services Source={OnlineBanking} Service='Online Banking' Text='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. ' />
            <Services />
            <Services Source={Budgeting} Service='Simple Budgeting' Text='See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.' />
            <Services />
            <Services Source={Onboarding} Service='Fast Onboarding' Text='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.' />
            <Services />
            <Services Source={API} Service='Open API' Text='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.' />
            <Services />
        </section>
    </div>
)
}

export default Why