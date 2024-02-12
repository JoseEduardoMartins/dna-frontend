import { useState } from "react";
import useFocus from "./hooks/useFocus";
import Title from "./components/Title";
import Field from "./components/Field";
import Label from "./components/Label";
import Input from "./components/Input";
import Button from "./components/Button";
import {
    handleInputArrayChange,
    saveTextList,
    removeTextList,
} from "./utils/formUtils";
import { save } from "./App.service";
import "./styles";

function App() {
    const [inputRef, setInputFocus] = useFocus();

    const [sequence, setSequence] = useState([]);
    const [dna, setDna] = useState("");

    const addDna = () => {
        if (sequence.length) {
            const standardSize = sequence[0].length;
            const currentSize = dna.length;
            const sizeDifference = Math.abs(standardSize - currentSize);

            if (standardSize > currentSize) {
                alert(
                    `Numero ${sizeDifference} de caracteres menor que ${standardSize}`
                );
                return;
            }

            if (standardSize < currentSize) {
                alert(
                    `Numero ${sizeDifference} de caracteres maior que ${standardSize}`
                );
                return;
            }
        }

        saveTextList(dna, setDna, sequence, setSequence);
        setInputFocus();
    };

    const validateDna = (evt) => {
        const value = String(evt.target.value).toUpperCase();

        const regex = /^[ATCG]+$/;
        if (!regex.test(value)) return;

        setDna(value);
    };

    const onSave = async () => {
        try {
            const response = await save({ sequence });
            alert(response.type === "human" ? "Humano" : "Sigmano");
        } catch (error) {
            alert("error");
        }
    };

    return (
        <div className="app">
            <form className="form">
                <Title>Verificar dna</Title>

                <Field flexDirection="column">
                    <Label>DNA</Label>
                    {sequence?.map((dna, index) => (
                        <Field key={index}>
                            <Input
                                type="text"
                                value={dna}
                                onChange={(e) =>
                                    handleInputArrayChange(
                                        e,
                                        index,
                                        sequence,
                                        setSequence
                                    )
                                }
                            />
                            <Button
                                theme="delete"
                                onClick={() =>
                                    removeTextList(dna, sequence, setSequence)
                                }
                            >
                                Deletar
                            </Button>
                        </Field>
                    ))}
                    {!sequence.length ? (
                        <Input
                            type="text"
                            ref={inputRef}
                            value={dna}
                            onChange={(e) => validateDna(e)}
                        />
                    ) : (
                        sequence.length < sequence[0].length && (
                            <Input
                                type="text"
                                ref={inputRef}
                                value={dna}
                                onChange={(e) => validateDna(e)}
                            />
                        )
                    )}
                    {!sequence.length ? (
                        <Button onClick={() => addDna()}>Adicionar</Button>
                    ) : (
                        sequence.length < sequence[0].length && (
                            <Button onClick={() => addDna()}>Adicionar</Button>
                        )
                    )}
                </Field>
                <Button
                    operation={
                        sequence.length &&
                        sequence[0].length === sequence.length
                            ? "active"
                            : "inactive"
                    }
                    onClick={() => onSave()}
                >
                    Verificar
                </Button>
            </form>
        </div>
    );
}

export default App;
