import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        // categoires.push(newCategory);
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [ ...cat, 'Valorant' ];
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                //  setCategories={setCategories}
                onNewCategories={(value) => onAddCategory(value)}
            />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
