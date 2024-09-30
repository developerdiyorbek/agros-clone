import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <Image src={"/logo.png"} alt="Logo" width={200} height={34} />
    </Link>
  );
}

export default Logo;
