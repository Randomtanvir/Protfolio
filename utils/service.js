export const getServiceContent = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/serviceContent`,
      {
        cache: "no-store",
      }
    );
    const result = await res.json();
    console.log(result);
    return result.data || {};
  } catch (error) {
    console.log("Error fetching service content:", error);
  }
};

export const getAllServices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, {
      cache: "no-store",
    });
    const result = await res.json();
    console.log(result);
    return result.data || [];
  } catch (error) {
    console.log("Error fetching service:", error);
  }
};
