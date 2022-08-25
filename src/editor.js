import React, { Component } from 'react'
import './editor.css'
import $ from 'jquery'




class Editor extends Component{

  init(){
    $('#editor').on('keyup', () => {
     console.log($('#editor').val())
    })
  }

    render(){
      {this.init()}

        return (
            <div className='editorWrapper'>
                <textarea id="editor">
                                       
                </textarea>
             </div>
        )
    }
}

export default Editor