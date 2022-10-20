import React from "react";
import './BoxContainer.css';
import BoxData from "./BoxData";
import Box from "./Box";

export default function BoxContainer (){

    const [squares, setSquares] = React.useState(BoxData);

    function toggle (boxId){
        setSquares(
            (oldData) => {
                const newData = oldData.map((olD) => {
                    if(olD.id == boxId){
                        return({
                            id: olD.id,
                            state: !olD.state
                        })
                    }else{
                        return(olD);
                    }
                    
                })
                return (newData);
            }
        );
    }

    const boxes = squares.map((boxData) => {
        return (
            <Box key = {boxData.id} isOn = {boxData.state} id = {boxData.id} toggle = {toggle}/>
        );
    }
    );

    return(
        <div>
            {boxes}
        </div>
    );
}