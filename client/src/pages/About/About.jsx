import React from 'react';
import { Link } from 'react-router';
import { BsArrowRight } from 'react-icons/bs';
import { FiCompass, FiHeart, FiUsers, FiZap } from 'react-icons/fi';

// Founder image (placeholder – use actual image)
import founderImg from '../../assets/landing1.jpg'; // replace with actual path

const About = () => {
  return (
    <div className="relative min-h-screen font-sans  overflow-hidden">
      {/* Same subtle grid background as Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_70%,transparent_100%)] z-0" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-dark/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-gray-muted/20 to-primary/20 rounded-full blur-3xl z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span className="inline-block px-4 py-1.5  text-primary text-sm font-semibold tracking-wide mb-5 border-b border-primary/20">
                OUR STORY
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-6">
              A platform born from
              <span className="block text-primary">real‑world experience</span>
            </h1>
            <p className="text-gray-muted text-lg mb-6">
              NexlyLink was founded by Nelima, a former placement coordinator who saw firsthand how fragmented the process was. Students missed opportunities, companies struggled to find the right talent, and administrators were buried in spreadsheets.
            </p>
            <p className="text-gray-muted text-lg mb-6">
              So she built a better way. Today, NexlyLink connects thousands of engineers with companies that value their skills, all through a seamless, transparent platform.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <img
                  src={founderImg}
                  alt="Nelima"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-sm text-gray-600">Nelima – Founder & CEO</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team collaborating"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Our Impact */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wide mb-5 border-b border-primary/20">
              OUR IMPACT
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Changing how engineers and companies connect
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-3">For engineers</h3>
              <p className="text-gray-muted mb-4">
                We've helped over 1,000 engineers land roles at companies where they can grow. Our platform gives them visibility into the entire process, from application to offer, so they can focus on what matters: preparing for their next challenge.
              </p>
              <p className="text-gray-muted">
                Students report feeling more confident and less anxious because they're never left guessing where they stand.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-3">For companies</h3>
              <p className="text-gray-muted mb-4">
                More than 500 companies have streamlined their early‑talent hiring through NexlyLink. They save countless hours by receiving curated, qualified candidates, and they love the collaborative review tools that get their whole team involved.
              </p>
              <p className="text-gray-muted">
                Our platform reduces time‑to‑hire by an average of 40%, letting companies secure top talent before competitors.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5  text-primary text-sm font-semibold tracking-wide mb-5 border-b border-primary/20">
              OUR VALUES
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              What drives us every day
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
  { title: 'Clarity', desc: 'No hidden steps, no ambiguity. Everyone deserves to know where they stand.' },
  { title: 'Empathy', desc: 'We design for real humans—students starting their careers, recruiters building teams.' },
  { title: 'Community', desc: 'We foster connections that last beyond a single placement.' },
  { title: 'Innovation', desc: 'We constantly evolve to meet the needs of a changing workforce.' },
].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl  text-primary mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{value.title}</h3>
                <p className="text-gray-muted text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Spotlight */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1">
                <img
                  src={founderImg}
                  alt="Nelima, Founder"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-8 md:p-10">
                <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">founder's note</span>
                <h3 className="text-2xl font-bold text-dark mb-4">Nelima — building with purpose</h3>
                <p className="text-gray-muted mb-4">
                  "I started NexlyLink because I believed there had to be a better way. After years of watching talented students slip through the cracks and companies struggle to find them, I decided to build the platform I wished existed.
                </p>
                <p className="text-gray-muted mb-4">
                  Today, I'm proud of what we've built,but we're just getting started. Every day, our team wakes up thinking about how we can make placements more human, more efficient, and more joyful."
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-dark font-medium">Nelima</span>
                  <span className="text-gray-400 text-sm">Founder & CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default About;