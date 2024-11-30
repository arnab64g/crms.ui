'use client'

import { Fir_Dto } from "../dto/fir_dto";
import { get_id } from "./user";

export async function addFir(fir : Fir_Dto) {
    const request = {
        method :'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(fir)
    }
    
    const res = await fetch('http://localhost:2500/api/fir', request);

    return await res.json();
}

export async function getMyFir() {
    const request = {
        method :'GET',
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    
    const res = await fetch(`http://localhost:2500/api/fir/${get_id()}`, request);

    return await res.json();
}