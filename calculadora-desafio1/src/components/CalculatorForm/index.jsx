import { useContext } from "react";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiCalculatorContext } from "../../providers/apiProvider";
import api from "../../services/api"
import * as yup from "yup";

function CalculatorForm() {
    const {setCalculatorApi} = useContext(ApiCalculatorContext)

    const schemaCalculator = yup.object().shape({
        amount: yup
            .number()
            .typeError("Só números são válidos")
            .min(1000, "Mínimo 1000")
            .required("Valor obrigatório"),
        installments: yup
            .number()
            .typeError("Só números são válidos")
            .min(1, "Mínimo 1 parcela")
            .max(12, "Máximo 12 parcelas")
            .required("Parcelas Obrigatórias"),
        mdr: yup
            .number()
            .typeError("Só números são válidos")
            .min(0, "MDR mínimo 0")
            .max(100, "Máximo MDR 100")
            .required("MDR Obrigatório"),
    });
    
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schemaCalculator)})

    const onSubmitApi = (data) => {
        api
            .post("", data)
            .then((data) => {
                setCalculatorApi(data.data)
            })
            .catch((err) => {
                console.log(err)
            });
    };

    return (
        <div className="containerCalculator">
            <h2>Simule sua antecipação</h2>
            <form onSubmit={handleSubmit(onSubmitApi)}>
                <div className="containerForm">
                    <label>Informe o valor da venda*</label>
                    <p className="Perrors">{errors.amount?.message}</p>
                    <input type="text" placeholder="R$" name="amount" {...register("amount")}/>
                </div>

                <div className="containerForm">
                    <label>Em quantas parcelas*</label>
                    <p className="Perrors">{errors.amount?.message}</p>
                    <input type="text" name="installments" {...register("installments")}/>
                    <p>Máximo de 12 parcelas</p>
                </div>

                <div className="containerForm">
                    <label>Informe o percentual MDR*</label>
                    <p className="Perrors">{errors.amount?.message}</p>
                    <input type="text" name="mdr" {...register("mdr")}/>
                </div>

                <button type="submit">Calcular</button>
            </form>
        </div>
    );
}

export default CalculatorForm;
