# REQUIREMENTS

- API Functionality
  - POST /users
  - POST /login
  - GET /users/me
  - PUT /users/me
  - GET /accounts
  - GET /accounts/:id
  - POST /accounts
  - PUT /accounts/:id
  - DELETE /accounts/:id
  - GET /transactions
  - GET /transactions/:id
  - POST /transactions
- DB Connection
- Authentication and Authorization
- API Documentation

## Amanda Satya

- API Functionality
  - POST /users ✅
  - POST /login ✅
  - GET /users/me ✅
  - PUT /users/me 🐞
  - GET /accounts ✅
  - GET /accounts/:id ✅
  - POST /accounts ✅
  - PUT /accounts/:id ✅
  - DELETE /accounts/:id ✅
  - GET /transactions ✅
  - GET /transactions/:id ✅
  - POST /transactions ✅
- DB Connection ✅
- Authentication and Authorization ✅
- API Documentation ✅
- Notes:
  - on POST /users, password should be hidden on response
  - on GET /users/me, error handling could be improved
  - on PUT /users/me, there is a bug on updating the user
  - on POST /accounts, error handling could be improved
  - on PUT /accounts/:id, error handling could be improved
  - on POST /transactions, error handling could be improved

## Catur

- API Functionality ❌
  - POST /users 🙅
  - POST /login ✅
  - GET /users/me 🙅
  - PUT /users/me 🙅
  - GET /accounts 🙅
  - GET /accounts/:id 🙅
  - POST /accounts 🙅
  - PUT /accounts/:id 🙅
  - DELETE /accounts/:id 🙅
  - GET /transactions 🙅
  - GET /transactions/:id 🙅
  - POST /transactions 🙅
- DB Connection ✅
- Authentication and Authorization ❌
- API Documentation ✅

## Finuaz Iman

- API Functionality
  - POST /users ✅
  - POST /login ✅
  - GET /users/me ✅
  - PUT /users/me 🐞
  - GET /accounts ✅
  - POST /accounts ✅
  - PUT /accounts/:id ✅
  - DELETE /accounts/:id ✅
  - GET /transactions ❌
  - GET /transactions/:id ❌
  - POST /transactions ❌
- DB Connection ✅
- Authentication and Authorization ✅
- API Documentation ✅
- Notes:
  - GET /transactions not working correctly (please check line 152-155 on transaction.py controller)
  - Can withdraw more than balance
  - Can withdraw from other user account
  - can deposit to other user account
  - can transfer from other user account
  - can transfer more than balance

## Fachrezi ❌

## Haikal Bintang

- API Functionality
  - POST /users ✅
  - POST /login ✅
  - GET /users/me ✅
  - PUT /users/me ✅
  - GET /accounts 🔴
  - POST /accounts ✅
  - PUT /accounts/:id 🔴
  - DELETE /accounts/:id 🔴
  - GET /transactions 🔴
  - GET /transactions/:id 🔴
  - POST /transactions ✅
- DB Connection
- Authentication and Authorization ❌
- API Documentation
- Notes:
  - Please add AUTHORIZATION for 🔴

## Iry

- API Functionality
  - POST /users ✅
  - POST /login ✅
  - GET /users/me ✅
  - PUT /users/me ✅
  - GET /accounts ✅
  - GET /accounts/:id ✅
  - POST /accounts ✅
  - PUT /accounts/:id ✅
  - DELETE /accounts/:id ✅
  - GET /transactions ✅
  - GET /transactions/:id ✅
  - POST /transactions ✅
- DB Connection ✅
- Authentication and Authorization ✅
- API Documentation ✅
- Notes:
  - default updated_at should not be null
  - on POST /users, success response could be improved
  - ON POST /login, no need to required both email and username
  - ON GET /accounts/:id, error handling could be improved
  - ON POST /accounts schema, account_type should be required
  - ON POST /accounts, error handling could be improved
  - ON POST /accounts, success response could be improved
  - ON POST /transactions schema, some fields should be required

## Michael ❌

## Putri ❌
