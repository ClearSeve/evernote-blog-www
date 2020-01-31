import React, { Component } from "react";
import NextHead from 'next/head'
import "../myconfig"


function Head(props) {
  let myTitle = null;
  if (props.hasOwnProperty('title') == true) {
    myTitle = <title>{props.title} - {myconfig.title}</title>
  } else {
    myTitle = <title>{myconfig.title}</title>
  }

  return (
    <div>
      <NextHead>
        {myTitle}
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </NextHead>
    </div>
  )
}


export default Head;