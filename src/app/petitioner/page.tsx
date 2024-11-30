'use client'

import { Button, Dialog, TextField } from "@mui/material"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function Petitioner() {
    const router = useRouter();
    return(<div className="top-border horizontal">
        
        <div className="table-view">
            <div className="horizontal">
            <h2>List of Petitioner</h2>
        </div>
        <table>
            <tr className="thead">
                <td>NID</td>
                <td>Name</td>
                <td>Contact</td>
                
            </tr>
           
        </table>
        </div>
    </div>)
}