type ButtonType = {
    title?: string
    style?: React.CSSProperties;
    onClickHandler?: () => void
}

const defaultStyle: React.CSSProperties = {
    height: '50px',
    width: '50px',
};

export const Button = ({ title, style, onClickHandler }: ButtonType) => {
    return (
        <button
            style={{ ...defaultStyle, ...style }}
            onClick={onClickHandler}> {title}</ button >
    )
}