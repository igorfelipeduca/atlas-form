import { Chivo_Mono } from "@next/font/google";
import Image from "next/image";

const ChivoMono = Chivo_Mono();

const Footer = () => {
  return (
    <footer className="border-t border-gray-500 py-8 bg-black flex justify-center">
      <code
        className={`font-xl text-white ${ChivoMono.className} flex items-center`}
      >
        Powered by{" "}
        <Image
          src={"https://i.ibb.co/tKZVJVW/ECMA-TIPOW.png"}
          height={8}
          width={80}
          alt={"Ecma Logo"}
          className={"ml-2"}
        />
      </code>
    </footer>
  );
};

export default Footer;
