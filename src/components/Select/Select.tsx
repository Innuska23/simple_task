import { useState, KeyboardEvent, useEffect } from 'react'
import s from './Select.module.css'

type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = ({ value, onChange, items }: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoverEl, setHoverEl] = useState(value)


    useEffect(() => {
        setHoverEl(value)
    }, [value])

    const toggleItems = () => {
        setActive(!active)
    }

    const itemClicked = (value: any) => {
        onChange(value);
        toggleItems()
    }

    const selectedItem = items.find((i) => i.value === value);

    const hoveredItem = items.find((i) => i.value === hoverEl);

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log('press');
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoverEl) {

                    const pretidentEl = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1];

                    if (pretidentEl) {
                        onChange(pretidentEl.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    };

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem?.title}</span>
                {active &&
                    <div className={s.items}>
                        {items.map(i => <div
                            onMouseEnter={() => setHoverEl(i.value)}
                            className={s.item + " " + (hoveredItem === i ? s.selected : '')}
                            key={i.value}
                            onClick={() => { itemClicked(i.value) }}>
                            {i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
}