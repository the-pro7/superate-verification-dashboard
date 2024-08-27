// "use client";
// import React, { SetStateAction, useRef } from "react";
// import LoginForm from "../form/login-form/LoginForm";
// import { Button } from "../ui/button";
// import { IoClose } from "react-icons/io5";
// import { usePathname } from "next/navigation";

// type AuthDialogType = {
//   openDialog?: boolean;
//   setOpenDialog?: React.Dispatch<SetStateAction<boolean>>;
// };

// const AuthDialog: React.FC<AuthDialogType> = ({
//   openDialog,
//   setOpenDialog,
// }) => {
//   const dialogRef = useRef<HTMLDialogElement>(null);
//   const pathname = usePathname()
  

//   // Function to close the dialog element
//   function closeDialog() {
//     openDialog && dialogRef.current?.close();
//     // Check if setOpenDialog is provided
//     if (typeof setOpenDialog !== "undefined") {
//       setOpenDialog(false);
//     }
//   }

//   if (openDialog) {
//     dialogRef.current?.showModal();
//   }

//   return (
//     <dialog ref={dialogRef} className="p-4 w-4/12 overflow-clip rounded-lg" open={pathname.includes("/login")}>
//       <div className="flex items-end justify-end">
//         <Button
//           type="button"
//           onClick={closeDialog}
//           title="Close Dialog"
//           className="font-light bg-gray-500 text-white hover:bg-black mb-3 rounded-full"
//         >
//           <IoClose className="text-2xl" />
//         </Button>
//       </div>
//       <div className="my-2 flex flex-col gap-2 items-center">
//         <h2 className="text-2xl font-bold tracking-wider">
//           Superate Authorization
//         </h2>
//         <p className="text-sm font-medium tracking-wide text-center text-neutral-500">
//           Let&apos;s verify that you&apos;re an admin.
//         </p>
//       </div>
//       <LoginForm />
//     </dialog>
//   );
// };

// export default AuthDialog;
