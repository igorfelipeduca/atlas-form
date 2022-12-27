import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Chivo_Mono, Poppins } from "@next/font/google";
import Investor from "../assets/illustrations/investor.svg";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { motion } from "framer-motion";
import FormErrorModal from "../components/FormErrorModal";
import { CheckIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingOverlay from "../components/LoadingOverlay";
import api from "../api";

const ChivoMono = Chivo_Mono();
const PoppinsFont = Poppins({ weight: ["500", "600", "700"] });

const Home = () => {
  const [isInvestor, setIsInvestor] = useState<boolean | undefined>(undefined);
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  const [investmentRate, setInvestmentRate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      secondName: "",
      email: "",
      telephone: "",
      investor: undefined,
    },
    shouldUseNativeValidation: true,
  });

  const onSubmit = (data: any) => {
    setLoading(true);

    if (data.firstName === "") {
      setErrorModalOpen(true);
      return;
    }
    if (data.secondName === "") {
      setErrorModalOpen(true);
      return;
    }
    if (data.email === "") {
      setErrorModalOpen(true);
      return;
    }
    if (data.telephone === "") {
      setErrorModalOpen(true);
      return;
    }

    api
      .sendForm(
        data.firstName,
        data.secondName,
        data.telephone,
        data.email,
        isInvestor ? isInvestor : false,
        investmentRate
      )
      .then((result) => {
        if (result.data.success === true)
          window.location.href = `/obrigado/${data.firstName}-${data.secondName}`;
      });
  };

  return (
    <>
      <Head>
        <title>Atlas</title>
        <meta name="description" content="Atlas - Captação de leads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.ibb.co/1KMWJjW/atlas-globe-png.png" />
        <meta name="robots" content="noindex, nofollow"></meta>
        <meta
          property="og:image"
          content="https://i.ibb.co/1KMWJjW/atlas-globe-png.png"
        />
      </Head>

      <main className="bg-black h-full py-32">
        <Header />

        <div className="mt-16 flex justify-center">
          <h3
            className={`text-xl text-white tracking-wider ${PoppinsFont.className} font-bold`}
          >
            Controle suas{" "}
            <span className="font-black border-b-2 border-indigo-700">
              finanças
            </span>
          </h3>
        </div>

        <div className="mt-8 flex justify-center text-gray-300 px-8 text-center">
          <p className={`${ChivoMono.className}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            illo provident quia laboriosam quisquam?
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <h3
            className={`text-xl text-white tracking-wider ${PoppinsFont.className} font-bold`}
          >
            Organização{" "}
            <span className="font-black border-b-2 border-indigo-700">
              pessoal
            </span>
          </h3>
        </div>

        <div className="mt-8 flex justify-center text-gray-300 px-8 text-center">
          <p className={`${ChivoMono.className}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            illo provident quia laboriosam quisquam?
          </p>
        </div>

        <div className="pt-8 mt-8">
          <div className="flex justify-center">
            <h3
              className={`text-xl text-white tracking-wider ${PoppinsFont.className} font-bold`}
            >
              Gerenciamento de{" "}
              <span className="font-black border-b-2 border-indigo-700">
                carteira
              </span>
            </h3>
          </div>

          <div className="mt-8 flex justify-center text-gray-300 px-8 text-center">
            <p className={`${ChivoMono.className}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              illo provident quia laboriosam quisquam?
            </p>
          </div>

          <div className="mt-16 flex justify-center">
            <Image
              height={300}
              width={500}
              src={Investor}
              alt={"Investidores tocando em um celular"}
            />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <h1 className={`text-xl text-white ${PoppinsFont.className}`}>
            Reserve seu acesso à planilha Atlas
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <div className="flex justify-center">
            <input
              type="text"
              className={`py-2 px-4 bg-[#202020] rounded-lg text-xl ${ChivoMono.className} ring-2 ring-gray-600 outline-none text-white`}
              placeholder="Primeiro nome"
              autoComplete="first name"
              {...register("firstName")}
            />
          </div>

          <div className="flex justify-center mt-4">
            <input
              type="text"
              className={`py-2 px-4 bg-[#202020] rounded-lg text-xl ${ChivoMono.className} ring-2 ring-gray-600 outline-none text-white`}
              placeholder="Segundo nome"
              autoComplete="second name"
              {...register("secondName")}
            />
          </div>

          <div className="flex justify-center mt-4">
            <input
              type="text"
              className={`py-2 px-4 bg-[#202020] rounded-lg text-xl ${ChivoMono.className} ring-2 ring-gray-600 outline-none text-white`}
              placeholder="Email"
              autoComplete="email"
              {...register("email")}
            />
          </div>

          <div className="flex justify-center mt-4">
            <ReactInputMask
              mask="(99)99999-9999"
              className={`py-2 px-4 bg-[#202020] rounded-lg text-xl ${ChivoMono.className} ring-2 ring-gray-600 outline-none text-white`}
              placeholder="Número de telefone"
              autoComplete="phone number"
              {...register("telephone")}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <span className={`text-xl text-white ${PoppinsFont.className}`}>
              {" "}
              Você já é investidor?
            </span>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              className="px-12 py-2 bg-indigo-900 border-2 border-indigo-700 rounded-lg text-white mr-2 disabled:opacity-25"
              onClick={() => setIsInvestor(true)}
              type={"button"}
              disabled={isInvestor === true || undefined}
            >
              Sim
            </button>

            <button
              className="px-12 py-2 bg-red-900 border-2 border-red-700 rounded-lg text-white disabled:opacity-25"
              onClick={() => setIsInvestor(false)}
              type={"button"}
              disabled={isInvestor === false || undefined}
            >
              Não
            </button>
          </div>

          {isInvestor ? (
            <>
              {investmentRate === "" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mt-10 flex justify-center">
                    <h1
                      className={`text-xl ${PoppinsFont.className} text-white`}
                    >
                      Quanto você já tem <u>investido</u>?
                    </h1>
                  </div>

                  <div className="mt-4 px-8 grid grid-cols-1 gap-x-2 gap-y-4">
                    <button
                      className={`px-4 py-2 bg-indigo-700 rounded-lg text-white ${ChivoMono.className}`}
                      onClick={() => {
                        setInvestmentRate("0-5k");
                      }}
                      type={"submit"}
                    >
                      R$ 0,00 a R$ 5.000,00
                    </button>

                    <button
                      className={`px-4 py-2 bg-indigo-700 rounded-lg text-white ${ChivoMono.className}`}
                      onClick={() => {
                        setInvestmentRate("5k-50k");
                      }}
                      type={"submit"}
                    >
                      R$ 5.000,00 a R$ 50.000,00
                    </button>

                    <button
                      className={`px-4 py-2 bg-indigo-700 rounded-lg text-white ${ChivoMono.className}`}
                      onClick={() => {
                        setInvestmentRate("50k-250k");
                      }}
                      type={"submit"}
                    >
                      R$ 50.000,00 a R$ 250.000,00
                    </button>

                    <button
                      className={`px-4 py-2 bg-indigo-700 rounded-lg text-white ${ChivoMono.className}`}
                      onClick={() => {
                        setInvestmentRate("250k+");
                      }}
                      type={"submit"}
                    >
                      Mais de R$ 250.000,00
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mt-10 flex justify-center">
                    <div className="rounded-lg p-2 bg-green-600 text-white flex items-center">
                      <CheckIcon className="h-8 w-8" />

                      <span className="text-white text-xl tracking-wide">
                        Obrigado!
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <></>
          )}

          <div className="mt-8 flex justify-center">
            <button
              className={`px-4 py-2 rounded-lg bg-white text-black ${PoppinsFont.className} text-xl tracking-wide font-medium disabled:opacity-25`}
              type={"submit"}
              hidden={loading}
            >
              Reservar acesso
            </button>
          </div>
        </form>
      </main>

      <Footer />

      <LoadingOverlay open={loading} setOpen={setLoading} />

      <FormErrorModal open={errorModalOpen} setOpen={setErrorModalOpen} />
    </>
  );
};

export default Home;
