import React from "react";
import BasicInput from "../../inputs/basic/basicInput";

const ContactForm = ({ igniter, onChange }) => {
  return (
    <>
      <BasicInput
        value={igniter.name}
        name="Nombre"
        onChange={onChange("name")}
      ></BasicInput>

      <BasicInput
        value={igniter.surname}
        name="Apellido"
        onChange={onChange("surname")}
      ></BasicInput>

      <BasicInput
        value={igniter.ci}
        name="Cedula"
        onChange={onChange("ci")}
      ></BasicInput>

      <BasicInput
        value={igniter.password}
        name="Contraseña"
        onChange={onChange("password")}
      ></BasicInput>

      <BasicInput
        value={igniter.phone}
        name="Telefono"
        onChange={onChange("phone")}
      ></BasicInput>

      <BasicInput
        value={igniter.branchId}
        name="Sucursal"
        onChange={onChange("branchId")}
      ></BasicInput>
    </>
  );
};

export default ContactForm;
