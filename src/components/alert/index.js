import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import "./style.css";

const AlertComponent = (props) => {
     const [close, setClose] = useState(props.isShow);
     
     useEffect(() => {
          setClose(props.isShow);
     }, [props.isShow])

     const alertModalStatus = () => {
          setClose(!close);
          if (props.color == "#1bd0fe")
               props.seeMore(!close);
     }

     return (
          
          <div className={close ? 'alert-section' : 'modalClose'} style={{ background: props.color }}>
               {props.isShow}
               <p className={props.color == "#1bd0fe" ? "white" : "black"}>{props.title}</p>
               <IoIosClose className={props.color == "#1bd0fe" ? "white" : "black"} onClick={alertModalStatus} />
          </div>
     )
}

export default AlertComponent;
