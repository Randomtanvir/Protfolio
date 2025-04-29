import Image from "next/image";

const TechIcon = ({ name }) => {
  return (
    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800/50 dark:bg-white/10">
      <Image
        src={name}
        alt={"name"}
        width={20}
        height={20}
        className="object-contain"
      />
    </div>
  );
};
export default TechIcon;
