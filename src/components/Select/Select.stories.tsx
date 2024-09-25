import { Meta } from "@storybook/react/*";
import { Select } from "./Select";
import { useState } from "react";

const meta: Meta<typeof WithValue> = {
    component: Select,
    title: 'Select',
};

export default meta;

export const WithValue = () => {
    const [value, setValue] = useState<number>(1);

    const onChangeHandler = (value: any) => { setValue(value) }
    return <Select
        value={value}
        onChange={onChangeHandler}
        items={[
            { title: 'Dimych', value: 1 },
            { title: 'Valera', value: 2 },
            { title: 'Artem', value: 3 }
        ]} />
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    const onChangeHandler = (value: any) => { setValue(value) }
    return <Select
        onChange={onChangeHandler}
        value={value}
        items={[
            { title: 'Dimych', value: 1 },
            { title: 'Valera', value: 2 },
            { title: 'Artem', value: 3 }
        ]} />
}