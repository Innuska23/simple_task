import { Meta } from "@storybook/react/*";
import { useEffect, useState } from "react";


const meta: Meta<typeof SimpleExample> = {
    title: 'UseEffect demo',
};

export default meta;
export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    });

    useEffect(() => {
        console.log('useEffect only first render (ComponentDidMount)')
        document.title = counter.toString()
    }, []);


    useEffect(() => {
        console.log('useEffect first render and changed counter')
        document.title = counter.toString()
    }, [counter]);

    return (
        <>
            Hello counter: {counter} (fake: {fake})
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </>
    );
}