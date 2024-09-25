import type { Meta } from '@storybook/react';

import { Rating, RatingValueType } from './Rating'
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
    component: Rating,
    title: 'Rating',
};

export default meta;

export const EmptyStarts = () => {
    return <Rating value={0} onClick={() => { }} />
};

export const Start1 = () => {
    return <Rating value={1} onClick={() => { }} />
};

export const Start2 = () => {
    return <Rating value={2} onClick={() => { }} />
};

export const Start3 = () => {
    return <Rating value={3} onClick={() => { }} />
};

export const Start4 = () => {
    return <Rating value={4} onClick={() => { }} />
};

export const Start5 = () => {
    return <Rating value={5} onClick={() => { }} />
};

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5);
    return <Rating value={rating} onClick={setRating} />
}

