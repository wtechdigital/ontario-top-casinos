import "tailwindcss/tailwind.css"
import '../../app/globals.css'
import ResponsibleGamings from "@/screen/Gaming"
import Header from "@/screen/Header";
import FooterComponent from "@/screen/Footer";

import React from 'react'

function responsibleGaming() {
  return (
    <>
      <Header />
      <ResponsibleGamings />
      <FooterComponent />
    </>
  )
}

export default responsibleGaming