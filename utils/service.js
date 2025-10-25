export const getServiceContent = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/serviceContent`,
      {
        method: "GET",
        next: { revalidate: 30 }, // revalidate every 10 seconds
      }
    );
    const result = await res.json();
    return result?.data || {};
  } catch (error) {
    console.log("Error fetching service content:", error);
    return {};
  }
};

export const getAllServices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, {
      next: { revalidate: 10 },
    });
    const result = await res.json();
    return result?.data || [];
  } catch (error) {
    console.log("Error fetching service:", error);
    return [];
  }
};
