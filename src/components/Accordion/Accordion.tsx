type AccordionPropsType = {
    title: string
    collapsed?: boolean
    onChange: () => void
}

export function Accordion({ title, collapsed, onChange }: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={title} onChange={onChange} />
            {!collapsed && <AccordionBody />}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle({ title, onChange, }: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return <h3 onClick={onChange}>{title}</h3>
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
