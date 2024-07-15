import { useState } from "react";

export const AddCategory = ({ onNewCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategories(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};
