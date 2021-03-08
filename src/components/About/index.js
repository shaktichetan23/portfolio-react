import './style.css'
// import logo from '../../../public/neu-log.png'

const About = () => {
    return (
        <div className="about">
            <div className="edu">
            <h1>Education</h1>
                <div className="education">
                <a href="#"> 
                <img 
                    src={`${process.env.PUBLIC_URL}/neu-log.png`}
                    width='100%'
                  />
                </a>
                <p>MS in Information Systems</p>
                </div>
                <div className="education2">
                <a href="#"> 
                <img 
                    src={`${process.env.PUBLIC_URL}/rnsit-logo.jpg`}
                    width='100%'
                  />
                </a>
                <p>BE in Electronics and Communications</p>
                </div>
            </div>
                <br/>
                <div className='bio'>
                    <h1>Bio</h1>
                    <p> I am a graduate </p>
                </div>
                
            </div>
    )
}

export default About
