import React from 'react';
import PropTypes from 'prop-types';

export function Table(props){

    console.log(props)
    return(
        <div id='table'>
            <table border='2'>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.datelist.map((d, i)=>{
                        return(
                            <tr key={i}>
                            <td>{d.day}</td>
                                <td>{d.month}</td>
                                <td>{d.year}</td>
                                {/* <td><button onClick={props.deleteDate(d.id)}>Delete</button></td> */}
                                <td><button>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes ={
    datelist: PropTypes.array,
    deleteDate: PropTypes.func
}