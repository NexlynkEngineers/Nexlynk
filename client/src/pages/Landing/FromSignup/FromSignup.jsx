import React from "react";
import { BsCalendar2, BsArrowRight } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import landing1 from '../../../assets/landing1.jpg';
import landing2 from '../../../assets/landing2.jpg';
import landing3 from '../../../assets/landing3.jpg';
import dashboard from '../../../assets/dashboard.jpg';

const FromSignup = () => {
  const cards = [
    {
      number: "01",
      image: landing1,
      title: "Complete Profile Setup",
      description:
        "Engineers build rich profiles highlighting skills, experience, and career aspirations. Companies define their ideal candidate with precision.",
      bullets: [
        "Skill-based matching",
        "Portfolio integration",
        "Company culture tags",
      ],
      color: "primary",
    },
    {
      number: "02",
      image: landing2,
      title: "Smart Matching & Discovery",
      description:
        "Our AI suggests the best fits. Engineers see tailored opportunities; companies get curated candidate lists, no noise, just quality.",
      bullets: [
        "Real-time notifications",
        "Mutual interest tracking",
        "Interview scheduling",
      ],
      color: "dark",
    },
    {
      number: "03",
      image: landing3,
      title: "Seamless Placement",
      description:
        "From offer letters to e-signatures and onboarding, everything happens in one place. Celebrate placements with digital confetti.",
      bullets: [
        "Digital offer management",
        "E-signature workflows",
        "Onboarding checklists",
      ],
      color: "gray-muted",
    },
  ];

  const getColorStyles = (color) => {
    switch (color) {
      case "primary":
        return {
          badge: "bg-primary text-white",
          bullet: "text-primary",
          border: "border-primary/20",
          glow: "shadow-primary/20",
        };
      case "dark":
        return {
          badge: "bg-dark text-white",
          bullet: "text-dark",
          border: "border-dark/20",
          glow: "shadow-dark/20",
        };
      default:
        return {
          badge: "bg-gray-muted text-white",
          bullet: "text-gray-muted",
          border: "border-gray-muted/20",
          glow: "shadow-gray-muted/20",
        };
    }
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-dark leading-tight">
            From sign-up to placement
            <span className="block text-primary">in three intentional steps</span>
          </h2>
          <p className="text-lg text-gray-muted mt-6 max-w-2xl mx-auto">
            We've designed every interaction to feel intuitive, human, and delightful because connecting engineers with great companies should be exciting.
          </p>
        </div>

        {/* Cards grid - asymmetric design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative">
          {cards.map((card, idx) => {
            const colors = getColorStyles(card.color);
            return (
              <div
                key={idx}
                className={`group relative bg-white rounded-3xl shadow-xl border ${colors.border} overflow-hidden transition-all duration-500 hover:shadow-2xl ${colors.glow} hover:-translate-y-2`}
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${card.color}-900/60 via-${card.color}-900/20 to-transparent`} />
                  
                  {/* Number badge */}
                  <div className={`absolute top-4 left-4 w-14 h-14 rounded-2xl ${colors.badge} flex items-center justify-center text-2xl font-bold shadow-lg border-2 border-white/30 backdrop-blur-sm`}>
                    {card.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3">{card.title}</h3>
                  <p className="text-gray-muted text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2 mb-6">
                    {card.bullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <FiCheckCircle className={`${colors.bullet} mt-0.5 flex-shrink-0`} size={16} />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>

                  
                </div>

                {/* Decorative corner blur */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${colors.bullet.replace('text', 'bg')}/10 rounded-full blur-2xl -z-10`} />
              </div>
            );
          })}
        </div>

        {/* CTA section with integrated dashboard image */}
        <div className="mt-24 relative">
          <div className="relative bg-gradient-to-br from-primary/10 via-dark/5 to-gray-muted/10 rounded-3xl border border-white/20 backdrop-blur-sm p-8 lg:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-white/50" />
            <div className="relative flex flex-col lg:flex-row items-center gap-10">
              {/* Left content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                  Ready to transform your placement process?
                </h3>
                <p className="text-gray-muted text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                  Join hundreds of companies and thousands of engineers who've found their perfect match through our platform.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <button className="group flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                    <span>Get started</span>
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center gap-2 text-dark border-2 border-gray-300 px-6 py-3 rounded-full font-semibold hover:border-primary/50 hover:bg-primary/5 transition-colors">
                    <BsCalendar2 className="text-primary" />
                    <span>Book a demo</span>
                  </button>
                </div>

                {/* Mini stats */}
                <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    10k+ engineers
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-dark" />
                    500+ companies
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-muted" />
                    4.9/5 rating
                  </span>
                </div>
              </div>

              {/* Right image - dashboard with floating badge */}
              <div className="flex-1 relative">
                <div className="relative">
                  <img
                    src={dashboard}
                    alt="Dashboard preview"
                    className="rounded-2xl shadow-2xl border border-gray-200 w-full"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromSignup;