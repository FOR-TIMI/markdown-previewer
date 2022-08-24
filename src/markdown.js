import Editor from "./editor";
import Preview from "./preview";

import React, { Component } from 'react'


class Markdown extends Component{
    render(){
        return (
            <div>
           <Editor/>
           <Preview/>
            </div>

        )
    }
}

export default Markdown