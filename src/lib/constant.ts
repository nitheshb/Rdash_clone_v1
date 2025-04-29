

import Insights from "@/components/icons/insights";
// import MyProjects from "@/components/icons/myprojects";
import AllLibraries from "@/components/icons/alllibraries";
import ManageVendor from "@/components/icons/managevendor";
import ProjectIcon from "@/components/icons/myprojects";
import Tasks from "@/components/icons/mytasks";
import settings from "@/components/icons/settingsicon";
import ManageClient from "@/components/icons/manageclient";
import RDash from "@/components/icons/rdash";
import HelpCenter from "@/components/icons/helpcenter";
import CustomerSupport from "@/components/icons/customersupport";

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/p6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/p5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/p6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/p3.png",
  },
];

export const menuOptions = [
  {  Component: RDash, href: "/" },
  { name: "Insights", Component: Insights, href: "/insights" },
  { name: "My Project", Component: ProjectIcon, href: "/dashboard" },
  { name: "My Tasks", Component: Tasks, href: "/settings" },
   { 
    name: "All Libraries", 
    Component: AllLibraries, 
    href: "/All-libraries",
    hasDropdown: true,
    dropdownItems: [
      { name: "My Libraries", href: "/All-libraries/my-libraries/element-libraries" },
      { name: "Shared Libraries", href: "/All-libraries/shared-libraries" }
    ]
  },
  // { name: "Billing", Component: Payment, href: "/billing" },
  // { name: "Templates", Component: Templates, href: "/templates" },
  { name: "Manage Vendor", Component: ManageVendor, href: "/manage-vendors" },
  { name: "Manage Client", Component: ManageClient, href: "/clients" },
  { name: "Org.Settings", Component: settings, href: "/Insights" },

];

export const footerOptions = [
  { name: "Help Center", Component: HelpCenter, href: "/" },
  { name: "Customer Support", Component: CustomerSupport, href: "/" },
]




export const actionHeadings = [
  { label: "Chat Actions", value: "chat_actions" },
  { label: "Callback Actions", value: "callback_actions" },
  { label: "File Actions", value: "file_actions" },
  { label: "Message Actions", value: "message_actions" },
  { label: "Draft Actions", value: "draft_actions" },
  { label: "Issue Actions", value: "issue_actions" },
  { label: "Issue Attachment Actions", value: "issue_attachment_actions" },
  { label: "Issue Comment Actions", value: "issue_comment_actions" },
  { label: "User Actions", value: "user_actions" },
  { label: "Calendar Actions", value: "calendar_actions" },
  { label: "Contact Actions", value: "contact_actions" },
  { label: "Event Actions", value: "event_actions" },
  { label: "Folder Actions", value: "folder_actions" },
  { label: "Message Attachment Actions", value: "message_attachment_actions" },
  { label: "Block Actions", value: "block_actions" },
  { label: "Database Actions", value: "database_actions" },
  { label: "Database Page Actions", value: "database_page_actions" },
  { label: "Assistant Actions", value: "assistant_actions" },
  { label: "Text Actions", value: "text_actions" },
  { label: "Image Actions", value: "image_actions" },
  { label: "Audio Actions", value: "audio_actions" },
];






