export const handleInputArrayChange = (evt, index, form, setForm) => {
    const value = evt.target.value;

    const data = [...form];
    data[index] = value;

    setForm(data);
};

export const saveTextList = (text, setText, list, setList) => {
    if (!text || !text.length) return;

    const data = [...list, text];

    setList(data);
    setText("");
};

export const removeTextList = (text, list, setList) => {
    if (!text || !text.length) return;

    const data = list.filter((obj) => obj !== text);

    setList(data);
};
