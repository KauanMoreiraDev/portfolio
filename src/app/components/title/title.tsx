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
        <p className={`m-2 p-1 font-${fontFamily} font-${fontStyle} text-${textSize} text-${textColor} ${italic}`}
        >
            {label}
        </p>
    );
}

export default Title;