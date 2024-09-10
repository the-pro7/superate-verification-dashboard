"use server";
// Gey user role to make requests with
import { ILoginProps, RoleType } from "@/types/app-type";
import { revalidatePath } from "next/cache";

// POST
// api/auth/login
const login = async (reqBody: ILoginProps) => {
  try {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}login/brand/`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// GET
// api/admin/admin/brands-verification-details
const getVerificationDetails = async <T, V>(
  accessToken: string,
  role: RoleType
): Promise<T[] | V[]> => {
  const fetchOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  // Make the call
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL}${role}-verification-details/`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    let data: T[] | V[] = await response.json();

    return data;
  } catch (error: any) {
    console.log(error);
    return [];
  }
};

const approveUser = async (accessToken: string, role: string, id: string) => {
  // Construct the request body
  const body = JSON.stringify({ is_approved: true });

  // Set up fetch options
  const fetchOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: body,
  };

  // Construct the API URL
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL}${role}-verification-details/${id}/`;

  try {
    // Make the request
    const response = await fetch(apiUrl, fetchOptions);
    // Check if the response is okay
    if (!response.ok) {
      // Log the full response object for debugging
      console.log(`Response Error: ${response.statusText}`);
      const errorData = await response.json();
      console.log("Error Details:", errorData);
    }

    // Parse and return the response data
    const data = await response.json();
    console.log(`Data: ${data.is_approved}`);
    // refetch data on path
    revalidatePath("/admin-dashboard/verification-overview");
    // return data;
  } catch (error) {
    // Handle and log any errors
    console.error("Request failed:", error);
  }
};

const disapproveUser = async (
  accessToken: string,
  role: string,
  id: string,
  declination_reason: string
) => {
  const fetchOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ is_denied: true, declination_reason }),
  };

  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL}${role}-verification-details/${id}/`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    let data = await response.json();
    console.log(`Data ${data.declination_reason}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const getSingleVerificationDetail = async (
  accessToken: string,
  role: string,
  id: string
) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL}${role}-verification-details/${id}/`;

  console.log(`apiUrl : ${apiUrl}`);
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(apiUrl, fetchOptions);

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export {
  login,
  getVerificationDetails,
  approveUser,
  disapproveUser,
  getSingleVerificationDetail,
};
