import { getAdminInfo } from "@/actions/fetcher";
import PasswordChangeForm from "./PasswordChangeForm";
import ProfileChangeForm from "./ProfileChangeForm";
export const dynamic = "force-dynamic";

export default async function AdminSetting() {
  let admin = {};

  try {
    admin = (await getAdminInfo()) || {}; // runtime fetch
  } catch (error) {
    console.error("Failed to fetch profile info:", error);
    admin = {}; // fallback
  }

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-700 to-[#ff002b] bg-clip-text text-transparent mb-4">
            Admin Profile Settings
          </h1>
          <p className="text-gray-300 text-lg">
            Manage your profile and security settings
          </p>
        </div>

        {/* Success Message */}
        {/* {successMessage && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-pulse">
            <Check className="w-5 h-5" />
            {successMessage}
          </div>
        )} */}

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Profile Settings Card */}
          <ProfileChangeForm admin={admin || []} />
          {/* Password Settings Card */}
          <PasswordChangeForm />
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Keep your information secure and up to date
          </p>
        </div>
      </div>
    </div>
  );
}
