import Link from "next/link";

interface Props {
  title: string;
}

function HamburgerLinkItem({ title }: Props) {
  return (
    <Link
      href={"#"}
      className="hover:text-[#28a745] transition-colors duration-200 text-[14px] border-b py-[6px]"
    >
      {title}
    </Link>
  );
}

export default HamburgerLinkItem;
