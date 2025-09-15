export default function ProductDetails({
  details
}: {
  details: string[];
}) {
  return (
    <div className="flex flex-col gap-4 text-xl">
      <h2 className="font-bold">Detalhes do Produto</h2>
      {details.map((detail, index) => (
        <p key={index} className="font-medium">
          {detail}
        </p>
      ))}
    </div>
  );
}
