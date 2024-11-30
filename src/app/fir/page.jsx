'use client'

import { Button, Dialog, TextField } from "@mui/material"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function Fir() {
    //useState(() => { fetchFir() }, []);

    const fetchFir = async() => {

    }
    
    return(<div className="top-border horizontal">
        <div>
        <form > 
            <h2>Add or Edit Case</h2>
            <TextField required className='input' label="Case_ID"> </TextField>
            <TextField required className='input' label="Case Details"></TextField>
            <TextField required className='input' label="Case Status"></TextField>
            <TextField required className='input' label='Section of Law'></TextField>
          

            <Button className='submit' variant='outlined'>Cancel</Button>
            <Button className='submit' variant='contained'>Save</Button>
        </form> 
        </div>
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
            </tr>
           
        </table>
        </div>
    </div>)
}