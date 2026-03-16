import React, { useState } from 'react';
import { BsArrowRight, BsBuilding, BsClock, BsPeople, BsGraphUp, BsCheckCircle } from 'react-icons/bs';
import { FiTarget, FiTrendingUp, FiShield, FiUsers } from 'react-icons/fi';
import AuthModal from '../../Components/Auth/AuthModal';

const Companies = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');

  const openAuthModal = (mode) => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const benefits = [
    {
      icon: <FiTarget size={28} />,
      title: 'Targeted talent pool',
      desc: 'Access pre‑screened engineering students and graduates who match your requirements.',
    },
    {
      icon: <BsClock size={28} />,
      title: 'Faster hiring',
      desc: 'Reduce time‑to‑hire by up to 40% with curated shortlists and collaborative tools.',
    },
    {
      icon: <BsGraphUp size={28} />,
      title: 'Data‑driven decisions',
      desc: 'Track pipeline metrics, interview feedback, and offer acceptance rates in real time.',
    },
    {
      icon: <FiShield size={28} />,
      title: 'Verified profiles',
      desc: 'Every student profile is verified by their institution — no fake applications.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Create your company profile',
      description: 'Tell students who you are, what you do, and what you’re looking for in future hires.',
    },
    {
      number: '02',
      title: 'Post opportunities',
      description: 'List internships, graduate roles, or projects. Set filters to attract the right candidates.',
    },
    {
      number: '03',
      title: 'Review & shortlist',
      description: 'Use our Kanban boards to move candidates through stages — from applied to interviewed to offer.',
    },
    {
      number: '04',
      title: 'Manage offers & onboarding',
      description: 'Send offer letters, collect e‑signatures, and kick off onboarding — all in one place.',
    },
  ];

  const expectations = [
    {
      icon: <BsPeople size={24} />,
      text: 'Dedicated account manager to help you get started.',
    },
    {
      icon: <BsBuilding size={24} />,
      text: 'Customizable company page to showcase your brand.',
    },
    {
      icon: <BsCheckCircle size={24} />,
      text: 'Integration with your existing ATS (coming soon).',
    },
    {
      icon: <FiUsers size={24} />,
      text: 'Team collaboration tools for hiring committees.',
    },
  ];

  return (
    <>
      <div className="relative min-h-screen font-sans overflow-hidden">
        {/* Same subtle grid background as Hero/About */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_70%,transparent_100%)] z-0" />

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-dark/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-gray-muted/20 to-primary/20 rounded-full blur-3xl z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
          {/* Hero header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-1.5 text-primary text-sm font-semibold tracking-wide mb-5 border-b border-primary/20">
              FOR COMPANIES
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-6">
              Hire the best engineering talent
              <span className="block text-primary">without the hassle</span>
            </h1>
            <p className="text-lg text-gray-muted mb-8 max-w-2xl">
              NexlyLink connects you with top engineering students and graduates from leading institutions. Streamline your early‑talent recruitment and build your future workforce.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openAuthModal('signup')}
                className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition hover:-translate-y-0.5"
              >
                <span>Get started as a company</span>
                <BsArrowRight />
              </button>
              <button
                onClick={() => openAuthModal('login')}
                className="inline-flex items-center gap-2 text-dark border-2 border-gray-300 px-6 py-3 rounded-full font-semibold hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                Already have an account? Log in
              </button>
            </div>
          </div>

          {/* Why choose us */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 text-primary text-sm font-semibold tracking-wide mb-5 border-b border-primary/20">
                {"why companies choose us".toUpperCase()}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                Built for modern hiring teams
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{benefit.title}</h3>
                  <p className="text-gray-muted text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 text-primary text-sm font-semibold tracking-wide mb-5 border-b border-primary/20">
                HOW IT WORKS
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                From profile to placement in four steps
              </h2>
            </div>
            <div className="relative">
              {/* Desktop connecting line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/30 via-dark/30 to-gray-muted/30 -translate-y-1/2" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-primary/30 mb-3">{step.number}</div>
                    <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                    <p className="text-gray-muted text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What to expect */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 text-primary text-sm font-semibold tracking-wide mb-5 border-b border-primary/20">
                WHAT TO EXPECT
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                Everything you need to succeed
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {expectations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-4">
              Ready to transform your early‑talent hiring?
            </h3>
            <p className="text-gray-muted text-lg mb-8">
              Join hundreds of companies already using NexlyLink to connect with top engineering talent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openAuthModal('signup')}
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition hover:-translate-y-0.5"
              >
                <span>Create a company account</span>
                <BsArrowRight />
              </button>
              <button
                onClick={() => openAuthModal('login')}
                className="inline-flex items-center gap-2 text-dark border-2 border-gray-300 px-8 py-4 rounded-full font-semibold hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                Log in
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              No credit card required. Free trial included.
            </p>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </>
  );
};

export default Companies;