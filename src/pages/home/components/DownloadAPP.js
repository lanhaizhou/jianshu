import React from 'react'
import { DownWrapper } from '../style'
import codeSrc from '../../../statics/home/app-qrcode.png'

const DownloadApp = () => {
  return (
    <DownWrapper>
      <img className='code-img' src={codeSrc} alt='' />
      <div className='info'>
        <div className='title'>下载简书手机App ></div>
        <div className='desc'>随时随地发现和创作内容</div>
      </div>
    </DownWrapper>
  )
}

export default DownloadApp