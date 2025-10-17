import React from "react";
import SocialLinks from "./SocialLinks";
import InfoCard from "./InfoCard";

const ContactInfo = () => {
  return (
    <>
      <div className="space-y-6">
        <InfoCard
          icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          color="blue"
          value="tanvir.info07@gmail.com"
          label="Email"
        />
        <InfoCard
          icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          color="purple"
          value="01639-528846"
          label="Phone"
        />
        <InfoCard
          icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          color="indigo"
          value="Khulna,Terokhada"
          label="Location"
        />

        {/* Social Links */}
        <SocialLinks />
      </div>
    </>
  );
};

export default ContactInfo;
