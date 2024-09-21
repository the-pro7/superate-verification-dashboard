import LoginForm from "@/components/form/login-form/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <main className="h-screen flex items-center justify-center ">
      <div className="w-full p-5 py-8 max-w-xs md:max-w-md lg:max-w-lg flex flex-col gap-3 rounded-lg shadow-xl">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold tracking-wider text-center">
            Superate Authorization
          </h2>
          <p className="text-sm font-medium tracking-wide text-center text-neutral-500">
            Let&apos;s verify that you&apos;re an admin.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
