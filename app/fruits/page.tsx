import { Metadata } from 'next'
import OurFruits from './Content'
import Hero from './Hero'


export const metadata: Metadata = {
  title: 'Fruits',
  description: 'Fruits',
}

function page() {
  return (
    <div>
      <Hero/>
      <OurFruits />
    </div>
  )
}

export default page
