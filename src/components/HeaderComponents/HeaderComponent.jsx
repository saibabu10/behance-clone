import React from 'react'
import { adobe_cloude } from '../../data'
import { adobeLogo } from '../../data'
import {bell} from '../../data'
import '../HeaderComponents/HeaderComponents.css'
const HeaderComponent = () => {
  return (
      <div className='navbar'>
        <div className='left'>
          <div className='logo'>Bēhance</div>
          <ul className='links'>
            <div className='link'><a href='https://www.behance.net/for_you/onboarding?tracking_source=nav20'>For You</a></div>
            <div className='link'><a href='https://www.behance.net/galleries?tracking_source=nav20'>Discover</a></div>
            <div className='link'><a href='https://www.behance.net/hire?tracking_source=nav20'>Hire</a></div>
            <div className='link'><a href='https://www.behance.net/assets?tracking_source=nav20'>Assets</a></div>
            <div className='link'><a href='https://www.behance.net/joblist?tracking_source=nav20'>Jobs</a></div>
          </ul>
        </div>
        <div className='right'>
          <ul className='register'>
          <div><img src={bell} alt='bell'/></div>
          <div className='Log_in'><a href='https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252Fjoblist%253Ftracking_source%253Dnav20%2526isa0%253D1%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%2522a1b7f787-6c91-4a8b-84ce-00cadef69595%2522%252C%2522timestamp%2522%253A%25221700573558717%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signIn%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.39.0-39-g71c9b5a%2522%252C%2522nonce%2522%253A%25222505568949715760%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%22a1b7f787-6c91-4a8b-84ce-00cadef69595%22%2C%22timestamp%22%3A%221700573558717%22%2C%22context%22%3A%7B%22intent%22%3A%22signIn%22%7D%2C%22jslibver%22%3A%22v2-v0.39.0-39-g71c9b5a%22%2C%22nonce%22%3A%222505568949715760%22%7D&relay=e595466f-63b1-4d2c-9915-3ebdf8ea1e20&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=login&s_p=google%2Cfacebook%2Capple&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2Fjoblist%3Ftracking_source%3Dnav20%26isa0%3D1%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/'>Log_in</a></div>
          <div className='Sign_Up'><a href='https://auth.services.adobe.com/en_US/deeplink.html?deeplink=signup&callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252Fauth%252Flogin%253Fdestination%253D%252Fonboarding%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%2522a1b7f787-6c91-4a8b-84ce-00cadef69595%2522%252C%2522timestamp%2522%253A%25221700573558717%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signUp%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.39.0-39-g71c9b5a%2522%252C%2522nonce%2522%253A%25224772521932810770%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%22a1b7f787-6c91-4a8b-84ce-00cadef69595%22%2C%22timestamp%22%3A%221700573558717%22%2C%22context%22%3A%7B%22intent%22%3A%22signUp%22%7D%2C%22jslibver%22%3A%22v2-v0.39.0-39-g71c9b5a%22%2C%22nonce%22%3A%224772521932810770%22%7D&relay=e595466f-63b1-4d2c-9915-3ebdf8ea1e20&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=create_account&el=true&s_p=google%2Cfacebook%2Capple&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2Fauth%2Flogin%3Fdestination%3D%2Fonboarding%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/signup'>Sign_Up</a></div>
          <hr></hr>
          <div className='Free_trial'><a href=''><img src={adobe_cloude} className='adobe'/>Free Trial</a>
</div>
          <div className='AdobePage'> <a href=''><img src={adobeLogo} className='adobelogo'/>Adobe</a></div>
          </ul>
        </div>
        </div>
  )
}
     

export default HeaderComponent