import React, { Component } from 'react'
import { marked } from 'marked'
import $ from 'jquery'

class Preview extends Component{

    init(){
       return ($('#editor').on('keyup', () => {
        //    $('#preview').html(marked.parse(JSON.stringify($('#editor').val())))

          return console.log($('#editor').val())
          }))
    }


    render(){

        


        return (

             <div id="preview">
                { this.init() }
                {}

             </div>
        )
    }
}


export default Preview