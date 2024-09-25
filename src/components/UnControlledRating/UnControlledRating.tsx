import { useState } from "react";
import { RatingValueType } from "../Rating/Rating";

type RatingPropsType = {
    defaultValue?: RatingValueType
};

export function UnControlledRating(props: RatingPropsType) {
    console.log("Rating rendering");
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} changeStar={() => setValue(1)} />
            <Star selected={value > 1} changeStar={() => setValue(2)} />
            <Star selected={value > 2} changeStar={() => setValue(3)} />
            <Star selected={value > 3} changeStar={() => setValue(4)} />
            <Star selected={value > 4} changeStar={() => setValue(5)} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    changeStar?: () => void
}

const Star = ({ selected, changeStar }: StarPropsType) => {
    console.log("Star rendering");
    // const handleClick = (newValue: number) => {
    //     changeStar(newValue);
    // };

    return (
        <span onClick={changeStar}>
            {selected ? <b>star</b> : "star"}
        </span>
    );
}

// const Star = ({ selected }: StarPropsType) => {
//     console.log("Star rendering");
//     // <span>
//     //     {selected ? <b>star</b> : "star"}
//     // </span>
//     if (selected === true) {
//         return <span><b>star </b></span>
//     }
//     else {
//         return <span>star </span>
//     }
// }


// if (props.value === 1) {
//     return (
//         <div>
//             <Star selected={true} />
//             <Star selected={false} />
//             <Star selected={false} />
//             <Star selected={false} />
//             <Star selected={false} />
//         </div>
//     );
// }
// if (props.value === 2) {
//     return (
//         <div>
//             <Star selected={true} />
//             <Star selected={true} />
//             <Star selected={false} />
//             <Star selected={false} />
//             <Star selected={false} />
//         </div>
//     );
// }
// if (props.value === 3) {
//     return (
//         <div>
//             <Star selected={true} />
//             <Star selected={true} />
//             <Star selected={true} />
//             <Star selected={false} />
//             <Star selected={false} />
//         </div>
//     );
// }
// if (props.value === 4) {
//     return (
//         <div>
//             <Star selected={true} />
//             <Star selected={true} />
//             <Star selected={true} />
//             <Star selected={true} />
//             <Star selected={false} />
//         </div>
//     );
// }
// if (props.value === 5) {
//     return (
//         <div>
//             <Star selected={true} />
//             <Star selected={true} />
//             <Star selected={true} />
//             <Star selected={true} />
//             <Star selected={true} />
//         </div>
//     );
// }
// else {
//     return (
//         <div>
//             <Star selected={false} />
//             <Star selected={false} />
//             <Star selected={false} />
//             <Star selected={false} />
//             <Star selected={false} />
//         </div>
//     )
// }
// }