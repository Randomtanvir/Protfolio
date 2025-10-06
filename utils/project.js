export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
      cache: "no-store",
    });
    const result = await res.json();
    return result.data || [];
  } catch (error) {
    console.log("Error fetching service content:", error);
  }
};
