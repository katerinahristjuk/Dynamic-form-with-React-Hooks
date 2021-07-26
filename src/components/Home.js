import React, {useState} from 'react';
import {Table} from './Table';

export function Home(){

    const [date, setDate] = useState([
            {id:0, day: "1", month: "Jan", year: '2021'},
            {id:1, day: "2", month: "Jan", year: '2021'},
        ])
    const [newDay, setNewDay] = useState('')
    const [newMonth, setNewMonth] = useState('')
    const [newYear, setNewYear] = useState('')

    function addDate(e){
        e.preventDefault();
        let dateObj = {
            id: date.length+1,
            day: newDay,
            month: newMonth,
            year: newYear
        }
        setNewDay('')
        setNewMonth('')
        setNewYear('')
        setDate([...date, dateObj])
    }

    function deleteDate (d){
        const newList = date.filter(i=> i.id !== d.id);
        setDate ({newList})
    }

    return(
        <div id='home'>
            <h3>Home</h3>
            <form>
                <p>
                    <span>Day: </span>
                    <input
                    type='text'
                    placeholder='1-31'
                    value={newDay}
                    onChange={(e)=>{setNewDay(e.target.value)}}
                    ></input>
                </p>
                <p>
                    <span>Month: </span>
                    <input
                    type='text'
                    placeholder='Jan-Dec'
                    value={newMonth}
                    onChange={(e)=>{setNewMonth(e.target.value)}}
                    ></input>
                </p>
                <p>
                    <span>Year: </span>
                    <input
                    type='text'
                    placeholder='20__'
                    value={newYear}
                    onChange={(e)=>{setNewYear(e.target.value)}}
                    ></input>
                </p>
                
                <button onClick={addDate}>Submit</button>
            </form>
            <Table
            datelist={date}
            deleteDate={deleteDate}
            />
        </div>
    )
}