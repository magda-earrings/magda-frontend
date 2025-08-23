export default function CheckoutBar() {
  return (
    <nav className="bg-[#F79D5C] p-2 sticky bottom-0 z-10">
      <ul className="flex justify-around">
        <li className="w-1/3">
          <button className="text-xl font-bold shadow-md shadow-[#00000040] rounded-md p-2 w-full bg-[#EDEDF4] text-primary-100">
            Carrinho
          </button>
        </li>
        <li className="w-1/3">
          <button className="text-xl font-bold shadow-md shadow-[#00000040] rounded-md p-2 w-full bg-secondary-100 text-white">
            Comprar
          </button>
        </li>
      </ul>
    </nav>
  );
}
