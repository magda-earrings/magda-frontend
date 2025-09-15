import { SettingsContainer } from "@/components/Containers/Settings/Index";

export default function SocialPage() {
  return (
    <section className="p-4 flex flex-col gap-10">
      <h2 className="text-3xl font-bold text-white text-center py-10">
        Nos siga em nossas redes sociais!
      </h2>
      <SettingsContainer>
        <InfoField title="Instagram" text="instagram.com/magdabyb" />
        <InfoField title="Tiktok" text="tiktok.com/@magdabyb" />
      </SettingsContainer>
    </section>
  );
}

const InfoField = ({title,text}: {title: string; text: string}) => {
    return(
        <div className="p-1 flex flex-col gap-1">
          <p className="text-white font-bold text-xl">{title}</p>
          <div className="bg-[#EDEDF4] p-2 rounded-md text-secondary-100 text-xl font-bold text-center">
            <a href={`https://${text}`} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          </div>
        </div>
    )
}