import React from "react";
import { getAllServices, getServiceContent } from "@/utils/service";
import MainSearviceComponent from "./_components/MainSearviceComponent";

export default async function ServicesPage() {
  let serviceContent = {};
  let services = [];

  try {
    serviceContent = (await getServiceContent()) || {};
  } catch (error) {
    console.error("Failed to fetch service content:", error);
    serviceContent = {};
  }

  try {
    services = (await getAllServices()) || [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    services = [];
  }

  return (
    <>
      <MainSearviceComponent
        serviceContent={serviceContent || {}}
        services={services || []}
      />
    </>
  );
}
