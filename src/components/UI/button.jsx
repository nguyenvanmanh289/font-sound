import { Button } from "antd";
export default function CustomButton({text,type,size ,handleClick}){
    return (
        <Button
            type={type}
            size={size}
            onclick = {handleClick}
        >
                {text || "button text"}
        </Button>
    )
}