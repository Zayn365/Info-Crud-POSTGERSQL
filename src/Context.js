import { createContext } from "react";
import ToggleUpdate from "./hooks/ToggelUpdate";
import Form from "./hooks/Form";

const ContextValue = createContext();

const ContextMain = ({ children }) => {
  const [toggle, handleToggle] = ToggleUpdate();
  const [
    userData,
    updatedUserData,
    userList,
    handleGetUser,
    handleInputChange,
    handleSubmit,
    handleUpdateInputChange,
    handleUpdateSubmit,
    handleDelete,
    handleId,
    id,
  ] = Form();
  const val = {
    toggle: {
      toggle,
      handleToggle,
    },
    users: {
      userData,
      updatedUserData,
      userList,
      handleGetUser,
      handleInputChange,
      handleSubmit,
      handleUpdateInputChange,
      handleUpdateSubmit,
      handleDelete,
      handleId,
      id,
    },
  };
  return (
    <div>
      <ContextValue.Provider value={val}>{children}</ContextValue.Provider>
    </div>
  );
};

export { ContextMain, ContextValue };
