import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const ContactSection = () => {
  return (
    <section id="contact" className='py-24 relative'>
        <ScrollReveal stagger={0.08}>
            <h3 className='text-2xl md:text-3xl font-semibold text-white/90 mb-7'>Contact</h3>
            <p className='text-sm text-white/60 max-w-xl'>I&apos;m currently looking for opportunities in CyberSecurity, System Testing, or DevOps roles. Have a security challenge or a project in mind? Let&apos;s connect.</p>
            <div className='mt-6 text-white/80'>
                <Link href="mailto:tambunan.2308561091@student.unud.ac.id" className='hover:text-[#5a8af5]'>tambunan.2308561091@student.unud.ac.id</Link>
            </div>

            <div className='mt-6 flex items-center gap-4 text-white/80'>
                <Link href="https://www.linkedin.com/in/jordan-tambunan" target="_blank" rel="noopener noreferrer" className='hover:text-[#5a8af5]'>
                <FaLinkedin className='size-5'/>
                </Link>
                <Link href="mailto:tambunan.2308561091@student.unud.ac.id" className='hover:text-[#5a8af5]'>
                <FaEnvelope className='size-5'/>
                </Link>
                <Link href="tel:082210369952" className='hover:text-[#5a8af5]'>
                <FaPhone className='size-5'/>
                </Link>
            </div>
        </ScrollReveal>
    </section>
  )
}

export default ContactSection
