import React, {useState} from 'react';

export function Contact(){

    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [toggle, setToggle] = useState(false);

    function showContact () {
        setToggle(!toggle)
    }

    function sendContact(e){
        e.preventDefault(e);
        alert(`F.Name: ${name}\n L.Name: ${lname}\n Address: ${address}`)
    }

    return(
        <div id='contact'>
            <h3>Contact</h3>
            <p>You can leave your contact here:</p>
            <button
            onClick={showContact} 
            
            >{toggle? 'Disable' : 'Send us your contact!'}</button>
            { toggle?
            <form>
                <p>
                    <input
                    type=''
                    placeholder='First name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    ></input>
                </p>
                <p>
                    <input
                    type=''
                    placeholder='Last name'
                    value={lname}
                    onChange={(e)=>setLname(e.target.value)}
                    ></input>
                </p>
                <p>
                    <input
                    type=''
                    placeholder='Address'
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    ></input>
                </p>
                <button onClick={sendContact}>Submit</button>
            </form>: null }
        </div>
    )
}