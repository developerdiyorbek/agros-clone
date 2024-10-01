import FooterMobile from "./FooterMobile";
import FooterTop from "./FooterTop";

function Footer() {
  return (
    <footer>
      <FooterTop />
      <div className="py-5 bg-[#2A9E43] text-center text-[13px] text-white max-md:hidden">
        2024 Uzinsurance. Barcha huquqlar himoyalangan
      </div>
      <FooterMobile />
    </footer>
  );
}

export default Footer;
