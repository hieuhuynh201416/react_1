import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
      <div className='pt-2 border border-3 border-danger'>
        <div className='container p-5 border border-3 border-primary '>
          <div className='banner text-start'>
            <h1 className=''>A Warm Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate explicabo doloremque, ea qui molestiae veritatis dolorum dolores tempora amet.
            </p>
            <button className='bg-primary text-white'>Call to action!</button>
          </div>
        </div>
        <div className='container p-2'>
          <div className='d-flex' style={{ gap: 'calc(20px / 3)' }}>
            <div style={{ width: '325px', height: '500px' }} className="border border-3 border-danger d-flex flex-column justify-content-between">
              <div>
                <div className="w-100"><h2 className='p-5 bg-secondary text-light'>500 x 325</h2></div>
                <div>
                  <h2>Card title</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate explicabo doloremque, ea qui molestiae veritatis dolorum dolores tempora amet.
                  </p>
                </div>
              </div>
              <div className='w100 bg-secondary  border-top'>
                <button className='p-2 bg-primary text-white'>Find out more</button>
              </div>
            </div>
            <div style={{ width: '325px', height: '500px' }} className="border border-3 border-danger d-flex flex-column justify-content-between">
              <div>
                <div className="w-100"><h2 className='p-5 bg-secondary text-light'>500 x 325</h2></div>
                <div>
                  <h2>Card title</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate explicabo doloremque, ea qui molestiae veritatis dolorum dolores tempora amet.
                  </p>
                </div>
              </div>
              <div className='w100 bg-secondary  border-top'>
                <button className='p-2 bg-primary text-white'>Find out more</button>
              </div>
            </div>
            <div style={{ width: '325px', height: '500px' }} className="border border-3 border-danger d-flex flex-column justify-content-between">
              <div>
                <div className="w-100"><h2 className='p-5 bg-secondary text-light'>500 x 325</h2></div>
                <div>
                  <h2>Card title</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate explicabo doloremque, ea qui molestiae veritatis dolorum dolores tempora amet.
                  </p>
                </div>
              </div>
              <div className='w100 bg-secondary  border-top'>
                <button className='p-2 bg-primary text-white'>Find out more</button>
              </div>
            </div>
            <div style={{ width: '325px', height: '500px' }} className="border border-3 border-danger d-flex flex-column justify-content-between">
              <div>
                <div className="w-100"><h2 className='p-5 bg-secondary text-light'>500 x 325</h2></div>
                <div>
                  <h2>Card title</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate explicabo doloremque, ea qui molestiae veritatis dolorum dolores tempora amet.
                  </p>
                </div>
              </div>
              <div className='w100 bg-secondary  border-top'>
                <button className='p-2 bg-primary text-white'>Find out more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
