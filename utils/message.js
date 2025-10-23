export const getAllMessages = async (search = "", page = 1, limit = 5) => {
  try {
    const res = await fetch(
      `/api/message?search=${encodeURIComponent(
        search
      )}&page=${page}&limit=${limit}`,
      {
        method: "GET",
        next: { revalidate: 30 }, // revalidate every 10 seconds
      }
    );

    const result = await res.json();
    return result;
  } catch (error) {
    console.log("Error fetching messages:", error);
    return { data: [], total: 0, totalPages: 1 };
  }
};
