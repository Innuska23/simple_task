import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions'

import { useState } from 'react';
import { Clock } from './Clock';
import { AnalogClock } from './AnalogClock';


const meta: Meta<typeof Clock> = {
    component: Clock,
    title: 'Clock',
};

export default meta;

export const BaseExample = () => {
    return <Clock />
}

export const AnalogExample = () => {
    return <AnalogClock />
}

export const ClockMode = () => {
    const [mode, useMode] = useState<boolean>(false);
    return <>
        <button onClick={() => useMode(!mode)}> Choose view</button>
        {mode
            ? <Clock />
            : <AnalogClock />}
    </>
}