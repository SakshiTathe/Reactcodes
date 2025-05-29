import React, { useState } from 'react'

export const Forms = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPassword] = useState("")
    const [feedback, setFeed] = useState("")
    const [errors,setErrors]=useState({})
    const [submittedData, setSubmittedData] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        let formErrors={}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email===""){
            formErrors.email = "Invalid email format.";
        }
        if(name ===" " || /\d/.test(name)){
            formErrors.name = "Name cannot be empty or contain numbers.";
        }
        if(pass ===" " || pass.length<6){
            formErrors.pass = "Password must be at least 6 characters.";
        }
        if(feedback ===" " || feedback.length <20 ||feedback.length>200){
            formErrors.feedback = "Feedback must be 20–200 characters long.";
        }
        setErrors(formErrors);
        
        if(Object.keys(formErrors).length===0){
            setSubmittedData({ fullName, email, password });
            setSubmitted(true);
            setName("");
            setEmail("");
            setPassword("");
            setFeed("");
            alert("submited sucessfully")
        }else {
      setSubmittedData(null);
    }
    }

    return (
        <div>
        {submitted ? (
        <div className="thank-you">
          <h2>Thank you for your feedback, {name}!</h2>
          <p>Your feedback: "{feedback}"</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
            <label htmlFor='usename'>Name____:</label>
            <input type='text' name='usename' onChange={e=>setName(e.target.value)} value={name} />
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            <label htmlFor='emails'>Email____:</label>
            <input type='text' onChange={e=>setEmail(e.target.value)} name='emails' value={email} />
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

            <label htmlFor='passwords'>Password____:</label>
            <input type='password' onChange={e=>setPassword(e.target.value)} name='passwords' value={pass} />
            {errors.pass && <p style={{color:"red"}}>{errors.pass}</p>}

            <textarea name='messsage' onChange={e=>setFeed(e.target.value)} value={feedback} rows={6} cols={10}>Enter Your message....</textarea>
            {errors.feedback && <p style={{color:"red"}}>{errors.feedback}</p>}

            <p>{feedback.length}</p>
            <input type='submit' value="Submit" />
        </form>
                )}
                {submittedData && (
        <div className="success">
          <h3>Form submitted successfully!</h3>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
                </div>
    )
}
