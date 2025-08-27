export default function ProductInfo({
  itemName,
  itemValue,
  colors,
}: {
  itemName: string;
  itemValue: string;
  colors: string[];
}) {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-start w-1/2 gap-2">
        <div className="text-2xl">{itemName ?? "N/A"}</div>
        <div className="text-secondary-100 font-bold text-3xl">
          {itemValue ?? "N/A"}
        </div>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="w-7 h-7 rounded-full border border-black"
            />
          ))}
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}
