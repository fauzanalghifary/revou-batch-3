# REQUIREMENTS

- Connect to the database
- Authentication
  - Session-based authentication (Flask-Login)
    - Login
    - Register w/ hashed password
    - Protected route
    - ~Log out~
    - ~Role-based access control~ (Authorization)
  - Token-based authentication (Flask-JWT-Extended)
    - Login
    - Register w/ hashed password
    - Protected route
    - ~Refresh token
    - ~Role-based access control (Authorization)

## Amanda Satya

- Connect to the database ✅
- Token-based authentication (Flask-JWT-Extended)
  - Login ✅
  - Register w/ hashed password ✅
  - Protected route ✅
- Note:
  - Do not show password on the response body.
  - No need to include `role` on the request body.

## Catur

- Connect to the database ✅
- Session-based authentication (Flask-Login)
  - Login ✅
  - Register w/ hashed password ✅
  - Protected route ✅
  - Log out ✅

## Finuaz Iman

- Connect to the database ✅
- Authentication
  - Token-based authentication (Flask-JWT-Extended) ✅
    - Login ✅
    - Register w/ hashed password ✅
    - Protected route ✅
    - Refresh token ✅
    - Role-based access control (Authorization) ✅

## Fachrezi ❌

## Haikal Bintang

- Connect to the database ✅
- Session-based authentication (Flask-Login)
  - Login ✅
  - Register w/ hashed password ✅
  - Protected route ✅
  - Log out ✅
  - Role-based access control (Authorization) ✅

## Iry ❌

## Michael ❌

## Putri

- Connect to the database ✅
- Token-based authentication (Flask-JWT-Extended)
  - Login ✅
  - Register w/ hashed password ✅
  - Protected route ✅
  - Refresh token ✅
- Note:
  - Please include .venv, instance, and .env on .gitignore.
