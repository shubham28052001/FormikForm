# 🚀 React Formik Registration Form

This is a Registration Form built using **React**, **Formik**, and **Yup**.

The project demonstrates how to handle complex forms including text inputs, password matching, dropdowns, radio buttons, multiple checkboxes, and validations.

---

## ✨ Features

- Form handling using Formik
- Schema based validation using Yup
- Password & confirm password matching
- Dropdown (Education)
- Radio buttons (Gender)
- Multiple checkbox selection (Skills)
- Terms & Conditions checkbox
- Error messages for each field
- Clean and simple structure

---

## 🛠 Tech Stack

- React
- Formik
- Yup
- JavaScript

---

## 📦 Installation

Clone repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```
### 📋 Form Fields

First Name

Last Name

Email

Password

Confirm Password

Education (Dropdown)

Gender (Radio)

Skills (Multiple Checkbox)

Terms Acceptance

## ❌ Problem with Normal Formik Validation

Initially, manual validation was implemented using multiple if conditions.

Issues faced:

Too many if statements for every field

Code becomes lengthy and difficult to maintain

Logical mistakes easily occur

Not reusable for other forms

Readability becomes poor for large forms

```js
Example:

if (!email) {}
if (!password) {}
if (password !== confirmpassword) {}
```

✅ Why Yup is Used

Yup provides schema-based validation, removing the need for multiple if conditions.
```js
email: Yup.string().required("Email required")
```
### ✅ Validation Rules Implemented

Firstname minimum length

Email format check

Password match

Education required

Gender required

At least one skill required

Terms must be accepted
