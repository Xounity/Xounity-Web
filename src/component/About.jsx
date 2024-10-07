import React from 'react';
import { Helmet } from 'react-helmet';

export const metadata = {
    title: "Xounity - About"
}

const About = () => {
  return (
    <div className='flex-1'>
        <Helmet>
            <title>{metadata.title}</title>
        </Helmet>
      <h1>About</h1>
    </div>
  )
}

export default About
