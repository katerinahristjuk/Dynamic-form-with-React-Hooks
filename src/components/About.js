import React, { useState } from 'react';

export function About(){

    const [id, setId] = useState('')
    const [city, setCity] = useState('')
    const [birth, setBirth] = useState('')
    const [gpa, setGpa] = useState('')

    function addAbout(e){
        e.preventDefault(e);
        alert(`StudentID: ${id}\n City: ${city}\n DOB: ${birth}\n G.P.A.: ${gpa}`)
    }

    return(
        <div id='about'>
            <h3>About</h3>
            <form>
                <p>
                    <input 
                    type='text'
                    placeholder='Enter your Student ID'
                    value={id}
                    onChange={(e)=>setId(e.target.value)}></input>
                </p>
                <p>
                    <input 
                    type='text'
                    placeholder='Enter your City'
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}></input>
                </p>
                <p>
                    <input 
                    type='text'
                    placeholder='Enter your date of birth'
                    value={birth}
                    onChange={(e)=>setBirth(e.target.value)}></input>
                </p>
                <p>
                    <input 
                    type='text'
                    placeholder='Enter your G.P.A.'
                    value={gpa}
                    onChange={(e)=>setGpa(e.target.value)}></input>
                </p>
                <button onClick={addAbout}>Submit</button>
            </form>
        </div>
    )
}