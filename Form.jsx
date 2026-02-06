import React, { useState } from 'react'

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    education: "",
    confirmpassword: "",
    gender: "",
    skills: [],
    agree: false
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSkills(e) {
    e.target.checked ? setForm({ ...form, skills: [...form.skills, e.target.value] }) :
      setForm({ ...form, skills: form.skills.filter(skills =>skills !== e.target.value)})
  }

  function handleAgree(e) {
    setForm({ ...form, [e.target.name]: e.target.checked })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input type="text" value={form.name} name="name" placeholder='name' onChange={handleChange} />


      <label htmlFor="email">email</label>
      <input type="email" value={form.email} name="email" placeholder='email' onChange={handleChange} />


      <label htmlFor="password">password</label>
      <input type="password" value={form.password} name='password' placeholder='password' onChange={handleChange} />


      <label htmlFor="education">education</label>
      <select name="education" value={form.education} onChange={handleChange}>
        <option value="">Select Education</option>
        <option value="10th">10th</option>
        <option value="12th">12th</option>
        <option value="pg">pg</option>
        <option value="ug">ug</option>
      </select>

      <label htmlFor="confirmpassword">confirmpassword</label>
      <input type="password" value={form.confirmpassword} name='confirmpassword' placeholder='confirmpassword' onChange={handleChange} />

      <label htmlFor="gender">gender</label>
      <label> MALE
        <input type="radio" name="gender" checked={form.gender === "MALE"} value="MALE" onChange={handleChange} />
      </label>
      <label> FEMALE
        <input type="radio" name="gender" checked={form.gender === "FEMALE"} value="FEMALE" onChange={handleChange} />
      </label>

      <label htmlFor='skills'>skills</label>
      <label>
        <input type="checkbox" name="skills" checked={form.skills.includes("Cricket")} value="Cricket" onChange={handleSkills} />
        CRICKET
      </label>

      <label>
        <input type="checkbox" name="skills" checked={form.skills.includes("Football")} value="Football" onChange={handleSkills} />
        FootBall
      </label>

      <label htmlFor="agree">
        <input type="checkbox" name='agree' checked={form.agree} onChange={handleAgree} />
        agree
      </label>

      <button type='submit'>save</button>

    </form>
  )
}









// import React, { useState } from 'react'

// export default function Form() {
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [education, setEducation] = useState("");
//   // const [confirmpassword, setConfirmpassword] = useState("");
//   // const [gender, setGender] = useState("");
//   // const [skills, setSkills] = useState([]);
//   // const [agree, setAgree] = useState(true);

// const [form, setForm] = useState({
//   name: "",
//   email: "",
//   password: "",
//   education: "Eductaion",
//   confirmpassword: "",
//   gender: "",
//   skills: [],
//   agree: true
// })

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(form);
//   }

//   // function handleSkills(e) {
//   //   e.target.checked ? setSkills(prev => [...prev, e.target.value]) :
//   //   setSkills(prev => prev.filter(skills => skills !== e.target.value))
//   // }



//   function handleChange(e) {
//     e.preventDefault();
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }


//   function handleSkills(e) {
//     e.target.checked ? setForm({ ...form, [e.target.name]: [...form.skills, e.target.value] }):
//       setForm({ ...form, [e.target.name]: form.skills.filter(skill => skill !== e.target.value) });
//   }

//   function handleAgree(e) {
//     setForm({...form,[e.target.name]: e.target.checked})
//   };



//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input type="text" name='name' value={form.name} onChange={handleChange} />



//       <label htmlFor="email">Email</label>
//       <input type="email" name='email' value={form.email} onChange={handleChange} />


//       <label htmlFor="password">Password</label>
//       <input type="password" name='password' value={form.password} onChange={handleChange} />


//       <label htmlFor="education">Education
//         <select name="education" value={form.education} onChange={handleChange}>
//           <option value="">Education</option>
//           <option value="10th">10th</option>
//           <option value="12th">12th</option>
//           <option value="pg">pg</option>
//           <option value="ug">ug</option>
//         </select>
//       </label>

//       <label htmlFor="confirmpassword">Confirmpassword</label>
//       <input type="password" name='confirmpassword' value={form.confirmpassword} onChange={handleChange} />


//       <label>
//         <input type="radio" name='gender' value="Male" onChange={handleChange} />Male
//       </label>


//       <label>
//         <input type="radio" name='gender' value="Female" onChange={handleChange} />Female
//       </label>

//       <label htmlFor="skils">Skills</label>
//       <label>
//         <input type="checkbox" value="Cricket" name='skills' onChange={handleSkills} />Cricket
//       </label>

//       <label>
//         <input type="checkbox" value="Football" name='skills' onChange={handleSkills} />Football
//       </label>

//       <label>
//         <input type="checkbox" value="Badminton" name='skills' onChange={handleSkills} />Badminton
//       </label>

// <label>
//   <input type="checkbox" name='agree' checked={form.agree} onChange={handleAgree} />
//   agree
// </label>

//       <button type='submit'>submit</button>


//     </form>
//   )
// }
