const accessToken: string | null = localStorage.getItem("accessToken") || null
interface ILoginProps {
  username: string;
  email: string;
  password: string;
}


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
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/login/brand/`,
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
const getBrandsVerificationDetails = async () => {
  const fetchOptions = {
    method: "GET",
    Authorization: `Bearer ${accessToken!}`

  }
  try {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL}/brand-verification-details/`, fetchOptions)

    if(!response.ok) {
      throw new Error("Something went wrong")
    }

    let data: object[] = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

export { login, getBrandsVerificationDetails };
