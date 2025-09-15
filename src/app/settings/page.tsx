"use client";
import { Navigator } from "@/components/Navigator/Index";
import { SettingsContainer } from "@/components/Containers/Settings/Index";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { options, optionsB } from "./options.js";

export default function SettingsPage() {
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
