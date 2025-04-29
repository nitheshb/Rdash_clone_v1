// // components/VendorInfo.js

"use client"


import { sampleVendors } from "../../_components/Allvendors";
import { Header } from "../header";
import { VendorInfo } from "./vendor-info";
import { useParams } from "next/navigation";




const Page = () => {
  
  const params = useParams();
  const id = params.id
  const vendors = sampleVendors;
  const currentVendor = vendors.find((vendor) => vendor.id === id ||"1");

  

  console.log("Current Vendor:", currentVendor);
  console.log("Query Params:", id);
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      {/* Header integrated directly in Page.tsx */}
      <Header vendor={currentVendor} />
      {/* AllVendors component */}
      <VendorInfo vendor={currentVendor} />
    </div>
  );
};

export default Page;