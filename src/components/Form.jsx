import { useState, useEffect } from 'react'
import styles from './Form.module.css'


export function Form() {
    const [totalEmployees, setTotalEmployees] = useState(0);
    const [totalRepetitions, setTotalRepetitions] = useState(0);
    const [values, setValues] = useState({});
    let totalEmployeeQuantity;
    let totalRepetitionQuantity;
    function handleEmployeeQuantity(event) {
        const { name, value } = event.target;
        const parsedValue = parseInt(value, 10);


        const prevValue = values[name] || 0;


        const diff = parsedValue - prevValue;



        if (value.trim() === '') {

            totalEmployeeQuantity = totalEmployees - prevValue;
        } else {

            totalEmployeeQuantity = totalEmployees + diff;
        }


        setValues(prevValues => ({
            ...prevValues,
            [name]: parsedValue
        }));


        setTotalEmployees(totalEmployeeQuantity);
    }

    function handleRepetitionQuantity(event) {
        const { name, value } = event.target;
        const parsedValue = parseInt(value, 10);


        const prevValue = values[name] || 0;


        const diff = parsedValue - prevValue;



        if (value.trim() === '') {

            totalRepetitionQuantity = totalRepetitions - prevValue;
        } else {

            totalRepetitionQuantity = totalRepetitions + diff;
        }


        setValues(prevValues => ({
            ...prevValues,
            [name]: parsedValue
        }));


        setTotalRepetitions(totalRepetitionQuantity);
    }

    // Calculate tota


    return (
        <div >
            <div className={styles.wrapper}>
               
                    <><div className={styles.container}>
                        <form>
                            <h1> Café da manhã </h1>
                            <p>BERÇÁRIO</p>
                            <h6>(0 A 11 MESES)</h6>
                            <a> Número de comensais </a>
                            <input type='number' placeholder='Digite aqui' name="1" onChange={handleEmployeeQuantity}></input>

                            <a> Número de repetições </a>
                            <input type='number' placeholder='Digite aqui' name="1" onChange={handleRepetitionQuantity}></input>

                            <p>TURMA 1 E 2 ANOS   </p>
                            <h6> (1 ANO A 2 ANOS E 11 MESES) </h6>
                            <a> Número de comensais </a>
                            <input type='number' placeholder='Digite aqui' name="2" onChange={handleEmployeeQuantity}></input>

                            <a> Número de repetições </a>
                            <input type='number' placeholder='Digite aqui' name="2" onChange={handleRepetitionQuantity}></input>

                            <p>TURMA 3, 4 e 5 ANOS
                            </p>
                            <h6>(3 ANOS A 5 ANOS E 11 MESES)</h6>
                            <a> Número de comensais </a>
                            <input type='number' placeholder='Digite aqui' name="3" onChange={handleEmployeeQuantity}></input>

                            <a> Número de repetições </a>
                            <input type='number' placeholder='Digite aqui' name="3" onChange={handleRepetitionQuantity}></input>

                            <p> Funcionários
                            </p>
                            <a> Número de comensais </a>
                            <input type='number' placeholder='Digite aqui' name="4" onChange={handleEmployeeQuantity}></input>
                        </form>

                    </div><div className={styles.container}>
                            <form>
                                <h1> Colação </h1>
                                <p>BERÇÁRIO</p>
                                <h6>(0 A 11 MESES)</h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="5" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="5" onChange={handleRepetitionQuantity}></input>
                            </form>
                        </div><div className={styles.container}>
                            <form>
                                <h1> Almoço </h1>
                                <p>BERÇÁRIO</p>
                                <h6>(0 A 11 MESES)</h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="6" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="6" onChange={handleRepetitionQuantity}></input>

                                <p>TURMA 1 E 2 ANOS
                                </p>
                                <h6> (1 ANO A 2 ANOS E 11 MESES) </h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="7" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="7" onChange={handleRepetitionQuantity}></input>

                                <p>TURMA 3, 4 e 5 ANOS
                                </p>
                                <h6>(3 ANOS A 5 ANOS E 11 MESES)</h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="8" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="8" onChange={handleRepetitionQuantity}></input>

                                <p> Funcionários
                                </p>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="9" onChange={handleEmployeeQuantity}></input>
                            </form>
                        </div><div className={styles.container}>
                            <form>
                                <h1> Refeição da tarde (Lanche) </h1>
                                <p>BERÇÁRIO</p>
                                <h6>(0 A 11 MESES)</h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="10" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="10" onChange={handleRepetitionQuantity}></input>

                                <p>TURMA 1 E 2 ANOS

                                </p>
                                <h6> (1 ANO A 2 ANOS E 11 MESES) </h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="11" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="11" onChange={handleRepetitionQuantity}></input>

                                <p>TURMA 3, 4 e 5 ANOS
                                </p>
                                <h6>(3 ANOS A 5 ANOS E 11 MESES)</h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="12" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="12" onChange={handleRepetitionQuantity}></input>

                                <p> Funcionários
                                </p>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="13" onChange={handleEmployeeQuantity}></input>
                            </form>

                        </div><div className={styles.container}>
                            <form>
                                <h1> Jantar </h1>
                                <p>BERÇÁRIO</p>
                                <h6>(0 A 11 MESES)</h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="14" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="14" onChange={handleRepetitionQuantity}></input>

                                <p>TURMA 1 E 2 ANOS

                                </p>
                                <h6> (1 ANO A 2 ANOS E 11 MESES) </h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="15" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="15" onChange={handleRepetitionQuantity}></input>

                                <p>TURMA 3, 4 e 5 ANOS
                                </p>
                                <h6>(3 ANOS A 5 ANOS E 11 MESES)</h6>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="16" onChange={handleEmployeeQuantity}></input>

                                <a> Número de repetições </a>
                                <input type='number' placeholder='Digite aqui' name="16" onChange={handleRepetitionQuantity}></input>

                                <p> Funcionários
                                </p>
                                <a> Número de comensais </a>
                                <input type='number' placeholder='Digite aqui' name="17" onChange={handleEmployeeQuantity}></input>
                            </form>
                        </div></>
                
            </div>
            <div className={styles.totalContainer}>
   
                    <><div className={styles.showResults}>
                        <h2> Total de pessoas: {totalEmployees} </h2>
                        <h2> Total de repetições: {totalRepetitions} </h2>
                    </div></>
                

            </div>
        </div>

    )
}