import React from 'react'
import "./home.css"
import Swipper from '../../components/swipper/swipper'
import Layout from '../../components/layout/layout'
import { useNavigate } from 'react-router'

const Home = () => {

  const navigate = useNavigate();

  return (
    <Layout>
    <div className='home-page-container'>
       <div className='profile'>
        <img className='main_logo' src='/images/logo_home.png' alt='error'/>
       </div>
       {/* <div className='signup-container'>
        <div>SignIn</div> 
        <button className='signUp-btn-home'>Sign In</button>
        <button>X</button>
       </div> */}
       <div className='home-slider'>
          <Swipper/>
       </div>
       <div className='notification-home'>
          <div>
            <img src='/images/notification_home.png' alt='error'/>
            <p>Announcement</p>
          </div>
          <img src='/images/menu_icon.png' alt='error' />
       </div>
       <div className='home-link'>
        <div>
          <img src='/images/api_bind.png' alt='error'/>
          <p>API Bind</p>
        </div>
        <div>
        <img src='/images/trade.png' alt='error'/>
        <p>Trade</p>
        </div>
        <div>
        <img src='/images/invite_friends.png' alt='error'/>
        <p>Invite friend</p>
        </div>
        <div>
        <img src='/images/asset.png' alt='error'/>
        <p>Asset</p>
        </div>
        <div>
        <img src='/images/deposite.png' alt='error'/>
        <p>Deposit</p>
        </div>
        <div>
        <img src='/images/activation.png' alt='error'/>
        <p>Activation</p>
        </div>
       </div>
       <div className='bot-status'>
         <h3>Bot Status</h3>
         <div className='bot-status-home'>
          <div>
            <div className='bot-paused-home'>
              <p>Bot Status</p>
              <button><img src='/images/pause_small_home.png'/> Pause</button>
            </div>
            <div className='sub-home'>
              <img src='/images/info_home.png' alt='error'/>
              <p>Due to no subscription</p>
            </div>
            <button onClick={() => {navigate('/signup')}}>Sign Up</button>
          </div>
          <img src='/images/pause_home.png' alt='error'/>
         </div>
       </div>
       <div className='connect-home'>
         <img src='/images/binance_exchange.png' alt='error'/>
         <div>
          <p>Connect Binance Exchange</p>
          <button>Sign Up</button>
         </div>
       </div>
       <h4>
           Your Road To Financial Freedom!
       </h4>
       <p>Crafted with ❤️by Zelta Automations</p>
    </div>
    </Layout>
  )
}

export default Home