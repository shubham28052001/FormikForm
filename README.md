# 🚀 React Form Using Single useState

## 📌 About This Project

In this project, I learned how to create a complete form in React using **only one `useState` object**, instead of creating multiple states for every input field.

I also implemented reusable functions to handle all types of inputs like:

- Text input  
- Email  
- Password  
- Select dropdown  
- Radio buttons  
- Single checkbox  
- Multiple checkboxes (array)  

This approach makes the code clean, scalable, and easy to manage.

---

## 🚀 Key Learnings

### ✅ Single useState for Entire Form

Instead of writing multiple states:

```js
const [name, setName] = useState("");
const [email, setEmail] = useState("");
```
### I used a single state object:
```js
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
```
## ✅ Common handleChange Function
Used one function to handle:

text

email

password

select

radio

single checkbox

```js
function handleChange(e){
  const { name, value, type, checked } = e.target;

  setForm({
    ...form,
    [name]: type === "checkbox" ? checked : value
  });
}
```
✅ Multiple Checkbox Handling (Skills Array)
For skills selection, values are stored in an array:

```js
function handleSkills(e){
     e.target.checked ? setForm({ ...form, skills: [...form.skills, e.target.value] }) :
      setForm({ ...form, skills: form.skills.filter(skills =>skills !== e.target.value)})
}
```
✅ Radio Buttons
Radio buttons are controlled using checked comparison:

```js checked={form.gender === "MALE"} ```
✅ Checkbox Rules
Boolean checkbox:
```js checked={form.agree}
Multiple checkbox (array):
checked={form.skills.includes("Cricket")}
```
🎯 What I Learned
How to build controlled forms in React

How to manage complete form using a single useState

How to handle radio buttons properly

How to store multiple checkbox values in array

How to create reusable input handlers

Clean and professional state management

