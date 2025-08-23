export default function ProductInfo() {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-start w-1/2 gap-2">
        <div className="text-2xl">Descrição</div>
        <div className="text-secondary-100 font-bold text-3xl">10,00</div>
        <div>cores::</div>
      </div>
      <div className="w-1/2">avaliações</div>
    </div>
  );
}
