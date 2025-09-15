"use client";
import { Navigator } from "@/components/Navigator/Index";
import { SettingsContainer } from "@/components/Containers/Settings/Index";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProfilePage() {
  const options = [
    {
      icon: "tabler:settings",
      text: "Minhas Compras",
      navigate: "purchases",
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
  ];

  const optionsB = [
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
          Meu Perfil
        </h2>

        <SettingsContainer>
          <div className="flex items-center gap-5">
            <Image
              src="https://media.istockphoto.com/id/610259354/pt/foto/jovem-mulher-usando-dslr-c%C3%A2mara.jpg?s=1024x1024&w=is&k=20&c=EF6UOb8VhvUg5oNRARbHFADgD1DLt5T7kKxLFJ02RwU="
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full w-18 h-18"
            />
            <div>
              <p className="text-white text-xl font-bold">Nome</p>
              <hr className="border-primary-100 border-b-2" />
            </div>
          </div>
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
        <SettingsContainer>
          {optionsB.map((option) => (
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

const Items = ({
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
