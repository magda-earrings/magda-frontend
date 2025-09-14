import { CheckoutCart } from "@/components/CheckoutBar";

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-[#EDEDF4]">
      <main className="p-6 mt-10">{children}</main>
      <CheckoutCart />
    </div>
  );
}
