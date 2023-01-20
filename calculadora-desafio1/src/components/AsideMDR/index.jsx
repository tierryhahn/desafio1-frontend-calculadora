import { ApiCalculatorContext } from "../../providers/apiProvider";
import { useContext } from "react";

function AsideMDR() {
    const {calculatorApi} = useContext(ApiCalculatorContext)

    return (
        <div className="containerAside">
            <h2>VOCÊ RECEBERÁ:</h2>
            <hr/>

            <p className="calculoAside">
                Amanhã: <strong>R${calculatorApi["1"].toFixed(2)}</strong>
            </p>

            <p className="calculoAside">
                Em 15 dias: <strong>R${calculatorApi["15"].toFixed(2)}</strong>
            </p>

            <p className="calculoAside">
                Em 30 dias: <strong>R${calculatorApi["30"].toFixed(2)}</strong>
            </p>

            <p className="calculoAside">
                Em 90 dias: <strong>R${calculatorApi["90"].toFixed(2)}</strong>
            </p>
        </div>
    );
}

export default AsideMDR
