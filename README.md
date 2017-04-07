# DEVolunteer<br>==========

> DEVolunteer is a forum that aims to foster mutually beneficial partnerships between nonprofits and developers.

## Why Sign up?


- **As a developer**, you can choose to work on projects that missions that resonate with you. Your volunteer profile will be visible to the public (if you choose), and you will receive credit for projects that both completed and undergoing development.

- **As a nonprofit**, you can find the right developer to fit your software needs. You will have the capability to browse and filter through developer profiles until you have found the person that is right for your mission.

## The Layout
#### The Schemas:
![userschema](https://cloud.githubusercontent.com/assets/18372172/24781591/8f250f02-1af5-11e7-9161-ec222dad709f.png)
#### The Process:
![devolunteer diagram](https://cloud.githubusercontent.com/assets/18372172/24822039/0cc15e50-1ba7-11e7-8d58-ef3e63fd346b.png)


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

**LOGIN @ /api/login**

Setup your token to a local variable with `export TOKEN=<string>` then
```
curl -H "Authorization: Bearer $TOKEN" -H "Content-type: application/json" http://localhost:3000/login
```
**PUT @ /api/dev && api/npo**

```
curl -H "Authorization: Bearer <your token>" -H "Content-type: application/json" -d '{<information you want to update>}' -X PUT http://localhost:3000/dev || http://localhost:3000/npo
```

**DELETE @ /api/dev & api/npo**
```
curl -H "Authorization: Bearer <token>" -X DELETE http://localhost:3000/dev || http://localhost:3000/npo
```

### Front-End

---
### DEVolunteer User Stories:

#### Developer Viewpoint:
* Developer: As a Developer I want to be able to have an application that connects Non-Profit Orgs with Developers.
* Developer: As a Developer I want to have NPO and Devs to have seperate and editable profile pages.
* Developer: As a Developer I want to have a reviews section so that the users can give feedback.
* Developer: As a Developer I want to have filtering options to narrow down searches.
#### User Viewpoint:
* DEVolunteer User: As a user I want to be able to see DEVs/NPO that I can use to help better the organization.
* DEVolunteer User: As a user I want to have an easy way to contact the NPO/DEV.
* DEVolunteer User: As a user I want an easy to use interface when searching
* DEVolunteer User: As a user I want to be able to see some work or examples before committing someone or entity.
#### Marketing Viewpoint:
* Marketing Agent: As a marketer I want the website to be user friendly and easy to use.
* Marketing Agent: As a marketer I want to show the website can be great asset to building on volunteer work.
---
##### Team Members:
* JR Iriarte
* Jacob Isenberg  
* Michael Bishop
* Jonathan Daniel

##### Stretch Goals
* Type of Payment(tipping method)

##### Resources:
