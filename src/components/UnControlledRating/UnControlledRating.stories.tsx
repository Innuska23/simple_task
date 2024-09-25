import type { Meta } from '@storybook/react';

import { UnControlledRating } from './UnControlledRating'

const meta: Meta<typeof UnControlledRating> = {
    component: UnControlledRating,
    title: 'UnControlledRating',
};

export default meta;

export const Rating = () => {
    return <UnControlledRating />
};

export const Rating1 = () => {
    return <UnControlledRating defaultValue={1} />
};

export const Rating2 = () => {
    return <UnControlledRating defaultValue={2} />
};

export const Rating3 = () => {
    return <UnControlledRating defaultValue={3} />
};

export const Rating4 = () => {
    return <UnControlledRating defaultValue={4} />
};

export const Rating5 = () => {
    return <UnControlledRating defaultValue={5} />
};

