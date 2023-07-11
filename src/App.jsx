import { useEffect, useState } from 'react'
import './App.css'
import { logo, Inputs, Display } from './indexs.jsx'

export default function App() {
    const [bill, setBill] = useState(0)
    const [percenatge, setPercentage] = useState(0)
    const [noOfPeople, setNoOfPeople] = useState(0)
    const [resets, setResets] = useState(0)
    const [isReset, setIsReset] = useState(false)

    const tipCalculation =(bll, percent, people)=> {
        setBill(parseInt(bll))
        setPercentage(parseInt(percent))
        setNoOfPeople(parseInt(people))
    }

    const resetClicked=()=>{
        setResets(prevStste=>prevStste+1)
        setIsReset(true)
    }

    const notReset =()=>{
        setIsReset(false)
    }

    return (
        <div className='container'>
            <div className="logo">
                <img src={logo} />
            </div>

            <div className="calculator">
                <Inputs tipCalculation={tipCalculation} resets={resets} notReset={notReset} />
                <Display bill={bill} percenatge={percenatge} noOfPeople={noOfPeople} tipCalculation={tipCalculation} resetClicked={resetClicked} isReset={isReset} />
            </div>
        </div>
    )
}