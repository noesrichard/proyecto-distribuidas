import { Button } from "@mui/material";
import React from "react";
import BasicInput from "../inputs/BasicInput";

const UserForm = ({ user, onChange }) => {

  return (
    <>
      <BasicInput
        value={user.username}
        name="Usuario"
        onChange={onChange("username")}
      ></BasicInput>

      <BasicInput
        value={user.password}
        name="Contraseña"
        onChange={onChange("password")}
      ></BasicInput>

    </>
  );
};

export default UserForm;
