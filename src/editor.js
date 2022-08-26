import React, { Component } from 'react'
import './editor.css'
import $ from 'jquery'
import { marked } from 'marked'



class Editor extends Component{


  
  constructor(props){
    super(props);
    this.state = {
      text : "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n",
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(){
    marked.setOptions({
      breaks: true
    })

       this.setState(text => {
        return {text : $('#editor').val()}
       }) 

    
    }

    createMarkup() {
      return { __html: marked.parse(this.state.text) };
    }
     preview() {
      return <div id="preview" dangerouslySetInnerHTML={this.createMarkup()} />;
    }

    render(){
    
        return (
          <div className='App-container'>

            <div className='editorWrapper'>
               <div className='editor-tag'>Editor</div>
                <textarea id="editor" onKeyUp={this.updateText} defaultValue={this.state.text}>
                    {/* text for markup conversion goes here  */}
                </textarea>
                
             </div>
             
            <div className='preview-tag'>Preview</div> 
            <div className='previewWrapper'>            
               {this.preview()}
            </div>
                         
             
          </div>
        )
    }
}


export default Editor