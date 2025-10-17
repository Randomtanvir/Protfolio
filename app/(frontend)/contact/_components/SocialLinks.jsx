import { Image } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { getProfileInfo } from "@/utils/profile";

const SocialLinks = () => {
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getSocial = async () => {
      try {
        setLoading(true);
        const data = await getProfileInfo();
        setSocials(data?.socialLinks);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSocial();
  }, []);

  return (
    <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
      <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
        Follow Me
      </h5>
      <div className="flex space-x-4">
        {socials.length > 0 &&
          socials?.map((social, i) => (
            <motion.a
              key={social._id}
              href={social?.username}
              {...fadeInUp(0.6 + i * 0.1)}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center group hover:bg-blue-500 transition-colors"
            >
              <img
                src={social?.platform}
                alt={social?.icon}
                width={20}
                height={20}
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
      </div>
      {loading && <div className="loader w-2 h-2"></div>}
    </div>
  );
};

export default SocialLinks;
