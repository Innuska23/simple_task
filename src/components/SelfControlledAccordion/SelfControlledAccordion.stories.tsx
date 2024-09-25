import type { Meta } from '@storybook/react';

import { SelfControlledAccordion } from './SelfControlledAccordion'

const meta: Meta<typeof SelfControlledAccordion> = {
    component: SelfControlledAccordion,
    title: 'SelfControlledAccordion',
};

export default meta;

export const Accordion = () => {
    return <SelfControlledAccordion title='Accordion' />
};

