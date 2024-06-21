import {CustomButton} from "../index.js"
import { IoMdHeartEmpty } from "react-icons/io"; 
import { FaBars } from "react-icons/fa6";
import "./styles.scss"

export default function Header(){
    return (
        <header className="header-main">
            <div className="logo">
                logo
            </div>
            <div className="nav">
                <CustomButton
                    type={"text"}
                    text={"downloaded"}
                    size={"large"}
                    handleClick={null}
                />

                <CustomButton
                    type={"text"}
                    text={<IoMdHeartEmpty />}
                    size={"large"}
                    handleClick={null}
                />

                <CustomButton
                    type={"text"}
                    text={<FaBars />}
                    size={"large"}
                    handleClick={null}
                />
            </div>
            
        </header>
    );
}