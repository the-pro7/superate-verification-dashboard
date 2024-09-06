"use server"
// Gey user role to make requests with
import { ILoginProps, RoleType } from "@/types/app-type";

// const accessToken: string | null = localStorage.getItem("accessToken") || null

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

const approveUser = async (
  accessToken: string,
  role: string,
  id: string
) => {
  const fetchOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ is_approved: true }),
  };

  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL}${role}-verification-details/${id}`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
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
      `${process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL}${role}-verification-details/${id}`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export { login, getVerificationDetails, approveUser };
