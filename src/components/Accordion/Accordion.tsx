type ItemType = {
    title: string,
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed?: boolean
    onChange: () => void
    items: Array<ItemType>
    onclick: (value: any) => void
}

export function Accordion({ title, collapsed, onChange, items, onclick }: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={title} onChange={onChange} />
            {!collapsed && <AccordionBody items={items} onclick={onclick} />}
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

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onclick: (value: any) => void
}

function AccordionBody({ items, onclick }: AccordionBodyPropsType) {
    console.log("AccordionBody rendering");
    return (
        <ul>
            {items.map((i, index) => {
                return <li key={index} onClick={() => { onclick(i.value) }}>{i.title}</li>
            })}
            {/* <li>1</li>
            <li>2</li>
            <li>3</li> */}
        </ul>
    )
}
