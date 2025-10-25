export const getAboutInfo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, {
      method: "GET",
      next: { revalidate: 30 }, // revalidate every 10 seconds
    });

    if (!res.ok) {
      console.error("Failed to fetch about:", res.statusText);
      return {};
    }

    const result = await res.json();

    if (result.success) {
      return result?.data || {}; // Return the about data
    } else {
      console.error("Failed to fetch about:", result.message);
      return {};
    }
  } catch (error) {
    console.error("Error fetching about:", error);
    return {};
  }
};
