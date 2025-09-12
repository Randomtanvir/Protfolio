import React from "react";
import { getAllServices, getServiceContent } from "@/utils/service";
import MainSearviceComponent from "./_components/MainSearviceComponent";

export default async function ServicesPage() {
  const serviceContent = await getServiceContent();
  const services = await getAllServices();
  return (
    <>
      <MainSearviceComponent
        serviceContent={serviceContent}
        services={services}
      />
    </>
  );
}
