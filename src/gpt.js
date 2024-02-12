import React, { useState } from "react";

function VerificadorDNA() {
    const [dnaInput, setDnaInput] = useState("");
    const [resultado, setResultado] = useState("");

    function verificarDNA() {
        const dnaArray = dnaInput.toUpperCase().split(",");

        const sigmanoDetectado = verificaSigmano(dnaArray);

        if (sigmanoDetectado) {
            setResultado("Sigmano detectado!");
        } else {
            setResultado("Não é um Sigmano.");
        }
    }

    const checkSigmano = () => {
        const dna = formData.dna;

        const rows = dna.length;
        const columns = dna[0].length;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j <= columns - 4; j++) {
                if (
                    dna[i][j] === dna[i][j + 1] &&
                    dna[i][j] === dna[i][j + 2] &&
                    dna[i][j] === dna[i][j + 3]
                ) {
                    return true;
                }
            }
        }

        for (let i = 0; i <= rows - 4; i++) {
            for (let j = 0; j < columns; j++) {
                if (
                    dna[i][j] === dna[i + 1][j] &&
                    dna[i][j] === dna[i + 2][j] &&
                    dna[i][j] === dna[i + 3][j]
                ) {
                    return true;
                }
            }
        }

        for (let i = 0; i <= rows - 4; i++) {
            for (let j = 0; j <= columns - 4; j++) {
                if (
                    dna[i][j] === dna[i + 1][j + 1] &&
                    dna[i][j] === dna[i + 2][j + 2] &&
                    dna[i][j] === dna[i + 3][j + 3]
                ) {
                    return true;
                }
            }
        }

        for (let i = 3; i < rows; i++) {
            for (let j = 0; j <= columns - 4; j++) {
                if (
                    dna[i][j] === dna[i - 1][j + 1] &&
                    dna[i][j] === dna[i - 2][j + 2] &&
                    dna[i][j] === dna[i - 3][j + 3]
                ) {
                    return true;
                }
            }
        }

        return false;
    };

    return (
        <div className="container">
            <h2>Identificador de DNA</h2>
            <label htmlFor="dnaInput">Sequência de DNA:</label>
            <input
                type="text"
                id="dnaInput"
                value={dnaInput}
                onChange={(e) => setDnaInput(e.target.value)}
                placeholder="Insira a sequência de DNA aqui..."
            />
            <button onClick={verificarDNA}>Verificar</button>
            <div id="resultado">{resultado}</div>
        </div>
    );
}

export default VerificadorDNA;
