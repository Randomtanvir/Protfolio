export const getProfileInfo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
      method: "GET",
      next: { revalidate: 30 }, // revalidate every 10 seconds
    });
    const result = await res.json();
    if (result?.success) {
      return result?.data || {}; // Return the profile data
    } else {
      console.error("Failed to fetch profile:", result?.message);
      return null;
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};
