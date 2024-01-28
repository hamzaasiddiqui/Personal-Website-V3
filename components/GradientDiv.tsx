import React, {ReactNode} from "react";


const GradientPosition = () => {

    const [ mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (ev:any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (mousePosition)
};


interface GradientdivProps{
    children:ReactNode
    className:string
}
const Gradientdiv:React.FC<GradientdivProps> = ({children,className}) =>{
    return(
        <div

            style={{
                backgroundImage: `radial-gradient( circle at ${GradientPosition().x}px ${GradientPosition().y}px, rgb(74, 4, 4)  , rgb(50, 0, 2) 50% )`
            }}

            className={className}>
            {children}
        </div>
    )
}

export default Gradientdiv