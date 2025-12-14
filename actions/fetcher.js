"use server";

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
