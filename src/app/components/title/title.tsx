interface Title {
    fontFamily?: string;
    fontStyle: string;
    textSize?: string;
    textColor?: string;
    italic?: string;
    label: string
}


const Title = ({fontFamily, fontStyle, textSize, textColor, italic, label} : Title ) => {
    return(
        <div className={`m-2 p-1 font-${fontFamily} ${fontStyle} ${textSize} ${textColor} ${italic}`}
        >
            {label}
        </div>
    );
}

export default Title;