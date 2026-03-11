import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

const TechStack = () => {
  return (
    <section id='lab' className='relatie py-28'>
        <ScrollReveal stagger={0.08} className='text-center'>
            <p className='text-white/70 mb-6'>Specialized in <span className='text-[#5a8af5]'>offensive security</span> & system defense</p>
            <p className='text-white/50 text-sm mb-16'>Protecting systems and hunting threats with industry-standard tools & methodologies</p>

            <div className='relative max-w-4xl mx-auto w-full'>
                <Image
                src='/images/skills-section.png'
                alt='tech stack'
                width={1280}
                height={920}
                className='w-full h-auto'
                priority
                />
            </div>
        </ScrollReveal>
    </section>
  )
}

export default TechStack
