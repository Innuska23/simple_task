import { Meta } from "@storybook/react";
import { useMemo, useState } from "react";
import { Select } from "../components/Select/Select";

const meta: Meta<typeof SelectWithMemo> = {
    component: Select,
    title: 'Select memo',
};

export default meta;

export const SelectWithMemo = () => {

    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState<number>(1);

    const onChangeHandler = (value: number) => {
        setValue(value);
    };

    const newItems = useMemo(() => {
        return [
            { title: 'Minsk', value: 1 },
            { title: 'Kiev', value: 2 },
            { title: 'Kharkiv', value: 3 }
        ].filter(item => item.title.toLowerCase().includes('i'));
    }, []);

    return (
        <>
            <Select
                value={value}
                onChange={onChangeHandler}
                items={newItems}
            />

            <div>
                <button onClick={() => setCounter(counter + 1)}>
                    Increment counter: {counter}
                </button>
            </div>
        </>
    );
};