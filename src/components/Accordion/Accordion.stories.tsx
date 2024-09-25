import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions'

import { Accordion } from './Accordion'
import { useState } from 'react';


const meta: Meta<typeof Accordion> = {
    component: Accordion,
    title: 'Accordion',
};

// export default {
//     component: Accordion,
// };

export default meta;

// type Story = StoryObj<typeof Accordion>

// export const FirstStory: Story = {
//     args: {
//         title: "CollapsedAccordion",
//         collapsed: true,
//     }
// }

const onChangeHandler = action("onChange")
const onClickCallback = action("some item was clicked")

export const CollapsedAccordion = () => {
    return <Accordion
        title="CollapsedAccordion"
        collapsed={true}
        onChange={onChangeHandler}
        items={[]}
        onclick={onClickCallback} />
}

export const OpenedAccordion = () => {
    return <Accordion
        title="OpenedAccordion"
        collapsed={false}
        onChange={onChangeHandler}
        items={[
            { title: 'Dimych', value: 1 },
            { title: 'Valera', value: 2 },
            { title: 'Artem', value: 3 }
        ]}
        onclick={onClickCallback} />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);
    return <Accordion
        title="OpenedAccordion"
        collapsed={collapsed}
        items={[
            { title: 'Dimych', value: 1 },
            { title: 'Valera', value: 2 },
            { title: 'Artem', value: 3 }
        ]}
        onChange={() => { setCollapsed(!collapsed) }}
        onclick={onClickCallback} />
}