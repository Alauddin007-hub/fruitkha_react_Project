import React from 'react'
import ContactHero from '../Components/ContactHero'
import ContactForm from '../Components/ContactForm'
import ContactLocation from '../Components/ContactLocation'
import GoogleMap from '../Components/GoogleMap'

const ContactPage = () => {
  return (
    <>
        <ContactHero />
        <ContactForm />
        <ContactLocation />
        <GoogleMap />
    </>
  )
}

export default ContactPage