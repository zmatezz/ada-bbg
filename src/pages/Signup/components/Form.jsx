import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    country: "BR",
    state: "",
    acceptedTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      toast.warning("Aceite os termos");
      return;
    }
    console.log("Dados do formulário:", JSON.stringify(formData));
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Conta criada com sucesso!");

        localStorage.setItem("savedEmail", formData.email);
        localStorage.setItem("savedPassword", formData.password);
        history.push("/login");
      } else {
        toast.error("Erro ao criar conta. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
      toast.error("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <div className="w-full  mx-auto flex justify-center h-full items-center px-8 relative">
      <form
        className="flex flex-col bg-[#17151b] p-8 rounded-md   md:w-[400px]  w-full  justify-center mx-auto gap-4"
        onSubmit={handleSubmit}
      >
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
            name="name"
            maxLength={30}
            placeholder="Nome completo"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            id="cadastroEmail"
            className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            id="cadastroSenha"
            className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
            type="text"
            name="password"
            maxLength={15}
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            id="confirmacaoSenha"
            className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
            type="text"
            name="confirmPassword"
            maxLength={15}
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <input
            id="nascimento"
            className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
            type="date"
            name="birthDate"
            placeholder="Data de nascimento"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />

          <select
            id="country"
            className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-slate-400 outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
            type="text"
            name="country"
            placeholder="País"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="Selecione seu país" disabled></option>
            <option value="BR">Brasil</option>
          </select>

          <select
            id="state"
            className="bg-[#333] md:h-12 p-2 rounded-md md:p-4 md:text-xl   outline-none border-[3px] border-slate-600/30 focus:border-[#9adc59] transition-all duration-300"
            name="state"
            placeholder="Estado"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="Selecione seu estado" disabled></option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>
        <div className="flex items-center ml-2 w-full">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
            required
          />
          <p className="ml-2 text-sm font-semibold text-white w-full">
            Eu aceito os termos da&nbsp;
            <span className="text-[#9adc59] no-underline w-full" href="">
              política de privacidade
            </span>
          </p>
        </div>
        <button
          type="submit"
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
  );
};

export default Form;
