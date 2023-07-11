import { useEffect, useState } from "react"

export default function Display({bill, percenatge, noOfPeople, tipCalculation, resetClicked, isReset}) {
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        if(!isReset) calc()
        else {
            const z = 0
            setTipAmount(z.toFixed(2))
            setTotal(z.toFixed(2))
        }
    },[bill, percenatge, noOfPeople])

    const calc =()=>{
        if(noOfPeople !== 0) {
            const cal = ((bill * (percenatge/ 100)) / noOfPeople);
            const tempTotal = (bill * (percenatge) / 100)
            const t = Number((tempTotal + bill)/noOfPeople)
            const totl = t.toFixed(2)
            const tip = cal.toFixed(2)
            setTipAmount(tip)
            setTotal(totl)
        } else {
            const cal = 0
            const tip = cal.toFixed(2)
            setTotal(tip)
            setTipAmount(tip)
        }
    }
    
    const reseter =()=>{
        tipCalculation(0, 0, 0)
        resetClicked()
    }

    return (
        <div className="display">
            <div className="amounts">
                <div className="tip-card-display">
                    <div className="tip-text">
                        <p className="tip-title">Tip Amount</p>
                        <p className="per">/ person</p>
                    </div>
                    <div className="tip-amount">${tipAmount}</div>
                </div>

                <div className="tip-card-display">
                    <div className="tip-text">
                        <p className="tip-title">Total</p>
                        <p className="per">/ person</p>
                    </div>
                    <div className="tip-amount">${total}</div>
                </div>
            </div>

            <button className={`reset opc`} onClick={reseter}>RESET</button>
        </div>
    )
}