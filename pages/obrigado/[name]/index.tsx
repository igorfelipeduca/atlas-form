import { Poppins } from "@next/font/google";
import { useRouter } from "next/router";
import Header from "../../../components/Header";
import Ticket from "../../../components/Ticket";
import html2canvas from "html2canvas";
import { createRef, useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Head from "next/head";
const PoppinsFont = Poppins({ weight: ["500", "600", "700"] });

const ThanksPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Head>
        <title>Obrigado!</title>
        <meta name="description" content="Atlas - Captação de leads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.ibb.co/1KMWJjW/atlas-globe-png.png" />
        <meta name="robots" content="noindex, nofollow"></meta>
        <meta
          property="og:image"
          content="https://i.ibb.co/1KMWJjW/atlas-globe-png.png"
        />
      </Head>

      <main className="bg-[url('https://i.ibb.co/jrx68YX/02.jpg')] h-screen py-32">
        <Header hiddenLogo />

        <div className="mt-16 flex justify-center">
          <h1
            className={`${PoppinsFont.className} font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 h-14`}
          >
            Obrigado!
          </h1>
        </div>

        <div className="flex justify-center mt-16">
          <Ticket name={name} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ThanksPage;
