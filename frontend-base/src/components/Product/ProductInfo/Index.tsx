import { useEffect } from "react";

export default function ProductInfo({
  itemName,
  itemValue,
  colors,
  onClick,
  selectedColor,
}: {
  itemName: string;
  itemValue: number;
  colors: string[];
  onClick: (color: string) => void;
  selectedColor: string | null;
}) {
  useEffect(() => {
    onClick(colors[0]);
  }, []);

  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-start w-1/2 gap-2">
        <div className="text-2xl">{itemName ?? "N/A"}</div>
        <div className="text-secondary-100 font-bold text-3xl">
            R$ {itemValue?.toFixed(2).replace(".", ",") ?? "N/A"}
        </div>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <span
              onClick={() => onClick(color)}
              key={index}
              style={{ backgroundColor: color }}
              className={`w-7 h-7 rounded-full border-2 hover:scale-110 transition-transform cursor-pointer ${
                selectedColor === color ? "border-black" : "opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}
