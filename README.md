# DEVolunteer<br>==========

> DEVolunteer is a forum that aims to foster mutually beneficial partnerships between nonprofits and developers.

## Why Sign up?


- **As a developer**, you can choose to work on projects that missions that resonate with you. Your volunteer profile will be visible to the public (if you choose), and you will receive credit for projects that both completed and undergoing development.

- **As a nonprofit**, you can find the right developer to fit your software needs. You will have the capability to browse and filter through developer profiles until you have found the person that is right for your mission.

## **Documentation**

### Back-End
##### Startup The Servers:
`mongo` and `node server.js` from the backend directory.

* Some cURL commands you can use:

**SIGNUP @ /api/signup**  
```
curl -X POST -H "Content-Type: application/json" -d '{"username":"test-username","password":"test-password","email":"test-email"}' http://localhost:3000/signup
```
It will return a token back that looks like:
`"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4ZTZiZmE0YzQzNWRlMTc4ZDNkNDMwOCIsImlhdCI6MTQ5MTUxNzM0OX0.puW8L-9J_3VaAeaxG-RMnbt3ufIe-8kXAMygzXc1xrE"`

**Login @ /api/login**

Setup your token to a local variable with `export TOKEN=<string>` then
```
curl -H "Authorization: Bearer $TOKEN" -H "Content-type: application/json" http://localhost:3000/login
```


### Front-End

---
### DEVolunteer User Stories:

#### Developer Viewpoint:
* Developer: As a Developer I want to be able to have an application that connects Non-Profit Orgs with Developers.
* Developer: As a Developer I want to have NPO and Devs to have seperate and editable profile pages.
* Developer: As a Developer I want
* Developer: As a Developer I want
#### User Viewpoint:
* DEVolunteer User: As a user I want to be able to see DEVs that I can use to help better the organization.
* DEVolunteer User: As a user I want to have an easy way to contact the NPO/DEV.
* DEVolunteer User: As a user I want
* DEVolunteer User: As a user I want
#### Marketing Viewpoint:
* Marketing Agent: As a marketer I want the website to be user friendly and easy to use.
* Marketing Agent: As a marketer I want to show the website can be great asset to building on volunteer work.
---
##### Team Members:
* JR Iriarte
* Jacob Isenberg  
* Michael Bishop
* Jonathan Daniel

##### Resources:
