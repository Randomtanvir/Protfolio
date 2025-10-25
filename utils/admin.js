export const getAdminInfo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin`, {
      method: "GET",
      next: { revalidate: 30 }, // revalidate every 30 seconds
    });

    if (!res.ok) {
      console.error("Failed to fetch admin info:", res.status, res.statusText);
      return {};
    }

    const result = await res.json();

    if (result?.success) {
      return result?.data || {}; // Return admin data
    } else {
      console.error("Failed to fetch admin:", result?.message);
      return {};
    }
  } catch (error) {
    console.error("Error fetching admin info:", error);
    return {};
  }
};
