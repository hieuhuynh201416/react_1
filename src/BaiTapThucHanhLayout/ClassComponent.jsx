import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'

import Footer from './Footer'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
        <div>
          <Body/>
        </div>
        
      </div>
      <Footer/>
    
      </div>
      
    )}
}
