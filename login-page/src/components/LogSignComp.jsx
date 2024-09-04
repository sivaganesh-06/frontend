// import { Link } from "react-router-dom"
// import loginimage from "../assets/frontendimage.jpg"
// import styles from '../css/signupLogin.module.css'
// import { useState } from "react"

// const InputField = ({ label, type, name, value, handleChange, errors, Data }) => (
//     <div className={styles.name} id={styles.userInputFields}>
//         <label htmlFor={name}>{label}</label>
//         <div className={styles.inputbox}>
//             <input
//                 type={type}
//                 id={name}
//                 name={name}
//                 value={Data[name]}
//                 onChange={handleChange}
//                 required
//             />
//             {errors && <div className={styles.invalidFeedback}>{errors[name]}</div>}
//         </div>
//     </div>
// );


// export default function LoginPage() {
//     const [Data, setData] = useState({ username: '', password: '' });
//     const [errors, setErrors] = useState({ username: '', password: '' });
//     const validateForm = () => {
//         const newErrors = { username: '', password: '' };
//         let isValid = true;
//         if (!Data.username) {
//             newErrors.username = 'username is required';
//             isValid = false;
//         }
//         if (!Data.password) {
//             newErrors.password = 'password is required'
//             isValid = false;
//         }
//         setErrors(newErrors);
//         return isValid;
//     }
//     const handleSubmit = (e) => {
//         if (validateForm()) {
//             console.log('form submitted ', Data);
//         }
//         else {
//             e.preventDefault();
//             console.log('form is not submitted', Data);
//         }
//     }
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData({ ...Data, [name]: value });
//     }
//     return (
//         <Box
//             heading='Login'
//             button='Login'
//             para="Don't have an account already?"
//             linkText='Sign Up'
//             linkHref='./signup'
//             Form={LoginForm}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//             validateForm={validateForm}
//             Data={Data}
//             setData={setData}
//             errors={errors}
//             setErrors={setErrors}
//         />
//     )
// }

// export function SignUpPage() {
//     const [Data, setData] = useState({ username: '', password: '', email: '', role: '' });
//     const [errors, setErrors] = useState({ username: '', password: '', email: '', role: '' });
//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }
//     const validateForm = () => {
//         const newErrors = { username: '', password: '', email: '', role: '' };
//         let isValid = true;
//         if (!Data.username) {
//             newErrors.username = 'username is required';
//             isValid = false;
//         }
//         if (!Data.password) {
//             newErrors.password = 'password is required'
//             isValid = false;
//         }
//         if (!Data.email) {
//             newErrors.email = 'email is required'
//             isValid = false;
//         } else if (!validateEmail(Data.email)) {
//             newErrors.email = 'Email is invalid';
//             isValid = false;
//         }
//         if (!Data.role) {
//             newErrors.role = 'role is required'
//             isValid = false;
//         }
//         setErrors(newErrors);
//         return isValid;
//     }
//     const handleSubmit = (e) => {
//         if (validateForm()) {
//             console.log('form submitted ', Data);
//         }
//         else {
//             e.preventDefault();
//             console.log('form is not submitted', Data);
//         }
//     }
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData({ ...Data, [name]: value });
//     }
//     return (
//         <Box
//             heading='Sign Up'
//             button='Sign Up'
//             para='Already have an account?'
//             linkText='Login'
//             linkHref='/'
//             Form={SignUpForm}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//             validateForm={validateForm}
//             Data={Data}
//             setData={setData}
//             errors={errors}
//             setErrors={setErrors}
//         />
//     )
// }

// export function Heading({ heading }) {
//     return (
//         <div className={styles.heading}>
//             <h3>{heading}</h3>
//         </div>
//     )
// }


// export function Box({ heading, button, para, linkText, linkHref, Form, ...formprops }) {
//     return (
//         <div className={styles.centerIt}>
//             <div className={styles.box}>
//                 <div className={styles.imgdiv}>
//                     <img src={loginimage} alt="" />
//                 </div>
//                 <div className= {styles.contentBox}>
//                     <div className={styles.content}>
//                         <Heading heading={heading} />
//                         <Form button={button} handleChange={formprops.handleChange} handleSubmit={formprops.handleSubmit} validateForm={formprops.validateForm} Data={formprops.Data} setData={formprops.setData} errors={formprops.errors} setErrors={formprops.setErrors}></Form>
//                         <Description
//                             para={para}
//                             linkText={linkText}
//                             linkHref={linkHref}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export function Description({ para, linkText, linkHref }) {
//     return (
//         <div className={styles.desc}>
//             <p>{para} <Link to={linkHref}>{linkText}</Link></p>
//         </div>
//     )
// }

// export function LoginForm({ button, ...formprops }) {
//     return (
//         <div className={styles.form}>
//             <form onSubmit={formprops.handleSubmit} action="/afterLoginOrSignup" className="needs-validation" noValidate>
//                 <InputField
//                     label='username'
//                     type='text'
//                     name='username'
//                     value={formprops.Data.username}
//                     handleChange={formprops.handleChange}
//                     errors={formprops.errors}
//                     Data={formprops.Data}
//                 />
//                 <InputField
//                     label='password'
//                     type='password'
//                     name='password'
//                     value={formprops.Data.password}
//                     handleChange={formprops.handleChange}
//                     errors={formprops.errors}
//                     Data={formprops.Data}
//                 />
//                 <Button button={button} />
//             </form>
//         </div>
//     )
// }

// export function SignUpForm({ button, ...formprops }) {
//     const [signupData, setSignupData] = useState({ username: '', password: '', role: '', email: '' });
//     return (
//         <div className={styles.form}>
//             <form onSubmit={formprops.handleSubmit} action="/afterLoginOrSignup" className="needs-validation" noValidate>
//                 <InputField
//                     label='username'
//                     type='text'
//                     name='username'
//                     value={formprops.Data.username}
//                     handleChange={formprops.handleChange}
//                     errors={formprops.errors}
//                     Data={formprops.Data}
//                 />
//                 <InputField
//                     label='password'
//                     type='password'
//                     name='password'
//                     value={formprops.Data.password}
//                     handleChange={formprops.handleChange}
//                     errors={formprops.errors}
//                     Data={formprops.Data}
//                 />
//                 <InputField
//                     label='email'
//                     type='email'
//                     name='email'
//                     value={formprops.Data.email}
//                     handleChange={formprops.handleChange}
//                     errors={formprops.errors}
//                     Data={formprops.Data}
//                 />
//                 <Role
//                     Data={formprops.Data}
//                     handleChange={formprops.handleChange}
//                     errors={formprops.errors}
//                 />
//                 <Button button={button} />
//             </form>
//         </div>
//     )
// }


// export function Email() {
//     return (
//         <div className={styles.email} id={styles.userInputFields}>
//             <label htmlFor="email">Email: </label>
//             <div className={styles.inputbox}>
//                 <input type="email" id="email" name="email" required />
//             </div>
//         </div>
//     )
// }


// export function Button({ button }) {
//     return (
//         <div className={styles.btn}>
//             <button type="submit">{button}</button>
//         </div>
//     )
// }

// export function Role({ Data, handleChange, errors }) {
//     return (
//         <div className={styles.role} id={styles.userInputFields}>
//             <label htmlFor="role">Role:</label>
//             <select className={styles.inputbox} name="role" id="" value={Data.role} onChange={handleChange} required>
//                 <option value=''>Choose...</option>
//                 <option value='manager'>manager</option>
//                 <option value='admin'>admin</option>
//                 <option value='user'>user</option>
//             </select>
//             {errors && <div className={styles.invalidFeedback}>{errors['role']}</div>}
//         </div>
//     )
// }

