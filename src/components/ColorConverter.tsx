import { useState } from "react";

export const ColorConverter = () => {

    const [color, setColor] = useState({
        hex: '',
        rgb: '',
        message: '',
    });

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        const reg = /[A-Fa-f\d]{6}/g;

        if (value.length === 7 && value[0] === '#' && reg.test(value.substring(1))) {

            const rRGB = parseInt(value.substring(1, 3), 16);
            const gRGB = parseInt(value.substring(3, 5), 16);
            const bRGB = parseInt(value.substring(5), 16);

            setColor(() => {
                return {
                    hex: value,
                    rgb: 'rgb(' + rRGB + ', ' + gRGB + ', ' + bRGB + ')',
                    message: ''
                };
            });
        }
        else if (value.length >= 7) {
            setColor(() => {
                return {
                    hex: value,
                    rgb: 'red',
                    message:'error'
                }
            });
        }
        else {
            setColor(() => {
                return {
                    hex: value,
                    rgb: '',
                    message: ''
                }
            });
        }
    }

    return (
        <div className="color-container" style={{backgroundColor: color.rgb}}>
            <div className="input-container">
                <input 
                    type="text" 
                    name="color-input" 
                    className="color-input" 
                    onChange={handleColorChange}
                />
                <div className="message" style={{display: color.rgb ? 'block' : 'none'}}>{color.message ? color.message : color.rgb}</div>
            </div>
        </div>
    )
}
