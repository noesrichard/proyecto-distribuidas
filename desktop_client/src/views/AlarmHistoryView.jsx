import {Box, Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import BasicTable from "../components/table/BasicTable";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {flat, headersWithIgniterData} from "../services/alarmsHistoryService.js"
import useApi from "../hooks/useApi";
import AlarmsTable from "../components/table/AlarmTable";
import TextField from "@mui/material/TextField";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const AlarmHistoryView = () => {

    const API_ENDPOINT = "/alarms"
    const api = useApi(API_ENDPOINT, flat);

//    const [alarms, setAlarms] = useState([])
//    const [date, setDate] = React.useState(new Date());
//    const [clean, setClean] = useState(false)
//    useEffect(() => {
//        setAlarms(api.data);
//    }, [clean])
//
//    const byDate = (alarm) => {
//        return alarm.comparableDate.toLocaleDateString() === date.toLocaleDateString()
//    }
//
//    const handleChange = (newValue) => {
//        setDate(newValue);
//        console.log("elegido: ",newValue.toLocaleDateString())
//        alarms.forEach(d => {
//            console.log(d.comparableDate.toLocaleDateString());
//        })
//        const alarmsByDate = api.data.filter(byDate);
//        console.log(alarmsByDate)
//        setAlarms(alarmsByDate);
//    };
//    <LocalizationProvider dateAdapter={AdapterDateFns}>
//        <DesktopDatePicker onChange={handleChange} value={date}
//                           renderInput={(params) => <TextField {...params}/>}/>
//    </LocalizationProvider>
//    <Button onClick={() => { setClean(prevState => !prevState)}}>Limpiar</Button>

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" sx={{backgroundColor: "#d02f27"}}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Historial
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{padding: 2}}>
                <AlarmsTable rows={api.data} headers={headersWithIgniterData}></AlarmsTable>
            </Box>
        </>
    );
};

export default AlarmHistoryView;
