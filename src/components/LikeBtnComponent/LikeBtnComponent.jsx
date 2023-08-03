import { useState } from "react";
import './LikeBtnComponent.css';


export const LikeBtnComponent = () => {

    const [like, setLike] = useState(0);

    const handleLike = () => {
        setLike(like + 1);
    }

    return(
        <>
            <button className="btn-like" type="button" onClick={handleLike}>{like}</button>
        </>
    );

}