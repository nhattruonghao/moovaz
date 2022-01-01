import React, { createContext, useEffect, useState } from "react";
import {GetReloDetail} from './Api/MoovazApi';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [modalMoveDate, setModalMoveDate] = useState(false);


  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken', true);
    if(accessToken){
        setToken(accessToken);
    }

  }, [])


  return (
    <GlobalState.Provider
      value={{
        token: [token, setToken],
        modalMoveState: [modalMoveDate, setModalMoveDate],
        ReloDetail: GetReloDetail(token), 
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
