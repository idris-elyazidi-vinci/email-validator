# Email Validator — TDD + CI (GitHub Actions)

## Student
- **Name**: Idris El Yazidi  
- **Email (Vinci)**: idrs.elyazidi@student.vinci.be  

## Project URL
- **Repository**: https://github.com/idris-elyazidi-vinci/email-validator

---

## Explanation

This project implements a simple **email validator** function in JavaScript (`validateEmail`).  
The function takes a string as input and returns a **boolean**:

- `true` if the email is valid according to the rules.  
- `false` otherwise.  

Validation rules:
1. Must contain **`@`**.  
2. The **domain part** (after `@`) must contain at least one `.` and must **not end with a dot**.  
3. Must **not contain spaces** anywhere.  
4. Must have a **non-empty local part** (before `@`) and a **non-empty domain part** (after `@`).  

The project is developed using a **TDD approach** (RED → GREEN → REFACTOR).  
Unit tests are written with **Jest**.  
A **GitHub Actions pipeline** runs automatically on every **PR → main** and on pushes to `main`.

---

## How to run the tests

```bash
npm ci
npm test
