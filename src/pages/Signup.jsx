import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const notify = () => {
    toast.success("Conta criada com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      draggable: true,
      pauseOnHover: true,
    });

    toast.error("Email já cadastrado!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    toast.warning("Insira um email válido!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    toast.warning("Senha não pode estar em branco!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    toast.warning("Insira sua data de nascimento", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    toast.warning("Insira seu estado", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    toast.warning("Insira sua cidade", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    toast.warning("Aceite os termos", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <div className="bg-[rgb(15,11,23)] h-screen md:h-screen w-full ">
        <div className="w-full h-full justify-between flex flex-col items-center mx-auto py-8 md:py-10 md:px-10 gap-4 bg-[url('https://ada-site-frontend.s3.sa-east-1.amazonaws.com/home/home-background.svg')] bg-no-repeat bg-fit bg-right bg-black/40">
          <div className="w-full max-w-[80px] md:max-w-[150px] mx-auto flex justify-center items-center">
            <img
              className="w-full  flex justify-center items-center mx-auto hover:scale-110 transition-all duration-300 "
              src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1698967945/Ada/ilhxvm6qj8ci4guiwbjs.png"
              alt=""
            />
          </div>

          <div className="w-full  mx-auto flex justify-center h-full items-center px-8 relative">
            <form className="flex flex-col bg-[#17151b] p-8 rounded-md   md:w-[400px] h-full w-full  justify-center mx-auto gap-4">
              <div>
                <p className="text-2xl text-center uppercase font-bold text-[#9adc59]">
                  Criar conta
                </p>
              </div>
              <div className="flex flex-col gap-2 ">
                <input
                  id="cadastroUsuario"
                  className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
                  type="text"
                  name="Usuário"
                  placeholder="Nome completo"
                  required
                />

                <input
                  id="cadastroEmail"
                  className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
                  type="email"
                  name="Email"
                  placeholder="E-mail"
                  required
                />

                <input
                  id="cadastroSenha"
                  className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
                  type="text"
                  name="Senha"
                  placeholder="Senha"
                  required
                />

                <input
                  id="cadastroSenha"
                  className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
                  type="text"
                  name="Senha"
                  placeholder="Data de nascimento"
                  required
                />

                <input
                  id="cadastroSenha"
                  className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
                  type="text"
                  name="Senha"
                  placeholder="Estado"
                  required
                />

                <input
                  id="cadastroSenha"
                  className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
                  type="text"
                  name="Senha"
                  placeholder="País"
                  required
                />
              </div>
              <div className="flex items-center ml-2 w-full">
                <input type="checkbox" required />
                <p className="ml-2 text-sm font-semibold text-white w-full">
                  Eu aceito os termos da&nbsp;
                  <span className="text-[#9adc59] no-underline w-full" href="">
                    política de privacidade
                  </span>
                </p>
              </div>
              <button
                onClick={notify}
                id="btnCadastrar"
                className="w-full bg-[#9adc59] text-xl font-bold shadow-lg text-black text-center p-4 rounded-md outline-none border-none hover:bg-[#7ebb4a] hover:shadow-[#9adc59] hover:text-white "
              >
                Criar conta
              </button>
              <p className="ml-2 text-sm font-medium text-[#9ca3af] text-center">
                Ja possui uma conta?&nbsp;
                <span className="text-[#9adc59] no-underline cursor-pointer">
                  <Link to="/login">Faça seu login</Link>
                </span>
              </p>
            </form>
          </div>

          <div className="w-full max-w-[80px] mx-auto flex justify-center items-center ">
            <img
              className="w-full  flex justify-center items-center mx-auto grayscale hover:grayscale-0 transition-all duration-300 "
              src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1698936424/Ada/gaym0a7dqpbygkq2jeo7.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
