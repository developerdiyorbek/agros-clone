import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

function FormWrapper({ children, title }: Props) {
  return (
    <div className="w-full shadow rounded-[15px] mt-24 mb-24 max-md:mb-44">
      <div className="bg-[#2A9E43] p-2 text-center rounded-t-[15px] mb-4">
        <p className="text-[16px] font-medium text-white">{title}</p>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

export default FormWrapper;
