import "./styles.scss";
import {Header} from "../index.js"
export default function Banner(){
    return(
        <div className="banner">
            <div className="header-nav">
                <Header />
            </div>
            
            <h1>funny sound</h1>
        </div>
    );
}