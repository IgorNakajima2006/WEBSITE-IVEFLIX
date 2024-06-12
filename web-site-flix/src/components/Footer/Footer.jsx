import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-icons">
  <img src={facebook_icon} alt="" />
  <img src={instagram_icon} alt="" />
  <img src={twitter_icon} alt="" />
  <img src={youtube_icon} alt="" />
</div>
<ul>
  <li>Audio Description</li>
  <li>Central de Ajuda</li>
  <li>Presentes</li>
  <li>Centro de mídia</li>
  <li>RElações de Investidores</li>
  <li>Jobs</li>
  <li>Termos de uso</li>
  <li>Privacy</li>
  <li>Notícias</li>
  <li>Cookie preference</li>
  <li>Informações da corporação</li>
  <li>Contate conosco</li>
</ul>
    <p className='copyright-text'>@ 2006-2024 Iveflix, inc</p>
    </div>
  )
}

export default Footer