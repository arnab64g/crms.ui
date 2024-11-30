'use client'

import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { Fir_Dto } from "../dto/fir_dto";
import { get_id } from "../service/user";
import { addFir, getMyFir } from "../service/fir";
import { Case_Dto } from "../dto/case_dto";
export default function My_Fir() {
    let fir : Fir_Dto[] = [];
    let c1 : Case_Dto = {id : 0, case_details : "", case_status : "", section_of_law : "", investigation : "", accused : 0};
    const [date, setdate] = useState('YYYY-MM-DD');
    const [time, setTime] = useState("HH:MM:SS");
    const [place, setPlace] = useState("");
    const [details, setDetails] = useState("");
    const [accused, setAccused] = useState('');
    const [firs, setFirs] = useState(fir);
    const [case1, setCase] = useState(c1);
    useEffect(()=>{fetchMyFir()}, []);

    const fetchMyFir = async () =>{
        const res = await getMyFir();
        setFirs(res);
        console.log(res);
        
    }

    const save = async () => {
        let fir : Fir_Dto = {
            id : 0,
            inscident_date : new Date(date + 'T' + time),
            date_lodged : new Date(),
            place : place,
            pretitioner_id : get_id()!,
        }

        const res = await addFir(fir);
        if (res) {
            alert("Added");
            fetchMyFir();
        }
    }
    
    return(<div className="top-border horizontal">
        <div>
        <form > 
            <h2>Add or Edit FIR</h2>
            <TextField required value={date} onChange={(e) => {setdate(e.target.value)}} className='input' label="Inscident Date"> </TextField>
            <br></br><br></br>
            <TextField required value={time} onChange={(e) => {setTime(e.target.value)}} className='input' label="Inscident Time"></TextField>
            <br></br><br></br>
            <TextField required value={place} onChange={(e) => {setPlace(e.target.value)}} className='input' label="Place"></TextField>
            <br></br><br></br>
            <TextField required value={details} onChange={(e) => {setDetails(e.target.value)}} className='input' label='Case Details' multiline minRows={3}></TextField>
            <br></br><br></br>
            <TextField value={accused} onChange={(e) => {setAccused(e.target.value)}} label="Accused(Optional)" className='input'></TextField>
            <br></br><br></br>
            <Button className='submit' onClick={() => {save()}} variant='contained'>Save</Button>
        </form> 
        </div >
        <div className="table-view">
            <div className="horizontal">
            <h2>List of FIR</h2>
        </div>
        <table>
            <tr className="thead">
                <td>Fir ID</td>
                <td>Date Lodged</td>
                <td>Incident Date</td>
                <td>Incident Place</td>
                <td>Incident Time</td>
                <td></td>
            </tr>
            {
                firs.map((x) => (
                    <tr>
                        <td>{x.id} </td>
                        <td> {String(x.date_lodged).split('T')[0]} </td>
                        <td>{String(x.inscident_date).split('T')[0]}</td>
                        <td>{x.place}</td>
                        <td> {String(x.inscident_date).split('T')[1].split('Z')[0]} </td>
                        <td><Button>Details</Button></td>
                    </tr>       
                ))
            }
        </table>
        </div>
        <div className="table-view">
            <h1>Case </h1>
            <h2>Case Details: {case1.case_details}</h2>
            <p>Case Details: {case1.case_status}</p>
            <p>Case Details: {case1.section_of_law}</p>
            <p>Case Details: {case1.investigation}</p>
        </div>
    </div>)
}