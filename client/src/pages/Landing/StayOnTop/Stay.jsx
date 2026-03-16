import React from "react";

const Stay = () => {
  // Feature data – clean and static
  const features = [
    {
      icon: "📋",
      title: "Visual Kanban Workflow",
      description:
        "Drag‑and‑drop boards that reflect real‑time status. Celebrate placements with confetti, not spreadsheets.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "primary",
    },
    {
      icon: "📊",
      title: "Dashboard insights",
      description:
        "At‑a‑glance metrics for students, companies, approvals & revenue. Customize widgets to focus on what matters.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "dark",
    },
    {
      icon: "✅",
      title: "Approvals & verification",
      description:
        "Friendly list views with checklists, notes, and status badges, no more hunting through emails.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "gray-muted",
    },
  ];

  // Helper to get color-specific classes (Tailwind safelist these)
  const getColorClasses = (color) => {
    switch (color) {
      case "primary":
        return {
          bgLight: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20",
        };
      case "dark":
        return {
          bgLight: "bg-dark/10",
          text: "text-dark",
          border: "border-dark/20",
        };
      case "gray-muted":
        return {
          bgLight: "bg-gray-muted/10",
          text: "text-gray-muted",
          border: "border-gray-muted/20",
        };
      default:
        return {
          bgLight: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-200",
        };
    }
  };

  return (
    <section className="relative  py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gray-muted/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-dark leading-tight">
            Everything you need to streamline
            <span className="block text-primary">placements & approvals</span>
          </h2>
          <p className="text-lg text-gray-muted mt-6 max-w-2xl mx-auto">
            From intuitive Kanban boards to real‑time insights. Built for modern teams who want clarity without complexity.
          </p>
        </div>

        {/* Feature grid – static cards with clean mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const colors = getColorClasses(feature.color);
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-${feature.color}-900/30 to-transparent`}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                 
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative element */}
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 ${colors.bgLight} rounded-full blur-2xl opacity-30 -z-10`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary callout – clean, no extra interface */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-dark mb-4">
              <span className="text-primary">Real‑time sync</span> across your entire team
            </h3>
            <p className="text-gray-muted mb-6">
              Whether you’re in the office or on the go, everyone sees the same up‑to‑date information.
              Approvals, placement updates, and revenue changes are reflected instantly.
            </p>
            <ul className="space-y-3">
              {[
                "Live updates without page refresh",
                "Role‑based access for admins, coordinators, and viewers",
                "Export reports in one click",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary mt-1">.</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl border border-gray-200"
            />
          </div>
        </div>

        {/* Decorative line */}
        <div className="hidden lg:block absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-5" />
      </div>
    </section>
  );
};

export default Stay;