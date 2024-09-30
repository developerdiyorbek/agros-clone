import { links } from "@/constants";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";
import DropDownItem from "./DropDownItem";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <header>
      <HeaderTop />
      <div className="shadow-lg">
        <div className="container max-md:px-4 mx-auto py-3 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-1 max-md:hidden">
            {links.map((link) => (
              <DropDownItem
                key={link.id}
                title={link.title}
                items={link.items}
              />
            ))}
          </div>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
