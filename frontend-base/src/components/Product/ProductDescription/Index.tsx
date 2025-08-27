export default function ProductDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 text-xl">
      <h2 className="font-bold">Descrição</h2>
      <p className="font-medium">{description}</p>
    </div>
  );
}
