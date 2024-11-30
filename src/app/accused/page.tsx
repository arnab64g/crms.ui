'use client'

import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

import { useEffect, useState } from "react"

export default function Accused() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState(0);
    const [age, setAge] = useState(0);
    const [status, setStatus] = useState(''); 
    
    useEffect(() => {fetchAccused()}, []);
    
    const saveAccused = () =>{
        let accused = {
            id : 0,
            gender : gender,
            age : age,
            status : status
        }
    }

    const fetchAccused = async() => {

    } 

    return(<div className="top-border horizontal">
        <div>
        <form > 
            <h2>Add or Edit Accused</h2>
            <TextField required className='input' value={name} onChange={(e) => {setName(e.target.value)}} label="Accused Name"></TextField>
            <br></br> <br></br>
            <FormControl className="input">
                <InputLabel>Gender</InputLabel>
                <Select required  value={gender} onChange={(e) => {setGender(Number(e.target.value))}} label="Gender">
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
            </Select>
            </FormControl>
            <br></br> <br></br>
            <TextField required className='input' type="number" value={age} onChange={(e) => {setAge(Number(e.target.value))}} label="Age"></TextField>
            <br></br> <br></br>
            <TextField required className='input' value={status} onChange={(e) => {setStatus(e.target.value)}} label="Status"></TextField>
            <br></br><br></br>
            <TextField label="Accused(Optional)" className='input'></TextField>
            <br></br><br></br>
            <Button className='submit' onClick={() => {saveAccused()}} variant='contained'>Save</Button>
        </form> 
        </div >
        <div className="table-view">
            <div className="horizontal">
            <h2>List of Accused</h2>
        </div>
        <table>
            <tr className="thead">
                <td>Accused ID</td>
                <td>Accused name</td>
                <td>Gender</td>
                <td>Age</td>
                <td>Status</td>
            </tr>
        </table>
        </div>
    </div>)
}