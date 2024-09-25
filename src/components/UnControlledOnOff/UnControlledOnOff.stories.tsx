import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { UnControlledOnOff } from './UnControlledOnOff'

const meta: Meta<typeof UnControlledOnOff> = {
    component: UnControlledOnOff,
    title: 'UnControlledOnOff',
};

export default meta;
const callback = action("on or off clicked")

export const OnMode = () => {
    return <UnControlledOnOff defaultOn={true} onChange={callback} />
};

export const OffMode = () => {
    return <UnControlledOnOff defaultOn={false} onChange={callback} />
};

