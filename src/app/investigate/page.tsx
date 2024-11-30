'use client'

import { Button, Dialog, TextField } from "@mui/material"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function Officer() {
    const router = useRouter();
    return(<div className="top-border horizontal">
        <div>
        <form > 
            <h2>Add or Edit FIR</h2>
            <TextField required className='input' label="Inscident Date"> </TextField>
            <TextField required className='input' label="Inscident Time"></TextField>
            <TextField required className='input' label="Place"></TextField>
            <TextField required className='input' label='Case Details'></TextField>
            <TextField label="Accused(Optional)" className='input'></TextField>

            <Button className='submit' variant='outlined'>Cancel</Button>
            <Button className='submit' variant='contained'>Save</Button>
        </form> 
        </div >
        
        <div className="table-view">
            <div className="horizontal">
            <h2>List of FIR</h2>
        </div>
        <table>
            <tr className="thead">
                <td>Fir ID</td>
                <td>Date LOdged</td>
                <td>Incident Date</td>
                <td>Incident Place</td>
                <td>Incident Time</td>
            </tr>
           
        </table>
        </div>
    </div>)
}