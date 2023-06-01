const scaleName = {
    c: 'Celsius',
    f: 'Fahrenhite'
}

export default function TemperatureInput({temperature, scale, onTemperatureChange}){
    return(
        <fieldset>
            <legend>Enter temperature in {scaleName[scale]}</legend>
            <input type='text' value={temperature}  onChange={(e) => onTemperatureChange(e, scale)} />
        </fieldset>
    )
}