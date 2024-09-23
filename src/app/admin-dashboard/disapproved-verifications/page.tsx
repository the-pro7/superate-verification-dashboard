"use client";
import TopNav from "@/components/dashboard-topnav/TopNav";
import PageText from "@/components/page-text/PageText";
import RoleSwitcher, {
  RoleSwitchContext,
} from "@/components/role-switcher/RoleSwitcher";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { isOnClientSide } from "@/components/verification-log-view/VerificationLogsView";
import { useVerificationDetails } from "@/hooks/query";
import {
  IBrandVerificationType,
  IInfluencerVerificationType,
} from "@/types/app-type";
import isbrandVerification from "@/utils/switchType";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import DeclinationReasonForm from "@/components/decline-reason-form/DeclinationReasonForm";
import { Button } from "@/components/ui/button";
import { disapproveUser } from "@/utils/dataFetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const DisapprovedVerificationsPage = () => {
  const [query, setQuery] = useState<string>("");
  const [declination_reason, setDeclination_reason] = useState<string>("");

  const [edit, setEdit] = useState<boolean>(false);

  const { role } = useContext(RoleSwitchContext);
  // Access token from session storage
  const accessToken = isOnClientSide
    ? sessionStorage.getItem("accessToken")
    : null;

  const { data, error, isLoading } = useVerificationDetails<
    IBrandVerificationType,
    IInfluencerVerificationType
  >(accessToken!, role!);

  const filteredData = data?.filter((item) => item.is_denied === true);
  const showableData = filteredData?.filter((item) =>
    isbrandVerification(item)
      ? item.full_legal_name.toLocaleLowerCase().includes(query)
      : item.full_name.toLocaleLowerCase().includes(query)
  );

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (params: { id: string }) => {
      return disapproveUser(accessToken!, role, params.id, declination_reason);
    },
    onSuccess: () => {
      // Invalidate the query to fetch the path
      queryClient.invalidateQueries({
        queryKey: [role, "verification-details"],
      });
      // Show a success toast for the successful disapproval
      toast.success(`Edited declination reason successfully!`);
      setEdit(false);
    },
    onError: () => {
      toast.error(`Failed to edit declination reason Try again!`);
    },
  });

  async function handleChange(e: FormEvent<HTMLFormElement>, id: string) {
    e.preventDefault();
    if (!declination_reason) {
      alert("Enter a declination reason");
      return false;
    } else {
      try {
        // Asynchronously mutate with the declination reason from the form
        await mutateAsync({ id });
      } catch (error) {
        // Just do something with the error IDK
        console.log(`An error stopped everything! -> ${error}`);
      }
    }
  }

  return (
    <div>
      <TopNav
        pageText="Disapproved Verifications"
        query={query}
        setQuery={setQuery}
      />
      <div className="flex justify-between items-center">
        <PageText />
        <RoleSwitcher />
      </div>

      {query && (
        <div className="font-semibold text-xl mt-2">
          Search results for &apos;{query}&apos;
        </div>
      )}
      {/* Something for loading UI */}
      {isLoading && (
        <h3 className="font-semibold text-2xl text-center mt-5">
          Loading disapproved verifications...
        </h3>
      )}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {showableData && showableData.length !== 0 ? (
          showableData.map((item) => (
            // <VerificationLog />
            <Card key={item.id} className="mt-4 w-full overflow-clip shadow-lg">
              <CardHeader className="relative h-40 grid">
                <Image
                  src={
                    isbrandVerification(item)
                      ? item.government_issued_business_id_image
                      : item.government_issued_id_image
                  }
                  fill
                  alt="Government issued ID image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover col-span-1 row-span-1"
                />
                <span className="col-span-1 row-span-1 z-10 bg-white h-fit w-fit py-1 px-4 rounded-full text-sm shadow-xl font-semibold">
                  Government ID Image
                </span>
              </CardHeader>
              <CardContent className="mt-2">
                <div className="flex gap-2 items-center">
                  <div className="relative w-14 h-14 rounded-full shadow-lg overflow-clip">
                    <Image
                      src={item.selfie_image}
                      alt={`${role} selfie image`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardTitle className="flex gap-2">
                    <h1>
                      {isbrandVerification(item)
                        ? item.full_legal_name
                        : item.full_name}
                    </h1>
                    {/* <span>
                      <RiVerifiedBadgeFill />
                    </span> */}
                  </CardTitle>
                </div>
                <CardDescription>
                  {isbrandVerification(item)
                    ? `Location - ${item.location}`
                    : `Country - ${item.country}`}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Label className="self-start inline-flex gap-2 items-center text-sm">
                  Declination reason{" "}
                  <MdOutlineModeEdit
                    className="text-xl cursor-pointer "
                    title="Edit declination reason"
                    onClick={() => setEdit((prev) => !prev)}
                  />
                </Label>
                {edit && (
                  <form
                    className="w-full flex flex-col gap-2"
                    onSubmit={(e) => handleChange(e, String(item.id))}
                  >
                    <Textarea
                      autoFocus
                      value={declination_reason}
                      onChange={(e) => setDeclination_reason(e.target.value)}
                      placeholder={item.declination_reason}
                    />
                    <Button disabled={isPending}>
                      {isPending ? "Submitting" : "Submit"}
                    </Button>
                  </form>
                )}
              </CardFooter>
            </Card>
          ))
        ) : (
          <div suppressHydrationWarning>
            {isLoading ? "Loading verification data" : "No data to be shown"}
          </div>
        )}
      </section>
    </div>
  );
};

export default DisapprovedVerificationsPage;
