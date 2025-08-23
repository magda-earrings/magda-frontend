"use client";
import { useState } from "react";
import { FormContainer, LoginForm, RegisterForm } from "./styles";
import magdaLogo from "/public/images/magda-logo.svg";
import Image from "next/image";

export default function LoginLayout() {
  const [register, setRegister] = useState(false);
  return (
    <section className="text-white bg-[url('/images/magda-background.svg')] h-[100vh] bg-cover bg-no-repeat flex flex-col justify-between">
      <div className="flex justify-center items-center">
        <Image src={magdaLogo} alt="Magda Logo" className="h-[240px]" />
      </div>

      <FormContainer className="text-primary-100">
        {register == false ? (
          <>
            <h1 className="font-bold text-5xl ">Log in</h1>
            <LoginForm onClick={() => setRegister(true)} />
          </>
        ) : (
          <>
            <h1 className="font-bold text-5xl ">Cadastro</h1>
            <RegisterForm onClick={() => setRegister(false)} />
          </>
        )}
      </FormContainer>
    </section>
  );
}
