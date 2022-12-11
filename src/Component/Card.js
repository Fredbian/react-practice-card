// import emailBtn from '../images/emailBtn.png' 
// import linkedInBtn from '../images/Button.png'
import faceBook from '../images/fackbook.png'
import gitHub from '../images/GitHub.png'
import instagram from '../images/Instagram.png'
import rectangle from '../images/Rectangle.png'
import twitter from '../images/Twitter.png'
import '../css/card.css'

const style = {

}

function Card() {
    return (
        <>
            <div className='card-container'>
                <div className='card-img'>
                    <img alt='card_img' src={rectangle} />
                </div>
                <div className='card-content'>
                    <div className='header'>
                        <h1 className='card-header center noMargin'>Laura Smith</h1>
                        <p className='center noMargin yellow'>Frontend Developer</p>
                        <p className='center noMargin'><a className='white a' href='#'>Iaurasmith.website</a></p>
                    </div>
                    <div className='btns'>
                        <button>Email</button>
                        <button>LinkedIn</button>
                    </div>
                    <div className='info'>
                        <div className='about noMargin'>
                            <h3 className='noMargin white'>About</h3>
                            <p className='text noMargin white'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>    
                        </div>
                        <div className='interests'>
                             <h3 className='noMargin white'>Interests</h3>
                             <p className='text noMargin white'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninia. Coffee fanatic.</p>   
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <ul className='icons'>
                        <li><img alt='twitter' src={twitter}></img></li>
                        <li><img alt='facebook' src={faceBook}></img></li>
                        <li><img alt='instagram' src={instagram}></img></li>
                        <li><img alt='gitHub' src={gitHub}></img></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card