
type PropsType = {
    on: boolean
    onChange: () => void
}

export const OnOff = ({ on, onChange }: PropsType) => {

    // const handlerChangeOn = () => {
    //     onClick(!on);
    // }

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? 'green' : 'red'

    };
    return (
        <div >
            <div style={onStyle} onClick={onChange}>On</div>
            <div style={offStyle} onClick={onChange}>Off</div>
            <div style={indicatorStyle} onClick={onChange} ></div>
        </div >
    )
}

// export const OnOff = () => {
//     const [isOn, setIsOn] = useState(false);

//     const toggleIsOnOff = () => {
//         setIsOn((prevState) => !prevState);
//     }

//     return (
//         <div style={{ display: "flex", gap: "5px" }}>
//             <Button
//                 title="On"
//                 style={{ backgroundColor: isOn ? 'green' : 'gray' }}
//                 onClickHandler={toggleIsOnOff} />
//             <Button
//                 title="Off"
//                 style={{ backgroundColor: !isOn ? 'red' : 'gray' }}
//                 onClickHandler={toggleIsOnOff} />
//             <Button
//                 style={{ borderRadius: "50%", backgroundColor: !isOn ? 'red' : 'green' }}
//                 onClickHandler={toggleIsOnOff} />
//         </div>
//     )
// }