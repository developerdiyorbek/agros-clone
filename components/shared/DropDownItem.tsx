import { IDropdown } from "@/types";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

function DropDownItem({ title, items }: IDropdown) {
  return (
    <div className="relative inline-block group">
      <button className="px-2 py-2 focus:outline-none transition-colors duration-200 flex items-center gap-[1px] text-[14px] group-hover:text-[#2A9E43] font-semibold">
        {title}
        <IoIosArrowDown size={13} />
      </button>
      <ul className="absolute z-[50] left-1/2 min-w-[330px] transform -translate-x-1/2 mt-3 w-40 bg-white rounded shadow-xl opacity-0 scale-y-0 origin-top transition-all duration-300 ease-in-out  group-hover:opacity-100 group-hover:scale-y-100">
        {items.map((item) => (
          <li
            key={item.id}
            className="block cursor-pointer border-b text-[13px]"
          >
            <Link
              href="#"
              className="block px-4 py-2  hover:text-white hover:bg-[#2A9E43] transition-colors duration-200"
            >
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownItem;
