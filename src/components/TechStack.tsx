"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

type CertItem = {
  title: string;
  issuer: string;
  image: string;
};

const certItems: CertItem[] = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council via Course-Net Indonesia",
    image: "/images/certs/ceh.jpeg",
  },
  {
    title: "CyberSecurity Engineer",
    issuer: "Merdeka Siber",
    image: "/images/certs/merdeka.jpeg",
  },
  {
    title: "SOC Analyst Level 1",
    issuer: "PT Sekuriti Siber Indonesia",
    image: "/images/certs/ssi.jpeg",
  },
  {
    title: "Junior CyberSecurity Engineer",
    issuer: "PT VINIX SEVEN AURUM",
    image: "/images/certs/vinix.jpeg",
  },
];

const TechStack = () => {
  const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

  return (
    <section id='lab' className='relative py-28'>
        <ScrollReveal stagger={0.1}>
            <h3 className='text-2xl md:text-3xl font-semibold text-white/90 mb-2'>Certifications</h3>
            <p className='text-white/50 text-sm mb-12'>Verified credentials from professional training &amp; bootcamps</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {certItems.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setLightbox({ image: cert.image, title: cert.title })}
                  className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0a1628] border border-[#1c2d55] transition-all duration-300 hover:border-[#305AD0]/60 hover:shadow-[0_10px_40px_rgba(48,90,208,0.2)]'
                >
                  <div className='relative h-[220px] overflow-hidden'>
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className='object-cover object-top transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center'>
                      <span className='text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#305AD0]/80 px-4 py-2 rounded-full'>Click to view</span>
                    </div>
                  </div>
                  <div className='p-5'>
                    <h4 className='text-sm font-semibold text-white'>{cert.title}</h4>
                    <p className='text-xs text-[#5a8af5] mt-1'>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
        </ScrollReveal>

        {/* Lightbox */}
        {lightbox && (
          <div
            className='fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4'
            onClick={() => setLightbox(null)}
          >
            <button
              className='absolute top-6 right-6 text-white text-3xl hover:text-[#5a8af5] transition-colors'
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            <div className='relative max-w-4xl w-full max-h-[85vh]' onClick={(e) => e.stopPropagation()}>
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                width={1200}
                height={800}
                className='w-full h-auto max-h-[80vh] object-contain rounded-lg'
              />
              <p className='text-center text-white text-sm mt-4 bg-black/50 inline-block mx-auto px-4 py-2 rounded-full'>
                {lightbox.title}
              </p>
            </div>
          </div>
        )}
    </section>
  )
}

export default TechStack