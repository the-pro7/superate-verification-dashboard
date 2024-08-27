import LoginForm from "@/components/form/login-form/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <main className="w-full h-screen mx-auto max-w-xl flex items-center justify-center flex-col gap-4 rounded-md shadow-xl">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold tracking-wider">
          Superate Authorization
        </h2>
        <p className="text-sm font-medium tracking-wide text-center text-neutral-500">
          Let&apos;s verify that you&apos;re an admin.
        </p>
      </div>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
