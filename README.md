# house_cup

CS5 Capstone Project

Housecups is an app for tailoring and tracking the consolidated performance of various school houses.

It has following features.

1.  As an admin, you can activate your school on platform and add various Houses and Teachers to the platform
2.  As student users you have public access to current standing of various houses in the school
3.  As a Teacher, you can award performance points to various houses based on performance of students of a particular house.

# UserModel
* The user model contains following field. 
  1. username
  2. email
  3. passwordHash
  4. isAdmin - To determine if user has purchased the product and can add schools and teachers
  5. isTeacher - To provide user to increment or decrement the scores of school houses
  6. createdAt
  7. updatedAt 
  8. schoolId - Currently pending this will be foreign key from Schools model to determine the school affiliation of user.


# Auth Routes

POST`\signup`
Errors: This route goes through following middleware validations from top to bottom

1. Checks username length. Error `Your username must contain between 5 to 60 characters`
2. Checks password and confirm password. Error `Password and confirm password don't match`
3. Checks if password is strong enough.
Error `Your password must contain between 6 to 60 characters`
4. Checks if email is valid
Error `Please enter a valid email id`
5. Checks if username is unavailable
Error `Username Unavailable`.
6. Checks if email is already registered
Error `Email already registered`

The above errors pop up on top form for 4 seconds only.

Once the user signs in, he is taken directly to siginin page with autofilled username field.

POST`\signin`
A user can sign in with either username or email.

Additional Features
* If user is coming directly after signup. The signup success is shown on signin page
* If user has reset his password. He is shown reset password success on signin page.

Success: 
* The user is redirected to home/schools page(pending, currently user gets redirected to forgotpassword as a mark of success)
* The user is sent a JWT to be stored in localstorage. This JWT can be decoded to check user's username,isAdmin, isTeacher fields to give access to protected routes further.


Errors: This route goes through following middleware validations from top to bottom

1. Checks username or email. Error `Sorry, we could not find an account with this username or email`
2. Checks password and confirm password. Error `Incorrect Password`



POST`\forgotpassword`

A user can request to reset his password via forgotpassword. He will receive a reset request with a token valid for two hours. Although user is asked to submit email id to reset password. This route will work if user puts in his username instead of email id.

Success
* If users email/username is available in email is sent to user and email success message is shown.

Errors:

1. Checks username or email. Error `No such user found`.
2. If error occurs because of smtpclient
Error `Email could note be sent`.


POST`\reset`

A user can reset his password via this route. User fills in newpassword and confirmPassword for same

Success
* The user is redirected to signin page 
* The user is sent an email that password has been reset.

Errors:
1. Checks password and confirm password. Error `Password and confirm password don't match`.

POST`\settings`

A user can reset his password via this route. User fills in newpassword and confirmPassword for same

Success
* The user is shown settings change success. 
* The user is sent an email that email and password has been reset.

Errors:
1. Authentication error. `You are not authorized. Please login`.
2. Checks password and confirm password. Error `Password and confirm password don't match`.
3. Checks if email is valid
Error `Please enter a valid email id`

GET`\signout`

Success
* The JWT in localstorage is deleted. 
* The user is redirected to signin page.

