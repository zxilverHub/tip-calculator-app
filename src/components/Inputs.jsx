import { useEffect, useRef, useState } from "react";
import { dollar, person } from "../indexs"

export default function Inputs({tipCalculation, resets, notReset}) {
    const defaultPercentage = [5, 10, 15, 25, 50];
    const [selectedPercentage, seSelectedPercentage] = useState(0)
    const [inputBill, setInputBill] = useState(0)
    const [inputPeople, setInputPeople] = useState(0)
    const billRef = useRef()
    const peopleRef = useRef()
    const customRef = useRef()

    useEffect(()=>{
        seSelectedPercentage(0)
        billRef.current.value = null
        peopleRef.current.value = null
        customRef.current.value = null
    },[resets])

    useEffect(()=>{
        if(inputPeople != 0) tipCalculation(inputBill, selectedPercentage, inputPeople)
        else tipCalculation(0, 0, 0)
        
    },[inputBill, selectedPercentage, inputPeople])

    const handlePercentage =(val)=> seSelectedPercentage(val)
    const customPercentage =(e)=> seSelectedPercentage(e.target.value)
    const settingBill =(e)=> setInputBill(e.target.value)
    const settingPeople =(e)=> {
        setInputPeople(e.target.value)
        notReset()
    }

    return (
        <div className="inputs">
            <div className="bill-card">
                <h1 className="label">Bill</h1>
                <div className="bill-input ">
                    <img src={dollar} alt="$" />
                    <input ref={billRef} type="number" id="bill" placeholder="0" onChange={settingBill} onFocus={settingBill} />
                </div>
            </div>

            <div className="tip-card">
                <h2 className="label">Select Tip %</h2>
                <div className="percent-buttons">
                    {defaultPercentage.map((per, i)=>(
                        <button className={`${(per===selectedPercentage? 'selected':'')}`} onClick={()=>{handlePercentage(per)}} key={i} >{per}%</button>
                    ))}
                    <input ref={customRef} type="number" placeholder="Custom" id="custom" onChange={customPercentage} onFocus={customPercentage} />
                </div>
            </div>

            <div className="people-card">
                <h1 className="label">Number of people <span className="zero">Can't be zero</span></h1>
                <div className="people-input">
                    <img src={person} alt="person" />
                    <input ref={peopleRef} type="number" id="people" placeholder="0" onFocus={settingPeople} onChange={settingPeople} />
                </div>
            </div>

        </div>
    )
}