import React from 'react'
import Hero from './Hero'
import Content from './Content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact',
}

function page() {
  return (
    <div>
      <Hero/>
      <Content/>
    </div>
  )
}

export default page
