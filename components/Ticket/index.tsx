import { Azeret_Mono, Chivo_Mono, Inter } from "@next/font/google";
import { saveAs } from "file-saver";
import Link from "next/link";
import styles from "./styles/Ticket.module.css";

const InterFont = Inter();
const ChivoMono = Chivo_Mono();
const AzeretMoto = Azeret_Mono();

interface TicketProps {
  name: string | string[] | undefined;
}

const Ticket: React.FC<TicketProps> = ({ name }) => {
  const ClientName = () => {
    if (name) {
      let userName = name as string;
      return userName.replace("-", " ");
    } else return "";
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`${styles.ticketBorderWrapper} absolute`}>
        <div className="py-4">
          <div
            className={`${InterFont.className} flex justify-center text-white font-extrabold text-2xl`}
          >
            Acesso reservado
          </div>
        </div>

        <div className={`${styles.ticket} bg-[#121212]`}>
          <div className="flex justify-center">
            <h2
              className={`${styles.username} ${InterFont.className} text-3xl font-extrabold text-center`}
            >
              {ClientName()}
            </h2>
          </div>

          <div className="flex justify-center">
            <span
              className={`${ChivoMono.className} text-white mt-4 tracking-wide`}
            >
              26/12/2022
            </span>
          </div>
        </div>
      </div>

      <div className="px-8">
        <div className="mt-16 bg-white rounded-lg px-4 py-2 text-center">
          <span
            className={`${InterFont.className} text-black font-extrabold text-xl`}
          >
            Compartilhe
          </span>

          <p
            className={`${AzeretMoto.className} mt-2 text-black font-light text-sm`}
          >
            Muito obrigado por reservar seu acesso! Poste um story e marca a
            gente lá! <span className="font-extrabold">@ecma.fintech</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
