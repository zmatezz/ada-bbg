import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="w-full  mx-auto flex justify-center  items-center px-8 relative">
      <form className="flex flex-col bg-[#17151b] p-8 rounded-md   md:w-[400px] h-full w-full  justify-center mx-auto gap-4">
        <div>
          <p className="text-2xl text-center uppercase font-bold text-[#9adc59]">
            Acessar conta
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
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
        </div>
        <div className="flex items-center ml-2 w-full">
          <input type="checkbox" required />
          <p className="ml-2 text-sm text-white w-full">
            Mantenha-me conectado
          </p>
        </div>
        <button
          id="btnCadastrar"
          className="w-full bg-[#9adc59] text-xl font-bold shadow-lg text-black text-center p-4 rounded-md outline-none border-none hover:bg-[#7ebb4a] hover:shadow-[#9adc59] hover:text-white "
        >
          Entrar
        </button>
        <p className="ml-2 text-sm font-medium text-[#9ca3af] text-center">
          Não possui uma conta?&nbsp;
          <span className="text-[#9adc59] no-underline cursor-pointer">
            <Link to="/register">Faça seu cadastro</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;