export const getAboutInfo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, {
      method: "GET",
      revalidate: 10, // revalidate every 10 seconds
    });
    const result = await res.json();

    if (result.success) {
      return result.data || {}; // Return the profile data
    } else {
      console.error("Failed to fetch about:", result.message);
      return null;
    }
  } catch (error) {
    console.error("Error fetching about:", error);
    return null;
  }
};
