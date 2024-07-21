interface subTitle {
    fontFamily?: string;
    fontStyle: string;
    textSize?: string;
    textColor?: string;
    italic?: string;
    label: string
}


const subTitle = ({fontFamily, fontStyle, textSize, textColor, italic, label} : subTitle ) => {
    return(
        <p className={`ml-2 p-1 ${fontFamily} ${fontStyle} ${textSize} ${textColor} ${italic}`}
        >
            {label}
        </p>
    );
}

export default subTitle;