"use client";

interface Props {
  title: string;
  fileName: string;
  setFileName: (name: string) => void;
  id: number;
}

const VisuallyHiddenInput = ({ title, fileName, setFileName, id }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <label
      htmlFor={`salary${id}`}
      className="w-full border-dashed border-[2px] px-3 hover:bg-[#eee] transition-colors border-[#555] rounded-[15px] h-[100px] items-center justify-center cursor-pointer flex flex-col"
    >
      <span className="text-[#444] text-[14px]">{title}</span>
      <input
        type="file"
        name={title}
        id={`salary${id}`}
        accept=".jpg,.png,.pdf"
        onChange={handleFileChange}
        className="hidden"
      />
      {fileName && <p className="mt-2 text-sm text-[#444]">{fileName}</p>}
    </label>
  );
};

export default VisuallyHiddenInput;
