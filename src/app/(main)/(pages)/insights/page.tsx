

"use client";

import { JSX, Suspense, useState } from "react";

import { InfoBar } from "./_components/infobar";
import { SidebarNav } from "./_components/sidebarnav";
import TaskTracker from "./_components/tasktracker"; // Import TaskTracker component
import { EmptyState } from "./_components/emptystate"; // Import EmptyState if no content is selected
import DesignFiles from "./_components/designfiles";
import DprTracker from "./_components/dprtracker";
import MaterialInventory from "./_components/materialinventory";

import GrnTracker from "./_components/gprtracker";
import OrderIntent from "./_components/orderintent";
import Boq from "./_components/boq";
import Schedule from "./_components/schedule";
import Planning from "./_components/planning";

// Data for sidebar and subitems, now includes paths for subitems
const sidebarNavItems = [
  {
    title: "Design",
    items: [
      { title: "Design Files", path: "/design/files", content: <DesignFiles/> },
    ],
  },
  {
    title: "Task Manager",
    items: [
      { title: "Task Tracker", path: "/task-manager/tracker", content: <TaskTracker /> }, // Linking TaskTracker component
    ],
  },
  {
    title: "DPR tracker",
    items: [
      { title: "DPR", path: "/dpr-tracker", content: <DprTracker/> },
    ],
  },
  {
    title: "Project Tracker",
    items: [
      { title: "Material Inventory", path: "/project-tracker/material-inventory", content: <MaterialInventory/> },
    ],
  },
  {
    title: "GRN Tracker",
    items: [
      { title: "Material Inventory", path: "/grn-tracker/material-inventory", content: <GrnTracker/> },
    ],
  },
  {
    title: "Order / intent",
    items: [
      { title: "Order Value Bifurcation", path: "/order-intent/order-value", content: <OrderIntent/> },
      { title: "Vendor Payments", path: "/order-intent/vendor-payments", content: <div>Vendor Payments Content</div> },
    ],
  },
  {
    title: "BOQ",
    items: [
      { title: "Budget vs BOQ vs Actual", path: "/boq/budget-vs-boq", content: <Boq/> },
      { title: "BOQ", path: "/boq", content: <div>BOQ Content</div> },
    ],
  },
  {
    title: "Schedule",
    items: [
      { title: "Activity Schedule", path: "/schedule/activity", content: <Schedule/> },
    ],
  },
  {
    title: "Planning",
    items: [
      { title: "DPR", path: "/planning/dpr", content: <Planning/> },
    ],
  },
];

export default function InsightsPage() {
  const [activeContent, setActiveContent] = useState<React.ReactNode>(null); // State to store the content of the active subitem

  const handleSubItemClick = (content: JSX.Element) => {
    setActiveContent(content); // Set content when a subitem is clicked
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col min-h-screen overflow-hidden  h-full fixed top-0 w-[1465px]  ">
     
        {/* Fixed InfoBar */}
        <div className="sticky top-0 z-30">
          <InfoBar />
        </div>
        <div className="flex flex-1 p-6 border-t border-gray-200 bg-gray-100 rounded">
          {/* Sidebar */}
          <div className="w-64 border-r bg-white  ">
            <SidebarNav items={sidebarNavItems} onSubItemClick={handleSubItemClick} />
          </div>

          {/* Main Content */}
          <div className="flex-1 ">
            <div className="p-0">
              {/* Only show the active content */}
              <div className="bg-white  border border-gray-200 overflow-y-auto p-3 ">
                {/* Display the active content or EmptyState */}
                {activeContent || <EmptyState />} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
