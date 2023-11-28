import React from 'react'
function HeaderComponent() {
  return (
    <div className='px-[1rem] py-[0.6rem] border-b-2 flex items-center justify-between '> 
   <div className='flex items-center gap-[2rem]'>
    <p className='font-[600] text-[1.5rem] relative'>B<span className="before:content-[''] before:w-[0.5rem] before:h-[0.1rem] before:bg-black before:inline-block before:absolute before:top-[0.5rem] before:left-[1.2rem]">e</span>hance</p>
    <p className='font-[600] text-[#191919] hover:border-b border-black'><a href="https://www.behance.net/for_you/onboarding?tracking_source=nav20">For You</a></p>
    <p className='font-[600] text-[#191919] hover:border-b border-black'><a href="https://www.behance.net/galleries?tracking_source=nav20">Discover</a></p>
    <p className='font-[600] text-[#191919] hover:border-b border-black'><a href="https://www.behance.net/hire?tracking_source=nav20">Hire</a></p>
    <p className='font-[600] text-[#191919] hover:border-b border-black'><a href="https://www.behance.net/assets?tracking_source=nav20">Assets</a></p>
    <p className='font-[600] text-[#191919] hover:border-b border-black'><a href="https://www.behance.net/joblist?tracking_source=nav20">Jobs</a></p>
   </div>
   <div className='flex gap-[1rem] items-center'>
    <div className='flex gap-[0.6rem] items-center'>
        <img width="20rem" src="https://img.icons8.com/material-sharp/24/bell.png" alt="bell"/>
        <button className='bg-[#f6f8ff] text-[#0057ff] outline-none rounded-full  p-[0.3rem] px-[1rem] text-[0.9rem] border-2 font-[500] border-[#dee8ff]'><a href="https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252F%253Fisa0%253D1%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%2522ba0d1f3e-97ad-4da2-a59a-a716d91a0582%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signIn%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.39.0-39-g71c9b5a%2522%252C%2522nonce%2522%253A%25226266297952836382%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%22ba0d1f3e-97ad-4da2-a59a-a716d91a0582%22%2C%22context%22%3A%7B%22intent%22%3A%22signIn%22%7D%2C%22jslibver%22%3A%22v2-v0.39.0-39-g71c9b5a%22%2C%22nonce%22%3A%226266297952836382%22%7D&relay=645fc5fb-f6d2-4ce1-b33f-f39eae869c75&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=login&s_p=google%2Cfacebook%2Capple&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2F%3Fisa0%3D1%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/">Log in</a></button>
        <button className='bg-[#0057ff] text-white rounded-full outline-none py-[0.4rem] px-[1rem] text-[0.9rem] font-[500]'><a href="https://auth.services.adobe.com/en_US/deeplink.html?deeplink=signup&callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252Fauth%252Flogin%253Fdestination%253D%252Fonboarding%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%2522ba0d1f3e-97ad-4da2-a59a-a716d91a0582%2522%252C%2522timestamp%2522%253A%25221700665445451%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signUp%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.39.0-39-g71c9b5a%2522%252C%2522nonce%2522%253A%25222752824727316133%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%22ba0d1f3e-97ad-4da2-a59a-a716d91a0582%22%2C%22timestamp%22%3A%221700665445451%22%2C%22context%22%3A%7B%22intent%22%3A%22signUp%22%7D%2C%22jslibver%22%3A%22v2-v0.39.0-39-g71c9b5a%22%2C%22nonce%22%3A%222752824727316133%22%7D&relay=645fc5fb-f6d2-4ce1-b33f-f39eae869c75&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=create_account&el=true&s_p=google%2Cfacebook%2Capple&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2Fauth%2Flogin%3Fdestination%3D%2Fonboarding%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/signup">Sign Up</a></button>
    </div>
    <div className='w-[0.1rem] h-[1.5rem] bg-[#e8e8e8]'></div>
    <div className='flex gap-[1rem] items-center'>
        
    <button className='bg-white text-black outline-none rounded-full  p-[0.3rem] px-[1rem] text-[0.9rem] border-2 font-[500] border-[#dee8ff] flex gap-[0.5rem] font-[600]'>
    <img width="20rem" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/640px-Adobe_Creative_Cloud_rainbow_icon.svg.png' alt="Free Trial"/>
        Free Trial
        </button>
        <button className='bg-white text-black rounded-full outline-none py-[0.4rem] px-[1rem] text-[0.9rem] font-[500] flex gap-[0.5rem] font-[600]'>
            <img width="20rem" src='https://cdn.iconscout.com/icon/free/png-256/adobe-254-761738.png' alt="Abode"/>
            <a href="https://www.adobe.com/?promoid=RTQCN3LX">Adobe</a>
            </button>
    </div>
   </div>
    </div>
  )
}

export default HeaderComponent