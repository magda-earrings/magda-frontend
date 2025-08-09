import { ReactNode } from "react";
import { Icon } from "@iconify/react";
type FormContainerProps = {
  children: ReactNode;
  className?: string;
};

export const FormContainer = ({ children, className }: FormContainerProps) => {
    return(
        <section className={`bg-[#EDEDF4] rounded-t-[50px] p-8 ${className} shadow-[0px_0px_30px_10px]/40 shadow-black gap-10 flex-col flex`}>
            {children}

            <Input placeholder="Email" icon={'mdi:email'} />
            <Input placeholder="Password" icon={'mdi:lock'} />
        </section>
    )
}

export const FormLogin = () => {
    return(
        <div className={``}>
            
        </div>
    )
}

export const InputBase = () => {

}

export const InputContainer = () => {
    return(
        <div className={``}>

        </div>
    )
}

export const Input = ({ placeholder, icon }: { placeholder: string, icon: string }) => {
    return(
        <div className="text-2xl text-gray-400 w-full bg-white inset-shadow-[0px_6px_10px_0px]/20 rounded-2xl inset-shadow-black flex items-center p-2 gap-1">
            <Icon className="opacity-50" icon={icon} />
            <input type="text" className="z-10 outline-none w-full" placeholder={placeholder} />
        </div>
    )
}