import { MenuItem, Select, TextField } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFinanceRequest,
  postFinanceRequest,
  deleteFinanceRequest,
} from "../../../store/ducks/financa/actions";
import { Finance } from "../../../store/ducks/financa/types";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Financas = () => {
  const dispatch = useDispatch();
  const [valorHelper, setValorHelper] = useState("");
  const financeState = useSelector((state: any) => state.financeReducer);

  let InputType = useRef<HTMLInputElement>(null);
  let InputValor = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(getFinanceRequest());
  }, []);

  const registerFinance = () => {
    let amount = InputValor?.current?.value;
    let type = InputType?.current?.value;

    dispatch(postFinanceRequest({ amount, type }));
    toast("Registrando");
  };

  const removeFinance = (id: number) => {
    dispatch(deleteFinanceRequest({ id }));
    dispatch(getFinanceRequest());
  };

  const validaValor = () => {
    let amount = InputValor?.current?.value;

    if (!amount || isNaN(+amount)) {
      setValorHelper("informe um valor");
    }
  };

  return (
    <>
      <div className="despesas-container">
        <h2>Lançamento</h2>
        <div className="despesas-form">
          <div className="despesas-container-form-item">
            <TextField
              type="number"
              error={valorHelper.length !== 0}
              label="Valor"
              defaultValue=""
              helperText={valorHelper}
              variant="outlined"
              inputRef={InputValor}
              onChange={() => validaValor()}
            />
          </div>

          <div className="despesas-container-form-item">
            <Select inputRef={InputType} label="Tipo">
              <MenuItem value="recebimento">Recebimento</MenuItem>
              <MenuItem value="despesa">Despesa</MenuItem>
            </Select>
          </div>

          <div className="despesas-container-item">
            <button onClick={() => registerFinance()}>Registrar</button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>tipo</th>
            <th>valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {financeState.finances.map((finance: Finance) => (
            <tr key={finance.id}>
              <td>{finance.type === "despesa" ? <FaMinus /> : <FaPlus />}</td>
              <td>R$ {finance.amount}</td>
              <td>
                <button onClick={() => removeFinance(finance.id)}>
                  <FaTrash />
                  <ToastContainer />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Financas;
