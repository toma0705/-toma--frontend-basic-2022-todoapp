import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  // 状態の初期化
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  // アラートを表示するための関数
  const setAlert = (errorText) => {
    //状態を更新する関数
    setAlertState((prevState) => ({
      ...prevState,
      visible: true,
      errorText: errorText,
    }));
  };

  // アラートを非表示にするための関数
  const closeAlert = () => {
    const alertStateCopy = Object.assign({}, alertState); //前の状態も変わらないようにコピー
    alertStateCopy.visible = false;
    setAlertState(alertStateCopy); //状態の更新
  };

  // コンテキストに提供される値
  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
