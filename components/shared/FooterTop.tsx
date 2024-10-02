import { aboutCompany, collections } from "@/constants";
import { Globe, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";

function FooterTop() {
  return (
    <div className="bg-[#006121cc] py-20 max-md:hidden">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col gap-4">
          <Link href={"/"}>
            <Image src={"/logo-white.png"} alt="Logo" width={200} height={34} />
          </Link>
          <p className="text-[#cccccc] text-[14px] mb-4 max-w-[300px]">
            “O&apos;zagrosug&apos;urta” AJ universal sug`urta kompaniyalaridan
            biri bo`lib, barcha turdagi avtosug`urta, O&apos;zagrosug`urta va
            boshqa yuridik va jismoniy shaxslarga 140 dan ortiq sug`urta qilish
            xizmatlarini ko`rsatadi.
          </p>
          <div className="border-[#cccccc] w-fit border-[1px] bg-inherit">
            <input
              type="text"
              placeholder="Elektron manzil"
              className="outline-none bg-transparent py-1 pl-1 text-[#C5C5C5]"
            />
            <button className="text-[#C5C5C5] py-1 px-2" type="button">
              <FaTelegramPlane />
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-[#ddd] text-[16px] uppercase mb-5 font-semibold">
            KOMPANIYA HAQIDA
          </h3>
          <ul className="flex flex-col gap-3">
            {aboutCompany.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="text-[#cccccc] font-semibold hover:text-[#ddd] transition-colors text-[12px]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[#ddd] text-[16px] uppercase mb-5 font-semibold">
            FOYDALI HAVOLALAR
          </h3>
          <ul className="flex flex-col gap-3">
            {collections.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="text-[#cccccc] font-semibold hover:text-[#ddd] transition-colors text-[12px]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[#ddd] text-[16px] uppercase mb-5 font-semibold">
            BOG'LANISH
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <MapPin className="text-[#cccccc] font-semibold opacity-70" />
              <p className="text-[#cccccc] font-semibold hover:text-[#ddd] transition-colors text-[12px]">
                Toshkent shahar, Chilonzor tumani, 19-mavze 61/2-uy
              </p>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="text-[#cccccc] font-semibold opacity-70" />
              <div className="flex flex-col">
                <Link
                  href={"tel:1186"}
                  className="text-[#cccccc] font-semibold hover:text-[#ddd] transition-colors text-[12px]"
                >
                  Telefon : 1186
                </Link>
                <Link
                  href={"tel:+998712160500"}
                  className="text-[#cccccc] font-semibold hover:text-[#ddd] transition-colors text-[12px]"
                >
                  Telefon : +998 (71) 216 05 00
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="text-[#cccccc] font-semibold opacity-70" />
              <div className=" flex flex-col">
                <Link
                  href={"mailto:info@agros.uz"}
                  className="text-[#cccccc] font-semibold hover:text-[#ddd] transition-colors text-[12px]"
                >
                  Email : info@agros.uz
                </Link>
                <Link
                  href={"https://www.agros.uz"}
                  target="_blank"
                  className="text-[#cccccc] font-semibold hover:text-[#ddd] transition-colors text-[12px]"
                >
                  Web : www.agros.uz
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
