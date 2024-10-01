import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import { TfiYoutube } from "react-icons/tfi";

function HeaderTop() {
  return (
    <div className={`bg-[#2A9E43] py-2 text-white lg:block hidden`}>
      <div className="container mx-auto flex items-center justify-between text-[14px]">
        <div className="flex items-center gap-4 ">
          <Link
            href={"mailto:info@agros.uz"}
            className="flex items-center gap-1"
          >
            <TbMailFilled />
            <span>info@agros.uz</span>
          </Link>
          <Link href={"tel:+998712160500"} className="flex items-center gap-1">
            <BsFillTelephoneFill />
            <span>+998 (71) 216 - 05 - 00</span>
          </Link>
          <Link href={"tel:1186"}>1186</Link>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href={"https://t.me/uzagrosugurta_aj"}
            target="_blank"
            className="p-1"
          >
            <SiTelegram />
          </Link>
          <Link
            href={"https://www.facebook.com/agros.uz/"}
            target="_blank"
            className="p-1"
          >
            <FaFacebookF />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UCRw21DTqA9O1D1DhxX1uMtA"}
            target="_blank"
            className="p-1"
          >
            <TfiYoutube />
          </Link>
          <Link
            href={"https://www.instagram.com/uzinsurance/"}
            target="_blank"
            className="p-1"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
