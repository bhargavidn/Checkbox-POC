import React,{useState, useEffect} from 'react';

const CheckBox = ({handleCheckboxToggle, label}) => {
    const [checked,setChecked]=useState(false);

    useEffect(() => {
        handleCheckboxToggle(label, checked);
    }, [checked])
    return (
        <div>
            <form>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                <label>{label}</label>        
            </form>
        </div>
    )   
}
export default CheckBox;
