import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinsRequest } from "../../../store/ducks/moedas/listaMoedas/actions";
import { detailsRequest } from "../../../store/ducks/moedas/detailsMoedas/actions";
import { CoinsState } from "../../../store/ducks/moedas/listaMoedas/types";

const Moedas = () => {
  const dispatch = useDispatch();
  const coins: CoinsState = useSelector((state: any) => state.coinsReducer);
  const coin = useSelector((state: any) => state.detailsReducer);

  useEffect(() => {
    dispatch(coinsRequest());
  }, []);

  const getDetails = (coinName: string) => {
    dispatch(detailsRequest(coinName));
  };

  return (
    <div className="container-moeda">
      <div className="lista-moeda">
        <h2>Moedas</h2>
        {coins.loading && <h3>carregando...</h3>}
        {coins.error && <h3>ocorreu um errro, tente novamente mais tarde</h3>}
        <ul>
          {coins.coins &&
            coins.coins.map((coin: string, i: number) => (
              <li key={coin + i} onClick={() => getDetails(coin)}>
                {coin}
              </li>
            ))}
        </ul>
      </div>
      <div className="detalhes-moeda">
        <h2>Detalhes Moeda</h2>
        {!coin.error && !coin.loading && !coin.details && (
          <h3>Selecione uma moeda</h3>
        )}
        {coin.loading && <h3>carregando...</h3>}
        {coin.error && <h3>ocorreu um errro, tente novamente mais tarde</h3>}
        {coin.details && (
          <>
            <h4>Código:</h4>
            <span>{coin.details.currency_code}</span>
            <h4>Nome:</h4>
            <span>{coin.details.name}</span>
            <h4>Simbolo:</h4>
            <span>{coin.details.symbol}</span>
            <h4>País:</h4>
            <span>
              {coin.details.country_name} ({coin.details.country_code})
            </span>
            <h4>Banco Central:</h4>
            <span>{coin.details.central_bank}</span>
            <h4>Usada em:</h4>
            <ul>
              {coin.details.using_countries &&
                coin.details.using_countries.map((pais: string, i: number) => (
                  <li key={i}>{pais}</li>
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Moedas;
