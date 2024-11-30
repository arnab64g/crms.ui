'use client'

import { Button, Dialog, TextField } from "@mui/material"
import { useRouter } from 'next/navigation'

export default function Case() {
    const router = useRouter();
    return(<div className="top-border horizontal">
       
        
        <div className="table-view">
            <div className="horizontal">
            <h2>List of Case</h2>
        </div>
        <table>
            <tr className="thead">
                <td>Case ID</td>
                <td>Case Details</td>
                <td>Case status</td>
                <td>Section of law</td>
              
            </tr>
           
        </table>
        </div>
    </div>)
}