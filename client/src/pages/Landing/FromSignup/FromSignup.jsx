import React from "react";
import { BsCalendar2 } from "react-icons/bs";
import dashboard from '../../../assets/dashboard.jpg'

const FromSignup = () => {
  const steps = [
    {
      number: 1,
      title: "Sign up & verify",
      description:
        "Students, companies, and admins land on tailored onboarding flows with real-time validation and friendly error states.",
    },
    {
      number: 2,
      title: "Set up profiles & post roles",
      description:
        'Profile completion progress bars, discipline and experience filters, and quick "Post Opportunity" forms keep momentum high.',
    },
    {
      number: 3,
      title: "Match, review & place",
      description:
        "Browse opportunities, review candidates in Kanban boards, and track offers and invoices from one clean dashboard.",
    },
  ];

  return (
    <div className="bg-white font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
          From Sign-Up to Placement
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          A smooth, intuitive workflow for every stage.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div key={step.number} className="border border-gray-200 rounded-xl p-5">
              <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-400 text-xs font-semibold flex items-center justify-center mb-3">
                {step.number}
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 pb-14 mb-6 rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(to right, #1b3a58 0%, #1e6e80 45%, #29bfbf 100%)",
        }}
      >
        <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="w-full lg:max-w-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
              Launch your next placement season with momentum.
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed mb-6">
              Give students, companies, and admins a modern, energetic
              experience—from hero landing pages to high-fidelity dashboards
              and Kanban boards.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button className="flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Book a live demo
                <BsCalendar2 size={13} />
              </button>
              <button className="text-white text-sm font-semibold px-4 py-2 rounded-lg border border-white/60 hover:bg-white/10 transition-colors">
                Explore component library
              </button>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              src={dashboard}
              alt="Dashboard preview"
              className="rounded-xl w-full max-w-sm h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromSignup;