import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollReveal from "./ScrollReveal";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  image: string;
};

const experienceItems: ExperienceItem[] = [
  {
    title: "CyberSecurity Engineer",
    company: "Merdeka Siber",
    period: "Des 2025 - Feb 2026",
    type: "Bootcamp",
    description:
      "Vulnerability assessment, penetration testing, threat hunting, and security log analysis on web applications and network systems.",
    image: "/images/merdeka-siber.png",
  },
  {
    title: "SOC Analyst (Level 1)",
    company: "PT Sekuriti Siber Indonesia",
    period: "Jul 2025 - Jan 2026",
    type: "Internship",
    description:
      "Security monitoring using SIEM (Wazuh), penetration testing on web & mobile apps, and ISO/IEC 27001 implementation.",
    image: "/images/ssi.png",
  },
  {
    title: "Junior CyberSecurity Engineer",
    company: "PT VINIX SEVEN AURUM",
    period: "Ags 2025 - Des 2025",
    type: "Internship",
    description:
      "Cloud security risk assessment, threat modeling, and network traffic analysis using Wireshark on cloud-based applications.",
    image: "/images/vinix.png",
  },
  {
    title: "Certified Ethical Hacker Trainee",
    company: "PT Course-Net Indonesia",
    period: "Jan 2024 - Mar 2024",
    type: "Bootcamp",
    description:
      "Ethical hacking methodology, vulnerability scanning, exploitation analysis, and penetration testing report writing based on CEH standards.",
    image: "/images/coursenet.png",
  },
];

const WorkExperience = () => {
  return (
    <section id="about" className="relative py-24">
      {/* glow effect */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2  w-[90vw] sm:w-[760px] md:w-[1000px] h-[280px] sm:h-[380px] md:h-[520px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(48, 90, 208, 0.6) 0%, rgba(30, 58, 138, 0.0) 70%)",
        }}
      />
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">
          Work Experience
        </h3>

        <ScrollReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {experienceItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 bg-[#0a1628] border border-[#1c2d55] shadow-[0_10px_40px_rgba(48,90,208,0.25)] transition-all duration-300 hover:-translate-y-1 md:-translate-y-2 hover:border-[#305AD0]/60 hover:shadow-[0_20px_60px_rgba(48,90,208,0.40)]"
            >
              {/* card gradient */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background:
                    "radial-gradient(120% 80% at 80% 10%, rgba(48, 90, 208, 0.35) 0%, rgba(48, 90, 208, 0.15) 25%), rgba(10, 22, 40, 0) 60%",
                }}
              ></div>

              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                {/* icon */}
                <div className="relative shrink-0 w-16 h-16 sm:size-20 md:size-24 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-[0_8px_24px_rgba(48,90,208,0.35)]"
                    priority
                  />
                </div>

                {/* text content */}
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mt-4 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5a8af5] mb-2">
                    {item.company} · {item.period} <span className="text-white/40">({item.type})</span>
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-white/60 max-w-sm mx-auto sm:mx-0">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkExperience;
