import { SettingsContainer } from "@/components/Containers/Settings/Index";

export default function PurchasesPage(){
    return(
        <section className="flex flex-col gap-10">
            <SettingsContainer>
                <div className="h-140">
                    <div className="bg-[#EDEDF4] w-4/5 max-w-80 h-45 m-auto rounded-md"></div>
                </div>
            </SettingsContainer>

            <div className="text-white text-2xl text-center">
                <a href="/shop" className="font-bold border-b-1 border-white">Adquira mais peças Magdá!</a>
                <p>ou</p>
                <a href="/shop" className="font-bold border-b-1 border-white">Acessar meu carrinho</a>
            </div>
        </section>
    )
}