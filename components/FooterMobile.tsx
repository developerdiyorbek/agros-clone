import { footerIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { TfiYoutube } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";

function FooterMobile() {
  return (
    <div className="max-md:block hidden">
      <div className="pt-10 pb-24 bg-[#309E5F] z-0  relative mt-52 mb-12 rounded-t-[30px]">
        <div className="min-h-[200px] max-w-[330px] transition-all duration-300 hover:scale-105 absolute z-10 -top-[180px] group w-full px-3 bg-white rounded-[20px] shadow-md left-1/2 right-1/2 -translate-x-1/2">
          <Link href={"/"} className="block py-2">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={270}
              height={45}
              className="mx-auto mb-2"
            />
          </Link>
          <p className="max-w-[300px] text-center text-[#292929] font-light text-[12px] mx-auto mb-2 group-hover:text-[#309E5F]">
            “O‘zagrosug‘urta” AJ universal sug`urta kompaniyalaridan biri
            bo`lib, barcha turdagi avtosug`urta, Uzagrosug`urta va boshqa
            yuridik va jismoniy shaxslarga 140 dan ortiq sug`urta qilish
            xizmatlarini ko`rsatadi.
          </p>
          <div className="flex items-center justify-center py-2">
            <Link
              href={"https://www.facebook.com/agros.uz/"}
              target="_blank"
              className="p-3 rounded-[10px] shadow-l me-1 bg-facebook hover:opacity-80"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"https://t.me/uzagrosugurta_aj"}
              target="_blank"
              className="p-3 rounded-[10px] shadow-l me-1  bg-telegram hover:opacity-80"
            >
              <SiTelegram />
            </Link>
            <Link
              href={"tel:1186"}
              target="_blank"
              className="p-3 rounded-[10px] shadow-l me-1  bg-phone hover:opacity-80"
            >
              <FaPhone />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCRw21DTqA9O1D1DhxX1uMtA"}
              target="_blank"
              className="p-3 rounded-[10px] shadow-l me-1 bg-red-dark hover:opacity-80"
            >
              <TfiYoutube />
            </Link>
            <Link
              href={"https://www.instagram.com/uzinsurance/"}
              target="_blank"
              className="p-3 rounded-[10px] shadow-l me-1 bg-instagram hover:opacity-80"
            >
              <FaInstagram />
            </Link>
          </div>
          <div className="my-2 bg-[#6c757d] h-[0.5px]"></div>
          <p className="text-center text-[#292929] pt-1 pb-4 text-[11px] group-hover:text-[#309E5F]">
            © “O'zagrosug'urta” aksiyadorlik jamiyati
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 min-h-[60px] w-full bg-white z-40 shadow-lg rounded-t-[15px] transition-all items-end duration-300 flex justify-between px-3">
        {footerIcons.map((item) => (
          <Link
            key={item.id}
            href={"#"}
            className="flex items-center px-3 flex-col pt-2 min-w-[60px]"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={28}
              height={28}
              className="mb-1"
            />
            <span className="text-[10px]">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterMobile;
