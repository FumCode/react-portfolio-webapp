import React from 'react'
import linkedinIcon from '../assets/linkedin.png'
import TwitterIcon from '../assets/twitter.png'
import FacebookIcon from '../assets/facebook.png'
import InstagramIcon from '../assets/instagram.png'

const SocialMediaIcons = () => {

    return (
        <div className='flex justify-center md:justify-start my-10 gap-7'>
            <a className='hover:opacity-50 duration-500'
            href='https://www.linkedin.com/'
               target='_blank'
               rel='noreferrer'
            >
                <img src={linkedinIcon} alt="linkidin-link"/>
            </a>

            <a className='hover:opacity-50 duration-500'
               href='https://www.twitter.com/'
               target='_blank'
               rel='noreferrer'
            >
                <img src={TwitterIcon} alt="twitter-link"/>
            </a>

            <a className='hover:opacity-50 duration-500'
               href='https://www.facebook.com/'
               target='_blank'
               rel='noreferrer'
            >
                <img src={FacebookIcon} alt="facebook-link"/>
            </a>

            <a className='hover:opacity-50 duration-500'
               href='https://www.instagram.com/'
               target='_blank'
               rel='noreferrer'
            >
                <img src={InstagramIcon} alt="instagram-link"/>
            </a>

        </div>
    )
}
export default SocialMediaIcons
