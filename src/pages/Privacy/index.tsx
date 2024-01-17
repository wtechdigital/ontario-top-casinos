import React from 'react'
import "tailwindcss/tailwind.css"
import '../../app/globals.css'
import PrivacyPolicies from '@/screen/Privacy'
import Header from "@/screen/Header";
import FooterComponent from "@/screen/Footer";
const Privacy = () => {
  return (
    <>
      <Header />
      <PrivacyPolicies />
      <FooterComponent />

    </>
  )
}

export default Privacy