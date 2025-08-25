"use client";
import { Navigator } from "@/components/Navigator/Index";
import { SettingsContainer } from "@/components/Containers/Settings/Index";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const options = [
    {
      icon: "tabler:settings",
      text: "Sobre nós",
      navigate: "about-us",
    },
    {
      icon: "tabler:settings",
      text: "Minhas Compras",
      navigate: "my-purchases",
    },
    {
      icon: "tabler:settings",
      text: "Redes sociais",
      navigate: "social",
    },
    {
      icon: "tabler:settings",
      text: "Fale conosco",
      navigate: "contact",
    },
    {
      icon: "tabler:settings",
      text: "Termos de uso",
      navigate: "terms",
    },
  ];
  return (
    <>
      <section className="h-full flex flex-col gap-10">
        <h2 className="text-2xl font-bold text-white m-auto p-10">
          Configurações
        </h2>
        <SettingsContainer>
          {options.map((option) => (
            <div key={option.navigate}>
              <hr className="my-2 mx-1 border-[#EDEDF4]/20" />
              <Items
                icon={option.icon}
                text={option.text}
                navigate={option.navigate}
              />
            </div>
          ))}
          <hr className=" my-2 mx-1 border-[#EDEDF4]/20" />
        </SettingsContainer>
        <SettingsContainer>
          {options.map((option) => (
            <div key={option.navigate}>
              <hr className="my-2 mx-1 border-[#EDEDF4]/20" />
              <Items
                icon={option.icon}
                text={option.text}
                navigate={option.navigate}
              />
            </div>
          ))}
          <hr className=" my-2 mx-1 border-[#EDEDF4]/20" />
        </SettingsContainer>
      </section>
      <div className="fixed bottom-0 w-full">
        <Navigator className="!bg-[#F79D5C]" />
      </div>
    </>
  );
}

export const Items = ({
  icon,
  text,
  navigate,
}: {
  icon: string;
  text: string;
  navigate: string;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/settings/options/${navigate}`)}
      className="flex items-center gap-10 text-white text-lg justify-between cursor-pointer"
    >
      <Icon icon={icon} className="text-3xl bg-primary-100 p-1 rounded-md" />
      <p className="flex-1">{text}</p>
      <Icon icon="tabler:caret-right-filled" className="text-3xl" />
    </div>
  );
};
