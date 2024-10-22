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

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // });

    useEffect(() => {
        setInterval(() => {
            setCounter((counter) => counter + 1)
        }, 1000)
    });

    return (
        <>
            Hello counter: {counter} - (fake: {fake})
            {/* (fake: {fake})
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button> */}
        </>
    );
}

export const setIntervalDate = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setTime(`${hours}:${minutes}:${seconds}`);
        };
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    });

    return (
        <>
            Hello!
            Time now:  {time}
        </>
    );
}