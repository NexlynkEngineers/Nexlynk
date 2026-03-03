import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2, BarChart3, Users, Building2, Award, Calendar, MessageSquare, TrendingUp, Eye } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Energetic placements for the next generation of engineers.
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  NexlyLink connects engineering students, hiring teams, and placement cells in one intuitive, modern workspace that feels more like a startup than a school.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  For Students
                  <ChevronRight size={16} />
                </button>
                <button className="px-5 py-2.5 border-2 border-gray-300 text-gray-900 rounded-full text-sm font-semibold hover:border-gray-400 transition-colors">
                  For Companies
                </button>
                <button className="px-5 py-2.5 border-2 border-gray-300 text-gray-900 rounded-full text-sm font-semibold hover:border-gray-400 transition-colors">
                  Talk to Admin Team
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-sm text-gray-500 mb-2">PLACEMENT RATE</div>
                  <div className="text-3xl font-bold text-gray-900">92%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">AVG. TIME TO OFFER</div>
                  <div className="text-3xl font-bold text-gray-900">14 days</div>
                </div>
                <div className="flex items-end">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">2,300+ active engineering students</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                {/* Top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-t-2xl"></div>

                {/* Header */}
                <div className="flex justify-between items-start mb-6 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-teal-400 rounded-sm"></div>
                    <p className="text-xs text-gray-500 font-medium">Live placements overview</p>
                  </div>
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200">Real-time updates</span>
                </div>

                {/* Three Column Layout */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-gray-100">
                  {/* Pending Column */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-3 uppercase">Pending</p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">Alex: Frontend Intern</p>
                        <p className="text-xs text-gray-500">Techify</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">Priya: Data Intern</p>
                        <p className="text-xs text-gray-500">Analytics Co</p>
                      </div>
                    </div>
                  </div>

                  {/* Shortlisted Column */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-3 uppercase">Shortlisted</p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">Miya: Backend Engineer</p>
                        <p className="text-xs text-gray-500">DataSeek</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">Sara: Frontend Intern</p>
                        <p className="text-xs text-gray-500">Techcore</p>
                      </div>
                    </div>
                  </div>

                  {/* Placed Column */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-3 uppercase">Placed</p>
                    <div className="space-y-2">
                      <div className="text-sm flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-900">Chen: Robotics</p>
                          <p className="text-xs text-gray-500">RoboTech</p>
                        </div>
                        <span className="text-teal-500">✓</span>
                      </div>
                      <div className="text-sm flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-900">Dev: Mobile</p>
                          <p className="text-xs text-gray-500">AppWorks</p>
                        </div>
                        <span className="text-teal-500">✓</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">PROFILE COMPLETION</p>
                    <p className="text-2xl font-bold text-gray-900">92%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">THE MONTH'S REVIEW</p>
                    <p className="text-2xl font-bold text-gray-900">You're ahead! Most Candidate your profile in which interest receives.</p>
                  </div>
                  <div></div>
                </div>

                {/* Chart Section */}
                <div className="bg-gradient-to-b from-cyan-50 to-white rounded-lg p-4">
                  <div className="flex items-end justify-center h-24 gap-1">
                    {[35, 55, 45, 70, 85, 65, 95].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-cyan-500 via-cyan-400 to-teal-400 rounded-t-md shadow-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students, Companies, Admins Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Students, companies, and admins—on one page.
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A card-based, visual experience for every person. Intuitive enough for students, powerful enough for admin teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* For Students */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For engineering students</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Browse companies, make mini application, and celebrate every moment.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Personalized opportunity based by discipline & experience.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Simple profile. See everything at a glance. Find "the one about there".</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Status pills for Pending, Shortlisted, and Placed—always clear.</span>
                </li>
              </ul>
              <div className="space-y-2">
                <a href="#" className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Real-time application tracking <ChevronRight size={14} />
                </a>
                <a href="#" className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Profile completion progress bar <ChevronRight size={14} />
                </a>
                <a href="#" className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Smart alerts for each update <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* For Companies */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For premier companies</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Post a role. Review 10 resumes. Manage data in a visual Kanban, and reach precision success.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Promised "Find a new opportunity" CTAs with blue & modern accents.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">At a glance match for job fits, discipline, and more.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Student screen with filters for skills, discipline and location.</span>
                </li>
              </ul>
              <div className="space-y-2">
                <a href="#" className="text-emerald-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Approved / Pending badges <ChevronRight size={14} />
                </a>
                <a href="#" className="text-emerald-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Draft via publish insights <ChevronRight size={14} />
                </a>
                <a href="#" className="text-emerald-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Collaborative review <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* For Admins */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For admin teams</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Manage the entire platform, track KPIs, and ensure everyone stays on track.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Complete control and visibility across all placements.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Real-time dashboards and custom reporting.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Team collaboration with role-based access control.</span>
                </li>
              </ul>
              <div className="space-y-2">
                <a href="#" className="text-purple-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Role management <ChevronRight size={14} />
                </a>
                <a href="#" className="text-purple-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Advanced analytics <ChevronRight size={14} />
                </a>
                <a href="#" className="text-purple-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Workflow automation <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay on Top Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stay on top of every approval and placement.
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            An admin-first view with Kanban boards, quick chats, and seamless tracking—without feeling like old-school enterprise software.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Placement Kanban */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="text-blue-600" size={18} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Placement Kanban</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Drag student cards with instant. Instant feedback and collaborative details when students get matching.
              </p>
              <p className="text-xs text-gray-500">Column shift subtly even positioned to highlight activity.</p>
              <div className="mt-6">
                <div className="text-3xl font-bold text-gray-900">1.2k</div>
                <p className="text-xs text-gray-600">Students</p>
              </div>
            </div>

            {/* Admin Stats Bar */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-green-600" size={18} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Admin stats bar</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Glanceable metrics: Partner Companies, Partner Candidates, Placement, Approvals, and the more.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gray-900">180</div>
                  <p className="text-xs text-gray-600">Students</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <p className="text-xs text-gray-600">Company</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gray-900">88k</div>
                  <p className="text-xs text-green-600 font-semibold">↑90%</p>
                </div>
              </div>
            </div>

            {/* Approvals & Verification */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Award className="text-amber-600" size={18} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Approvals & verification</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                One-click approve or reject requests in a friendly list view instead of clunky spreadsheets.
              </p>
              <p className="text-xs text-gray-500">
                Prevent approvals with detailed checkboxes. Placement Management & Onscreen Deadline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-widest">FROM SIGN-UP TO PLACEMENT</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-12">
            A smooth, intuitive workflow for every stage.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm mb-6">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sign up & verify</h3>
              <p className="text-gray-600 text-sm">
                Students, companies, and admins sign up on related onboarding. Rules with real-time validation and friendly error states.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm mb-6">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Set up profiles & post roles</h3>
              <p className="text-gray-600 text-sm">
                Profile completion progress bars, discipline & core experience. Filters, and quick "First Opportunity" forms snap-dimensional flags.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm mb-6">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Match, review & place</h3>
              <p className="text-gray-600 text-sm">
                In-app applications, review candidates in Kanban boards, and track offers and feedback from one clean dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 -z-10"></div>
        <div className="absolute inset-0 opacity-10 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Launch your next placement season with momentum.
              </h2>
              <p className="text-xl text-blue-50 leading-relaxed max-w-xl">
                Give students, companies, and admins a modern, energetic experience—from hero landing pages to high-fidelity dashboards and Kanban boards.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-3 text-lg">
                  <Calendar size={24} />
                  Book a live demo
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all text-lg">
                  Explore component library
                </button>
              </div>
            </div>

            {/* Right - Dashboard Mockup */}
            <div className="relative h-80">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* Dashboard Container */}
                <div className="h-full flex">
                  {/* Left Sidebar */}
                  <div className="w-28 bg-gradient-to-b from-blue-500 to-cyan-400 p-4 flex flex-col gap-3">
                    <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                    <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                    <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                    <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                    <div className="w-6 h-6 bg-white/40 rounded-lg"></div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-6 bg-gray-50 flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Welcome, Alex!</p>
                        <p className="text-sm font-bold text-gray-900">Your journey to a dream job starts here.</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
                      </div>
                    </div>

                    {/* Three Column Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                        <p className="text-xs text-gray-500 mb-1 font-semibold">Application Status</p>
                        <p className="text-xs text-gray-700">3 applied</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                        <p className="text-xs text-gray-500 mb-1 font-semibold">Recommended Jobs</p>
                        <p className="text-xs text-gray-700">Engineer •</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                        <p className="text-xs text-gray-500 mb-1 font-semibold">Upcoming Interviews</p>
                        <p className="text-xs text-gray-700">TechCo • 2 days</p>
                      </div>
                    </div>

                    {/* Learning Resources */}
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <p className="text-xs text-gray-500 mb-2 font-semibold">Learning Resources</p>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-cyan-200 rounded-lg"></div>
                        <div className="w-6 h-6 bg-cyan-200 rounded-lg"></div>
                        <div className="w-6 h-6 bg-cyan-200 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}