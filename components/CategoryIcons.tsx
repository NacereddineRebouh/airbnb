import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
};

export default function CategoryIcons({ icon, title }: Props) {
  const radio = `Icon-radio-${title.replace(/\s/g, "")}`;
  return (
    <div className="bg-white flex flex-col justify-center gap-2 items-center self-end rounded-lg group transition-all duration-500 hover:text-black/80 ">
      <input
        type="radio"
        id={radio}
        name="hosting"
        value={radio}
        className="hidden peer"
        required
      />
      <label
        htmlFor={radio}
        className="flex flex-col justify-center gap-2 items-center cursor-pointer peer-checked:cursor-default peer-checked:text-black group"
      >
        {icon}
        <p className="text-[12.5px]">{title}</p>
      </label>
      <div className="rounded-full h-[2.8px] w-full transition-all bg-white duration-500 group-hover:bg-[#888888]/40 peer-checked:bg-gray-800 " />
    </div>
  );
}
