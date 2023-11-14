import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='pt-3 bg-dark text-white border border-3 border-warning'>
        <div className="container d-flex justify-content-between">
                 
        <a>Start bootstrap
           </a>
           <ul>
            <a><span className='p-2'>Home</span></a>
            <a><span className='p-2 text-secondary'>About</span></a>
            <a><span className='p-2 text-secondary'>Services</span></a>
            <a><span className='p-2 text-secondary'>Contact</span></a>                    
           </ul>
           </div>
        </div>
    )
  }
}
