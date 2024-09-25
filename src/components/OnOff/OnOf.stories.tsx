import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import { useState } from 'react';
import { OnOff } from './OnOff';

const meta: Meta<typeof OnOff> = {
    component: OnOff,
    title: 'OnOff',
};

export default meta;

const callback = action("on or off clicked")

export const OnOffTrue = () => {
    return <OnOff on={true} onChange={callback} />
};

export const OnOffFalse = () => {
    return <OnOff on={false} onChange={callback} />
};

export const OnOffSwitch = () => {
    const [swith, setSwith] = useState(false);

    return <OnOff on={swith} onChange={() => { setSwith(!swith) }} />
};

