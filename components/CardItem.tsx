import Image from "next/image";

interface IItem {
  id: number;
  header?: string;
  title: string;
}

function CardItem({ item }: { item: IItem }) {
  return (
    <div className="min-h-[230px] relative rounded-[20px] gap-6 shadow-custom text-center">
      {item.header && (
        <h4 className="rounded-t-[20px] w-full absolute text-white bg-[#E6BC62] py-[2px] text-[12px]">
          {item.header}
        </h4>
      )}
      <div className="size-[150px] mt-4 relative mx-auto max-md:size-[110px]">
        <Image
          src={`/poliseImage/item${item.id}.png`}
          alt={`card-image-${item.id}`}
          fill
        />
      </div>

      <p className="text-[15px] px-1 mb-2 max-md:text-[14px]">{item.title}</p>
    </div>
  );
}

export default CardItem;
