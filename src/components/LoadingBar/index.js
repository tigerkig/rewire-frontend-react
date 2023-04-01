import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import useStyle from "./styles";

export default function LoadingBar(props) {
     const classes = useStyle();

     return (
          <div className={classes.fullScreen}>
               <div className={classes.loader}>
                    <PropagateLoader color={"#21D0FD"} loading={props.loading} size={20} speedMultiplier={0.6} />
               </div>
          </div>
     )
}