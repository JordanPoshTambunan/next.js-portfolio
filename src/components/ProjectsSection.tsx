import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

const ProjectsSection = () => {
  return (
    <section id="projects" className='relative py-28 space-y-24'>
        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(48, 90, 208, 0.65) 0%, rgba(10, 22, 40, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.12} className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12'>
                <div className='relative z-10'>
                    <div className='mb-8'>
                        <p className='text-xs text-[#7ba3e0]'>Bug Bounty · 2026</p>
                       <h3 className='text-2xl md:text-3xl font-semibold text-[#ffd60a]'>Information Disclosure Potential LFI</h3>
                    </div>

                    <div className='relative z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(48,90,208,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>Discovered an information disclosure vulnerability with potential Local File Inclusion (LFI) during Bug Bounty Bali 2026. Performed deep analysis on vulnerable endpoints and submitted a detailed report with proof-of-concept to the security team.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(48, 90, 208, 0.35), rgba(48, 90, 208, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-start space-x-3 text-white/60 text-xs'>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>Information Disclosure</span>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>Bug Bounty</span>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>Bali</span>
                    </div>
                </div>

                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#060d1f] border border-[#1c2d55] shadow-[0_0_90px_rgba(48,90,208,0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-[360px] relative'>
                            <Image src="/images/InformationDisclosure.png" alt='project-1' fill className='object-cover object-top' />
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(48, 90, 208, 0.65) 0%, rgba(10, 22, 40, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.14} delay={0.8} className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12'>
                <div className='relative md:order-2 z-10'>
                    <div className='mb-8 text-right'>
                        <p className='text-xs text-[#7ba3e0]'>alrahdenhotel Web Pentest · 2025</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Structured Query Language Injection</h3>
                    </div>

                    <div className='relative z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(48,90,208,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>Web Penetration Testing for our client alrahdenhotel, in this case found some critical vulnerability. Structured Query Language (SQL) injection is a vulnerability that attacker can read target database and can read and take over target database.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(48, 90, 208, 0.35), rgba(48, 90, 208, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-end space-x-3 text-white/60 text-xs'>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>SQLMAP</span>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>Web Pentest</span>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>Injection</span>
                    </div>
                </div>

                <div className='relative md:order-1'>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#060d1f] border border-[#1c2d55] shadow-[0_0_90px_rgba(48,90,208,0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden md:h-[360px] h-[250px] relative'>
                            <Image src="/images/sqlii.gif" alt='SQL Injection Demo' fill className='object-cover' unoptimized/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(48, 90, 208, 0.65) 0%, rgba(10, 22, 40, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.12} className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12'>
                <div className='relative z-10'>
                    <div className='mb-8'>
                        <p className='text-xs text-[#7ba3e0]'>Bug Bounty VVIP BSSN · 2026</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Cross Site Scripting (XSS)</h3>
                    </div>

                    <div className='relative z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(48,90,208,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>Join BSSN VVIP Program to black box Penetration Testing for surakarta website. I found cross site scripting vulnerability on ticket parameter that vulnerable to DOM XSS.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(48, 90, 208, 0.35), rgba(48, 90, 208, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-start space-x-3 text-white/60 text-xs'>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>XSS</span>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>Bug Bounty</span>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>SuraKarta</span>
                    </div>
                </div>

                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#060d1f] border border-[#1c2d55] shadow-[0_0_90px_rgba(48,90,208,0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-[360px] relative'>
                            <Image src="/images/xss.jpeg" alt='XSS Demo' fill className='object-cover object-top' />
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(48, 90, 208, 0.65) 0%, rgba(10, 22, 40, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.14} delay={0.8} className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12'>
                <div className='relative md:order-2 z-10'>
                    <div className='mb-8 text-right'>
                        <p className='text-xs text-[#7ba3e0]'>LPPM Universitas Katolik Widya Mandala Surabaya Web Pentest · 2025</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Remote Code Execution + RSA ID Exposure</h3>
                    </div>

                    <div className='relative z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(48,90,208,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>Web Penetration Testing for LPPM Universitas Katolik Widya Mandala Surabaya, in this case found some critical vulnerability. This website using an old frameworm next js, that vulnerable to Remote Code Excecution. On id andrew get file ssh and can to cat and write that file and found key RSA ID.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(48, 90, 208, 0.35), rgba(48, 90, 208, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-end space-x-3 text-white/60 text-xs'>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>RCE</span>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>Web Pentest</span>
                        <span className='px-2 py-1 rounded-full border border-white/10 bg-white/5'>Root</span>
                    </div>
                </div>

                <div className='relative md:order-1'>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#060d1f] border border-[#1c2d55] shadow-[0_0_90px_rgba(48,90,208,0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden md:h-[360px] h-[250px] relative'>
                            <Image src="/images/rce2.png" alt='RCE' fill className='object-cover'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  )
}

export default ProjectsSection