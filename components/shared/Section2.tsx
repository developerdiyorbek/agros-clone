import { onlineInsurance } from "@/constants";
import CardItem from "./CardItem";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React from "react";

function Section2() {
  return (
    <>
      <div className="container mx-auto max-lg:px-4 max-lg:mb-5 mb-12">
        <div className="lg:text-center lg:mb-10 max-lg:flex max-lg:justify-between max-lg:mb-4">
          <h2 className="mb-4 text-[25px] text-[#303030] hidden lg:block">
            Online sug&apos;urta polislari
          </h2>
          <p className="text-[#292929] text-[14px] hidden lg:block">
            &quot;O‘zagrosug&apos;urta&quot; AJdan siz quyidagi sug‘urta
            polislarini online xarid qilishinggiz mumkun.
          </p>

          <h2 className="text-[16px] font-semibold text-[#303030] block lg:hidden">
            Sug&apos;urta polislar
          </h2>
          <Link
            href={"#"}
            className="flex items-center gap-[1px] text-[#309E5F] text-[12px] block lg:hidden"
          >
            <span>Barchasini ko&apos;rish</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {onlineInsurance.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="bg-[#28A753] max-md:block p-[30px] text-center hidden text-white ">
        <p className="text-[15px] sm:text-[16px]">
          “Uzinsurance” universal sug`urta kompaniyalaridan biri bo`lib, barcha
          turdagi avtosug`urta, Uzagrosug`urta va boshqa yuridik va jismoniy
          shaxslarga 140 dan ortiq sug`urta qilish xizmatlarini ko`rsatadi.
        </p>
      </div>
    </>
  );
}

export default Section2;
