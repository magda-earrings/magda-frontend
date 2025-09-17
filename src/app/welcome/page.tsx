"use client";
import magdaLogo from "/public/images/magda-logo.svg";
import Image from "next/image";

export default function LoginLayout() {
  return (
    <section className="text-white bg-[url('/images/magda-background.svg')] h-[100vh] bg-cover bg-no-repeat flex flex-col">
      <div className="flex justify-center items-center">
        <Image src={magdaLogo} alt="Magda Logo" className="h-[240px]" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <p
          onClick={() => {
            localStorage.setItem("welcome", "true");
            window.location.href = "/magda/store";
          }}
          className="text-center text-4xl cursor-pointer font-medium w-fit m-auto animate-blink drop-shadow-[0px_0px_10px_#007FFF]"
        >
          clique aqui e faça <br /> parte de tudo isso!
        </p>
        <style jsx>{`
          @keyframes blink {
            0%, 100% { filter: drop-shadow(0px 0px 15px #007FFF); }
            50% { filter: drop-shadow(0px 0px 5px #007FFF); }
          }
          .animate-blink {
            animation: blink 3s infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
