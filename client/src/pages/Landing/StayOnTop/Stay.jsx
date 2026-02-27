import { TbLayoutKanban } from "react-icons/tb";
import { MdOutlineQueryStats } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { TbArrowUpRight } from "react-icons/tb";
import React from "react";

const Stay = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-8 font-sans">
      <div className="max-w-5xl w-full">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Stay on top of every approval and placement.
          </h1>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            An admin-first view with Kanban boards, quick stats, and revenue
            tracking—without feeling like old-school enterprise software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <TbLayoutKanban size={20} color="#6B9FD4" />
            </div>
            <h2 className="text-sm font-semibold text-gray-900 mb-2">Placement Kanban</h2>
            <p className="text-xs text-gray-400 leading-relaxed mb-1">
              Pending, Shortlisted, Placed—drag and drop cards with instant
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mb-1">
              visual feedback and celebratory states when students get placed.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Columns shift subtly when populated to highlight activity.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center mb-4">
              <MdOutlineQueryStats size={20} color="#4CAF8A" />
            </div>
            <h2 className="text-sm font-semibold text-gray-900 mb-2">Admin stats bar</h2>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Quickly scan Active students, Active Companies, Pending Approvals,
              and This Month's Revenue from a single top bar.
            </p>

            <div className="grid grid-cols-4 gap-2">
              <div className="border border-gray-200 rounded-lg p-2.5">
                <p className="text-xs text-gray-400 leading-tight mb-1">Students</p>
                <p className="text-base font-bold text-gray-900">1.2k</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-2.5">
                <p className="text-xs text-gray-400 leading-tight mb-1">Compan ies</p>
                <p className="text-base font-bold text-gray-900">180</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-2.5">
                <p className="text-xs text-gray-400 leading-tight mb-1">Approv als</p>
                <p className="text-base font-bold text-gray-900">24</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-2.5 relative pb-5">
                <p className="text-xs text-gray-400 leading-tight mb-1">Revenue</p>
                <p className="text-base font-bold text-gray-900">$86k</p>
                <div className="absolute -bottom-2 -right-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full px-1.5 py-0.5 flex items-center gap-0.5 whitespace-nowrap">
                  <TbArrowUpRight size={10} />
                  +18% MoM
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="w-9 h-9 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
              <RiShieldCheckLine size={20} color="#C9A84C" />
            </div>
            <h2 className="text-sm font-semibold text-gray-900 mb-2">Approvals & verification</h2>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Approve companies, verify students, and manage invoices in a
              friendly list view instead of clunky spreadsheets.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mb-1">
              Company Approvals with Approve / Reject + notes.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mb-1">
              Student Verification with simple checkboxes.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Placement Management & Revenue Dashboard views.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stay;