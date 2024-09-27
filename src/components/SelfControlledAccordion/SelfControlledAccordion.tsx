import { useReducer } from "react";
import { reducer, TOOGLE_COLLAPSED } from "./reducer";

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

export function SelfControlledAccordion({ title }: AccordionPropsType) {
    const [state, dispatch] = useReducer(reducer, { collapsed: false });

    const ButtonClick = () => {
        dispatch({ type: TOOGLE_COLLAPSED })
    }

    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={title} click={ButtonClick} />
            {!state.collapsed && <AccordionBody />}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    click: () => void
}

function AccordionTitle({ title, click }: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return <h3 onClick={click}>{title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

