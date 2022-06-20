import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import CRUD from "../../components/crud/CRUD";
import BasicTable from "../../components/table/basicTable";
import DialogContainer from "../../components/dialog/dialogContainer";
import BranchForm from "../../components/forms/branch/branchForm";
import BranchService from "../../services/branch/branchService";

const Nodes = () => {
  let service = new BranchService();
  const [display, setDisplay] = useState(false);
  const [branch, setBranch] = useState({
    name: "",
    code: "",
    city: "",
    direction: "",
    coordinates: "",
  });

  const handleChange = (key) => (event) => {
    setBranch({ ...branch, [key]: event });
  };

  const handleSave = (event) => {
    setDisplay(false);
  };

  const handleEdit = (row) => (event) => {
    setBranch(row);
    setDisplay(true);
  };

  const handleDelete = (id) => (event) => {};

  const handleCreate = (event) => {
    setBranch({
      name: "",
      code: "",
      city: "",
      direction: "",
      coordinates: "",
    });
    setDisplay(true);
  };

  const handleDialogDisplay = (value) => (event) => {
    setDisplay(value);
  };

  return (
    <CRUD
      init={branch}
      title="Sucursales"

      display={display}
      onToggleDisplay={handleDialogDisplay}

      service={service}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onCreate={handleCreate}
    >
      <BranchForm
        branch={branch}
        onSave={handleSave}
        onBranchChange={handleChange}
      />
    </CRUD>
  );
};

export default Nodes;
