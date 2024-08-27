import { useQuery } from "@tanstack/react-query";
import { getVerificationDetails } from "../utils/dataFetch";
import { RoleType } from "@/types/app-type";

// Custom hooks
export const useVerificationDetails = <T, V>(
  accessToken: string,
  role: RoleType
) => {
  return useQuery({
    queryKey: [role, "verification-details"],
    queryFn: () => getVerificationDetails<T, V>(accessToken, role),
    enabled: !!role && !!accessToken,
  });
};
