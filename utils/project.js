export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
      next: { revalidate: 10 }, // ✅ 10 সেকেন্ডে fresh data
    });

    const result = await res.json();
    return result?.data || [];
  } catch (error) {
    console.log("Error fetching project data:", error);
    return [];
  }
};
