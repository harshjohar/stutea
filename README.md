<h1 align="center">
    <img src="./frontend/public/readme_logo.png" style="background-color:white" width="100px">
    <b> StuTea</b>
</h1>

<h3>Built using</h3>

[![react](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![mongodb](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)

## Inspiration

Coming from an engineering background (having attempted JEE), we know how important it is to get one’s doubts resolved as quick as possible along with a proper understanding of the concept.

Hence, we came up with StuTea where all the students can get their doubts solved! :)

We provide a platform to get your doubts solved by other students/colleagues. It was a dream for a lot of introvert students who hesitated in asking doubts just so they don’t seem to be silly!

This problem is proposed to be solved by StuTea!

Here the doubts would be solved by someone with similar knowledge and in simple language making it easy to ask as many questions until your doubt is resolved.

## What it does?

StuTea is a one stop solution to getting your doubts solved on a number of topics. Users can register and have an initial score of 1000 credits that they can redeem when their doubts get successfully resolved. This would transfer credits to the account of the person solving doubts. This provides an
incentive to the one solving doubts.

The questions will be sorted using tags. The tags will help the one solving doubt to anchor his areas of expertise and solve doubts effectively.

Once the doubt is resolved the user will get a notification through which they can check the answer and rate the person who solved it. This would help in keeping a track of good doubt solvers and eliminate the ones who don’t provide quality answers.

## Features

<details>
    <summary> 
        <b>User verification through email</b> 
    </summary>
    We make sure that genuine accounts are being registered here at StuTea. Hence for every registration we send a verification e-mail through sendgrid thereby creating a new account.
</details>

<details>
    <summary> 
        <b>Notifications</b> 
    </summary>
    Once the user’s question has been answered, he will get a notification on his profile which would lead him to his question.
</details>

<details>
    <summary> 
        <b>Credit system</b> 
    </summary>
    This is the most crucial aspect of StuTea. Users can find their credit score on the dashboard. Credits are what would act as virtual money. For every question posted there is a deduction of 50 credits. If the user’s doubt is successfully answered, he would in return give credits according to the quality of answer. If he rates the answer with a 3 or 3+ rating, 50 credits would be deducted from his account and 100 credits would be added to the person answering’s account. <br>
    For ratings less than 3, 50 credits will be deducted from the one asking and 50 would be added to the person answering’s account. The users who would be solving more doubts and having more credits could redeem them at our shop, where we provide a variety of StuTea merchandise!
</details>

<details>
    <summary> 
        <b>Analytics in profile</b> 
    </summary>
    Users can view their previously asked questions, number of questions successfully answered and average feedback of answered questions on their profile.
</details>

<details>
    <summary> 
        <b>Shop</b> 
    </summary>
    At StuTea, users solving doubts with great efficiency will be rewarded with credits that they can redeem at the shop with a number of StuTea merchandise.
</details>

<details>
    <summary> 
        <b>Tags</b> 
    </summary>
    Each question will be allotted tags which would help in sorting of doubts. This would help the person solving doubts to find questions of his expertise.
</details>

<details>
    <summary> 
        <b>Efficient feedback system</b> 
    </summary>
    In order to keep a track of the quality of answers to the doubts we provide an efficient feedback by the users asking doubts. Rest is in the future scope of the project.
</details>

<details>
    <summary> 
        <b>Favourite tags</b> 
    </summary>
    Users can choose their favourite tags using which the user can find various questions on their favourite topics.
</details>

## Workflow and Learning

<details>
    <summary> 
        <b>How we built it</b> 
    </summary>
    We started out by dividing work amongst the team members according to the existing resources and knowledge we had. We built our frontend using React framework. Major libraries used are react router-dom, react bootstrap, react-paginate. <br>
    The web app is deployed using firebase service. <br><br>
    We have a separate repository for the backend of our web app. We made different schemas for
    catering data in our database i.e., MongoDB.
    We used node.js and express for creating the rest of our backend.
    The email authentication is done using nodemailer package and sendgrid.
    Backend as a service is running on heroku.
    Some dependencies used in backend are bcrypt, cors, crypto, express-validator, nodemailer, jsonwebtoken.
</details>

<details>
    <summary> 
        <b>What we learnt</b> 
    </summary>
    Throughout the development of this project, we learned so much. Going into it, we had a basic idea what we were doing. Along the way, we learnt in and about our tech stacks which were MongoDB, Express, React, Node.Js . Most of all, we learned that through perseverance and determination, you can make progress towards helping to solve problems in the world, even if you don't initially think you have the resources or knowledge.
</details>

## What's next for StuTea

We would love some constructive feedback. This was a learning experience for us all and we would love to see how we could improve in both technical aspects as well with our presentation. <br><br>
As software engineers, we're never fully satisfied with the work. There are always more ways to make the product better, faster, more secure, accessible, etc. Here are some product features that we would love to implement in the future: <br>
- Use of voice medium and A/V recordings to answer doubts.
- Involvement of real time monetary transactions to buy/sell credits.
- A more equipped shop to induce business into the product.
- Extending our existing one-to-one answering product to one-to-many version.
- An efficient search mechanism which will include search by tags/question and many more.
- We also aim to create an efficient feedback system to authentify the credit/decredit system.

## Contribute

This app is an open source project, to contribute you should follow these steps.

### 1. Fork the Repository

To contribute, fork this repository to your own github account.

### 2. Clone the project

```bash
  git clone https://github.com/harshjohar/stutea
```

Go to the project directory

```bash
  cd stutea/frontend
  OR
  cd stutea/backend
```

### 3. Install dependencies for both frontend and backend

```bash
  yarn install
```

### 4. Start the dev environment for frontend and backend separately

```bash
  yarn start
```

### 5. Start Coding
Resolve issues and send PRs.