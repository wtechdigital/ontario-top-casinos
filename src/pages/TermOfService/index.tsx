import React from 'react'
import "tailwindcss/tailwind.css"
import '../../app/globals.css'
import Header from "@/screen/Header";
import FooterComponent from "@/screen/Footer";
import Services from '@/screen/TermsOfService'
const TermsOfServices = () => {
  return (
    <>
      <Header />
      <Services />
      <FooterComponent />

    </>
  )
}

export default TermsOfServices