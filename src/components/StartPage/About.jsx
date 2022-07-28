import React from 'react'
import logo from '../../img/logo.svg'
import head from '../../img//heand-for-logo.jpg'
import './About.scss'

const About = () => {
  // useEffect(() => {
  //   const bloksAbout = document.querySelectorAll('.about-as__block')
  //   const about = document.querySelector('.about-as')
  //   const newBlock = ' <div class='about-as__block_invisible'></div>'
  //   if (bloksAbout.length % 2 === 0) {
  //     bloksAbout.forEach(element => {
  //       element.insertAdjacentHTML('afterend', newBlock)

  //     })

  //   } else {
  //     bloksAbout.forEach((element, i) => {
  //       element.insertAdjacentHTML('beforebegin', newBlock)
  //       if (i === bloksAbout.length - 1) {
  //         element.insertAdjacentHTML('afterend', newBlock)
  //       }
  //     })
  //   }
  // }, [])


  return (
    <div className='face-page'>
      <div className='face-page__header'>
        <div className='face-page-img'>
          <div className='face-page-img__logo'>
            <img src={logo} alt='image description' />
          </div>
          <div className='face-page-img__hand'>
            <img src={head} alt='image description' />
          </div>
        </div>
        <h1 className='face-page__title'>Phighology sites </h1>
      </div>

      <div className='face-page__description'>
        On our site you can tell about everything that worries you? You can choose the best doctor you like and talk to him.
      </div>

      <div className='about-as'>

        <div className='about-as__block'>
          <div className='about-as__block-title'>Our Principles</div>
          <div className='about-as__block-text'>We are committed to three key principles that make SaySafe a favorite
            international site for our members: high quality, extensive user base and friendly support team.</div>
        </div>
        <div className='about-as__block_invisible'></div>
        <div className='about-as__block'>
          <div className='about-as__block-title'>We put quality first. </div>
          <div className='about-as__block-text'>We offer you a platform with an intuitive interface that is available at any
            time of the day or night. And we don’t stop at what we have achieved as we are constantly improving SaySafe
            for you.</div>
        </div>
        <div className='about-as__block_invisible'></div>
        <div className='about-as__block'>
          <div className='about-as__block-title'>We are ready to help</div>
          <div className='about-as__block-text'>Our support team specialists will assist you 24/7 with any questions you may
            have about the website.</div>
        </div>
        <div className='about-as__block_invisible'></div>
        <div className='about-as__block'>
          <div className='about-as__block-title'>Thousands of users</div>
          <div className='about-as__block-text'>Here we’ve gathered thousands of people who dream about meeting someone cool
            who can help them to resolve their problems and interesting to talk to, share problems or happy moments
            online
            and simply have some fun.</div>
        </div>
        <div className='about-as__block_invisible'></div>
        <div className='about-as__block'>
          <div className='about-as__block-title'>????????</div>
          <div className='about-as__block-text'>SaySafe has been around for long enough to gather the profiles of thousands
            of
            amazing people on the platform, who have remained devoted fans of our service.
            Thousands of people have already experienced the opportunities to socialize that this website offers. New
            members keep joining SaySafe!
            Lots of people enjoy communication at SaySafe.
          </div>
        </div>
        <div className='about-as__block_invisible'></div>
        <div className='about-as__block'>
          <div className='about-as__block-title'>Advanced means of communication</div>
          <div className='about-as__block-text'>We’ve created numerous tools and services that make the process of looking
            for
            resolve your problems on our site easy and exciting</div>
        </div>
        <div className='about-as__block_invisible'></div>


      </div>
    </div>
  )
}

export default About