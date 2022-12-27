import { Chivo_Mono } from "@next/font/google";
import Image from "next/image";

const ChivoMono = Chivo_Mono();

interface HeaderProps {
  hiddenLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hiddenLogo }) => {
  return (
    <header>
      <div className="flex justify-center">
        <Image
          src={"https://i.ibb.co/1KMWJjW/atlas-globe-png.png"}
          alt={"Atlas Logo"}
          className="h-100 w-100 rounded-full"
          height={150}
          width={150}
          hidden={hiddenLogo}
        />
      </div>

      <div className="flex justify-center mt-8">
        <Image
          height={80}
          width={200}
          src={"https://i.ibb.co/mzPwhHR/ATLASWHITE.png"}
          alt={"Atlas Logo"}
        />
      </div>

      <div className="mt-4 flex justify-center">
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
      </div>
    </header>
  );
};

export default Header;
