# eventit
1. signup api:
localhost:3000/event.it/api/user/signup
input:
{
  "user_name":string,
  "user_pass":string
}
return: 
{
    "_id": uuid string,
    "user_name": string,
    "user_pass": hashed pass string,
    "events_owned": array,
    "events_joined": array
}
http method: post

2.login api:
localhost:3000/event.it/api/user/login
input:
{
  "user_name":string,
  "user_pass":string
}
return: 
{
    "_id": uuid string,
    "user_name": string,
    "user_pass": hashed pass string,
    "events_owned": array,
    "events_joined": array
}
http method: post

3.profile api:
localhost:3000/event.it/api/user/profile/:userid
return: 
{
    "_id": uuid string,
    "user_name": string,
    "user_pass": hashed pass string,
    "events_owned": array,
    "events_joined": array
}
http method: get