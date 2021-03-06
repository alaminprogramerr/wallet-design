import React, { useState } from 'react'


// scss connect
import './assets/scss/main.scss'

const App = () => {
  const [toggle, setToggle] = useState(true)
  const [setBg, setSetBg] = useState(true)
  const [tggleInnerContant, setTggleInnerContant] = useState(true)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)



  // optoin 
  const [firstIcon, setFirstIcon] =  useState('/images/1.png')
  const [txt, setTxt] = useState('3X BITCOIN UP ( 3XBTCUP)')
  const toggleSwitch = () => {
    const switchButtonContainer = document.getElementById('switch-button-container')
    setSetBg(!setBg)
    setTggleInnerContant(!tggleInnerContant)
  }
  const toggleSelect = () => {
    setIsOpenDropdown(true)
  }
  const setOption=(v1,v2,v3)=>{
    setFirstIcon(v1)
    setTxt(v2)
    setIsOpenDropdown(!isOpenDropdown)
  }
  return (
    <div>
      <div className="main-page " >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div id="switch-button-container" className="switch-button-container" onClick={() => { toggleSwitch() }}>
                <button style={setBg ? { color: 'white', backgroundColor: '#fa7f3d' } : { color: 'black', backgroundColor: 'transparent' }} className="btn active-switch-bg"> Trade </button>
                <button style={!setBg ? { color: 'white', backgroundColor: '#fa7f3d' } : { color: 'black', backgroundColor: 'transparent' }} className="btn">Liquidity</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wallet-card-container">
                <div className="wallet-card">
                  {/* cart header */}
                  <div className="wallet-header" >
                    <p onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
                      <span className="first-icon"><img src={firstIcon} /></span>
                      <span className="txt"> {txt} </span>
                      <span className="secend-icon"><img src="/images/bull.png" />  </span>
                      <span className="arrow-botton"><i class="fas fa-caret-down"></i> </span>
                    </p>
                    {
                      isOpenDropdown ?
                        <div className="wallet-drop-down">
                          <p style={{ margin:'0'}}>
                            <div className="row">
                              <div className="col-8">
                              </div>
                              {/* custom switch  */}
                              <div className="col-4 text-center">
                                <div className="form-group" style={{ marginBottom:'0'}}>
                                  <label className="toggle-switch">
                                    <input className="toggle-switch-check" type="checkbox" />
                                    <span aria-hidden="true" className="toggle-switch-bar">
                                      <span className="toggle-switch-handle">
                                        <span className="button-icon button-icon-on toggle-switch-icon">
                                          <img src="/images/bear.jpg" />
                                        </span>
                                        <span className="button-icon button-icon-off toggle-switch-icon">
                                          <img src="/images/bear.jpg" />
                                        </span>
                                      </span>
                                    </span>
                                  </label>
                                </div>

                              </div>
                            </div>
                          </p>
                          <p onClick={()=>{setOption('/images/1.png','3X BITCOIN UP ( 3XBTCUP )')}}>
                            <div className="row" >
                              <div className="col-9">
                                <span className="first-icon"><img src="/images/1.png" /></span>
                                <span className="txt">3X BITCOIN UP ( 3XBTCUP )</span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><img src="/images/bull.png" /> </span>
                              </div>
                            </div>
                          </p>
                          <p onClick={()=>{setOption('/images/2.png','3X ETHEREUM UP ( 3XETHUP )')}}>
                            <div className="row" onClick={()=>{}}>
                              <div className="col-9">
                                <span className="first-icon"><img src="/images/2.png" /></span>
                                <span className="txt">3X ETHEREUM UP ( 3XETHUP )</span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><img src="/images/bull.png" /> </span>
                              </div>
                            </div>
                          </p>
                          <p onClick={()=>{setOption('/images/3.png','3X CHAINLINK UP ( 3XLINKUP )')}}>
                            <div className="row">
                              <div className="col-9">
                                <span className="first-icon"><img src="/images/3.png" /></span>
                                <span className="txt">3X CHAINLINK UP ( 3XLINKUP )</span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><img src="/images/bull.png" /> </span>
                              </div>
                            </div>
                          </p>
                          <p onClick={()=>{setOption('/images/4.png','3X UNISWAP UP ( 3XUNIUP )')}}>
                            <div className="row">
                              <div className="col-9">
                                <span className="first-icon"><img src="/images/4.png" /></span>
                                <span className="txt">3X UNISWAP UP ( 3XUNIUP )</span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><img src="/images/bull.png" /> </span>
                              </div>
                            </div>
                          </p>
                          <p onClick={()=>{setOption('/images/5.png','3X BINANCE COIN UP ( 3XBNBUP ) ')}}>
                            <div className="row">
                              <div className="col-9">
                                <span className="first-icon"><img src="/images/5.png" /></span>
                                <span className="txt">3X BINANCE COIN UP ( 3XBNBUP ) </span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><img src="/images/bull.png" /> </span>
                              </div>
                            </div>
                          </p>
                        </div>
                        : ''
                    }
                  </div>
                  {/* card content */}
                  {
                    setTggleInnerContant ?
                      <div className="wallet-box">
                        {
                          tggleInnerContant ?
                            <div className="wallet-trade">
                              <div className="wallet-balance balance-from">
                                <div className="row">
                                  <div className="  col-md-6 text-left">
                                    <span className="top-text ">From</span>
                                    <input className="form-control" placeholder="0.000000000000" />
                                  </div>
                                  <div className="col-md-6 text-right">
                                    <span className="top-text"> Balanch 0.00000</span> <br />
                                    <span> <i class="fab fa-bitcoin"></i> 3XBTCUP</span>
                                  </div>
                                </div>
                              </div>
                              <div className="wallet-transform">
                                <i onClick={() => { setToggle(!toggle) }} class="fas fa-exchange-alt"></i>
                              </div>
                              <div className="wallet-balance balance-to">
                                <div className="row">
                                  <div className="  col-md-6 text-left">
                                    <span className="top-text ">To</span>
                                    <input className="form-control" placeholder="0.000000000000" />
                                  </div>
                                  <div className="col-md-6 text-right">
                                    <span className="top-text"> Balanch 0.00000</span> <br />
                                    <span> <img src="/images/bnb.png" /> 3XBTCUP</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            :
                            <div className="wallet-Liquidity">
                              <div className="wallet-Liquidity-balance">
                                <div className="row">
                                  <div className="  col-md-6 text-left">
                                    <span >0.000000</span>
                                  </div>
                                  <div className="col-md-6 text-right">
                                    <span >  <img src="/images/bnb.png" /> BNB</span>
                                  </div>
                                </div>
                                <hr />

                                <div className="row">
                                  <div className="col-md-12 text-right">
                                    <span >   LPT</span>
                                  </div>
                                </div>
                              </div>

                              <div className="wallet-Liquidity-balance mt-4">
                                <div className="row">
                                  <div className="  col-md-6 text-left">
                                    <span >0.000000</span>
                                  </div>
                                  <div className="col-md-6 text-right">
                                    <span >  LPT</span>
                                  </div>
                                </div>
                                <hr />

                                <div className="row">
                                  <div className="col-md-12 text-right">
                                    <span >  <img src="/images/bnb.png" /> BNB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                        }
                      </div>
                      :
                      <div className="wallet-box">
                        <div className="wallet-balance balance-to">
                          <div className="row">
                            <div className="  col-md-6 text-left">
                              <span className="top-text ">To</span>
                              <input className="form-control" placeholder="0.000000000000" />
                            </div>
                            <div className="col-md-6 text-right">
                              <span className="top-text"> Balanch 0.00000</span> <br />
                              <span> <img src="/images/bnb.png" /> 3XBTCUP</span>
                            </div>
                          </div>
                        </div>
                        <div className="wallet-transform">
                          <i onClick={() => { setToggle(!toggle) }} class="fas fa-exchange-alt"></i>
                        </div>
                        <div className="wallet-balance balance-from">
                          <div className="row">
                            <div className="  col-md-6 text-left">
                              <span className="top-text ">From</span>
                              <input className="form-control" placeholder="0.000000000000" />
                            </div>
                            <div className="col-md-6 text-right">
                              <span className="top-text"> Balanch 0.00000</span> <br />
                              <span> <i class="fab fa-bitcoin"></i> 3XBTCUP</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  }
                  {/* card footer */}
                  <div className="wallet-footer mt-5">
                    {
                      tggleInnerContant ?
                        <div className="row">
                          <div className="  col-md-6 text-left">
                            <span className="top-text ">Price </span> <br />
                            <span className="top-text ">Current Leverage:</span> <br />
                          </div>
                          <div className="col-md-6 text-right">
                            <span className="value"> 0.00 BNB PER 3XBTCUP</span> <br />
                            <span className="value">  2.50X</span>
                          </div>
                        </div>
                        :
                        <div className="row">
                          <div className="  col-md-6 text-left">
                            <span className="top-text ">Price Per LPT</span> <br />
                            <span className="top-text ">LPT Balance:</span> <br />
                            <span className="top-text ">Your Liquidity:</span> <br />
                          </div>
                          <div className="col-md-6 text-right">
                            <span className="value"> 5 BNB</span> <br />
                            <span className="value"> 2.00</span> <br />
                            <span className="value"> 10 BNB</span>
                          </div>
                        </div>
                    }
                  </div>
                  <div className="connect-button">
                    <button className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                      <i class="fas fa-wallet"></i><span>Connect Wallet</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="text-center connect-wallet">
                <button className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                  <i class="fas fa-wallet"></i><span>Connect Wallet</span>
                </button>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="connect-card">
                        <div class="connection-container">
                          <button className="btn connection-text" >
                            <img src="/images/mask.png" /> <span>Connect with metamask</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
