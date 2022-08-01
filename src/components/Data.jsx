import React from "react";

const Data = (props) => {

    const data = props.children
    var d = new Date(data)

  return (
    <>
        <p align='right' style={{fontFamily: "Cinzel"}}>{d.toLocaleDateString('en-GB')}</p>
    </>
  )
}

export default Data