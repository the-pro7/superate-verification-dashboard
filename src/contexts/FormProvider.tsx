"use client";
import React, { createContext, useState, useContext } from "react";

type ContextType = {
  typeOfForm: "brandForm" | "influencerForm";
  changeTypeOfForm: () => void;
};

const FormContext = createContext<ContextType>({
  typeOfForm: "brandForm",
  changeTypeOfForm: () => {},
});

export const useFormData = () => useContext(FormContext);

const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [typeOfForm, setTypeOfForm] = useState<"brandForm" | "influencerForm">(
    "brandForm"
  );

  // Function to change type of form
  function changeTypeOfForm() {
    setTypeOfForm((prev) => {
      return prev == "brandForm" ? "influencerForm" : "brandForm";
    });
  }

  return (
    <FormContext.Provider value={{ typeOfForm, changeTypeOfForm }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
