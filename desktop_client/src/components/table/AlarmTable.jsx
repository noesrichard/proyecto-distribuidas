import React, {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Box, Button} from "@mui/material";
import {Visibility, VisibilityOutlined} from "@mui/icons-material";
import useDisplay from "../../hooks/useDisplay";
import AlarmDialog from "../dialog/AlarmDialog";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const AlarmsTable = ({rows, headers, onSearch}) => {
  const handleDeleteClick = (id) => (event) => {
  };
  const displayMap = useDisplay(false)
  const [alarm, setAlarm] = useState({})
  const [search, setSearch] = useState(null);

  const showMap = (row) => {
    setAlarm(row)
    displayMap.show()
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <>
      <FormControl sx={{width: "100%", marginBottom: 2,}}>
        <TextField
          id="search"
          label="Búsqueda"
          value={search}
          onChange={handleSearchChange}
          variant="standard"
        />
      </FormControl>
      <TableContainer component={Paper}>

        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow key="1000">
              {headers.map((header, i) => (
                <TableCell key={i}>{header.label}</TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                {headers.map((header, i) => (
                  <TableCell key={i}>{row[header.key]}</TableCell>
                ))}
                <TableCell key="1230">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Button onClick={() => showMap(row)}>
                      <VisibilityOutlined></VisibilityOutlined>
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AlarmDialog
        data={alarm}
        display={displayMap.display}
        onClose={displayMap.hide}
      ></AlarmDialog>
    </>
  );
};

export default AlarmsTable;
