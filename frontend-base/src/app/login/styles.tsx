import { ReactNode } from "react";
import { Icon } from "@iconify/react";
type FormContainerProps = {
  children: ReactNode;
  className?: string;
};

export const FormContainer = ({ children, className }: FormContainerProps) => {
  return (
    <section
      className={`bg-[#EDEDF4] rounded-t-[50px] p-8 ${className} shadow-[0px_0px_30px_10px]/40 shadow-black gap-10 flex-col flex`}
    >
      {children}
    </section>
  );
};

export const LoginForm = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Input placeholder="Email" icon={"mdi:email"} />
        <Input placeholder="Password" icon={"mdi:lock"} />
        <a href="#" className="text-xl border-b-1 w-fit leading-[1]">
          Esqueci a senha
        </a>
      </div>

      <LoginButton />

      <div className="flex items-center text-sm text-[#00000080]">
        <span className="flex-1 h-px bg-[#00000080]"></span>
        <span className="px-3">Faça login com</span>
        <span className="flex-1 h-px bg-[#00000080]"></span>
      </div>

      <div className="flex gap-5 m-auto">
        <LoginAuth icon="jam:google" />
        <LoginAuth icon="ic:outline-facebook" />
        <LoginAuth icon="jam:apple" />
      </div>

      <div className="m-auto">
        <span className="text-xl text-[#00000080] pr-1">
          Não tem uma conta?
        </span>
        <a href="#" className="text-xl border-b-1 w-fit leading-[1]">
          Cadastre-se
        </a>
      </div>
    </>
  );
};

export const Input = ({
  placeholder,
  icon,
}: {
  placeholder: string;
  icon: string;
}) => {
  return (
    <div className="text-2xl text-gray-400 w-full bg-white inset-shadow-[0px_6px_10px_0px]/20 rounded-2xl inset-shadow-black flex items-center p-2 gap-1">
      <Icon className="opacity-50" icon={icon} />
      <input
        type="text"
        className="z-10 outline-none w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export const LoginButton = ({}) => {
  return (
    <button
      className={`bg-primary-100 text-white font-medium text-2xl p-2 rounded-2xl`}
    >
      Login
    </button>
  );
};

export const LoginAuth = ({ icon }: { icon: string }) => {
  return (
    <div className="text-4xl bg-primary-100 p-2 w-fit rounded-xl text-white cursor-pointer">
      <Icon icon={icon} />
    </div>
  );
};
