import React from 'react'

export default function Form() {
    const [currentDate] = React.useState(new Date())

    const month = currentDate.toLocaleString('default', {month: 'long'})
    const day = currentDate.getDay()
    const year = currentDate.getFullYear()
    
    const [profileData, setProfileData] = React.useState({
        name: "",
        email: "",
        password: "",
        message: "",
        joinCasino: true
    })


    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setProfileData(prevProfileData => {
            return {
                ...prevProfileData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }

    const [passError, setPassError] = React.useState(profileData.password)
    
    function registerBtn(event) {
        event.preventDefault()
        console.log(profileData)
        if (!/\d/.test(passError)) {
            setPassError("Password must have at least one Number")
        }else {
            setPassError("")
            console.log("submitted")
        }
    }

   
    const WarningStyle = {
        color: "red"
    }
    

    
  return (
    <div className='formPage wholePage'>
        <header>
            <p>{month} {day}, {year}</p>
            <h2>Join the event</h2>
        </header>
        
        <form action="">
            <div
                className='eachInput'
            >
                <label htmlFor="name">Name</label>
                <input
                    onChange={handleChange}
                    className='inputText' 
                    type="text" 
                    name="name"
                    value={profileData.name}
                    placeholder='Enter your name' 
                    id="name" 
                />
            </div>
            <div
                className='eachInput'
            >
                <label htmlFor="email">Business Email</label>
                <input
                    onChange={handleChange}
                    className='inputText' 
                    type="email" 
                    name="email"
                    value={profileData.email}
                    placeholder='Enter your email' 
                    id="email" 
                />
            </div>
            <div
                className='eachInput'
            >
                <label htmlFor="password">Password</label>
                <input
                    onChange={handleChange}
                    className='inputText' 
                    type='password' 
                    name="password"
                    value={profileData.password}
                    placeholder='Enter Password' 
                    id="password" 
                />
                <p className='passwordMsg' style={WarningStyle}>{passError}</p>
            </div>
            <div
                className='eachInput'
            >
                
                <label htmlFor="message">What are you hoping to learn about?</label>
                <textarea 
                    name="message"
                    onChange={handleChange}
                    value={profileData.message}
                    placeholder='Message' 
                    id="message"
                    >
                </textarea>
            </div>
           <div className='checkBox'> 
                <input
                    onChange={handleChange} 
                    type="checkbox"
                    checked={profileData.joinCasino}
                    id="register" 
                    name='joinCasino'
                />
                <label 
                    htmlFor="register">
                        I would like to receive email about the future Casino's
                </label>
           </div>
            
        </form>
        <button className='btn' onClick={registerBtn}>Register for this event</button>
    </div>
  )
}
