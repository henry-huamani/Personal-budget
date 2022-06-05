# Getting Started

Personal_budget app allows to record the expenses and income of money that a person has daily. 

## Personal_budget API

TECH STACK:
- Node.js
- Express
- Sequelize
- PostgreSQL

After cloning this project. Open the command line and move to the api/ folder and follow these 3 steps to get the API works:

### 1° `npm install`

This command will install all dependencies that server needs to work.

### 2° Create a `.env` file.

The server needs values from this file.\
Example:

    DB_USER=postgres
    DB_PASSWORD=htech40
    DB_HOST=localhost

    AUTHENTICATION_KEY=personal_budget

    ADMIN_EMAIL=admin1234@budget.com
    ADMIN_PASSWORD=admin1234
    VERIFICATION_ADMIN_PASSWORD=admin1234

### 3° `npm start`

This command will start the server and the API will work.

**Note: If you want to know how this API works**

See the API documentación [here](https://documenter.getpostman.com/view/19394139/Uz5GoFyq).


## Personal_budget client

TECH STACK:
- React.js
- Redux
- Axios
- React-Bootstrap

After cloning this project. Open the command line and move to the client/ folder and follow these 2 steps to get the client works:

### 1° `npm install`

This command will install all dependencies that client needs to work.

### 2° `npm start`

This command allows the client to start working.

**Client app previews**

<div style="display: flex; flex-wrap: wrap; justify-content: space-evenly;">
    <span>
        <p>Register</p>
        <img src="https://i.postimg.cc/05YPtk4d/personal-budget-register.png" alt="personal-budget-register" width="431" height="220" />
    </span>
    <span>
        <p>Login</p>
        <img src="https://i.postimg.cc/yYnBHfsD/personal-budget-login.png" alt="personal-budget-login" width="431" height="220" />
    </span>
</div>
<br/>
<div style="display: flex; flex-wrap: wrap; justify-content: space-evenly;">
    <span>
        <p>Home</p>
        <img src="https://i.postimg.cc/Gm2Rhkmq/personal-budget-home.png" alt="personal-budget-home" width="431" height="220" />
    </span>
    <span>
        <p>New operation</p>
        <img src="https://i.postimg.cc/VkV8SdS1/personal-budget-new-operation.png" alt="personal-budget-new-operation" width="431" height="220" />
    </span>
</div>
<br/>
<div style="display: flex; flex-wrap: wrap; justify-content: space-evenly;">
    <span>
        <p>Operations</p>
        <img src="https://i.postimg.cc/65BwFsJs/personal-budget-operations.png" alt="personal-budget-operations" width="431" height="220" />
    </span>
    <span>
        <p>About</p>
        <img src="https://i.postimg.cc/jjnrytNf/personal-budget-about.png" alt="personal-budget-about" width="431" height="220" />
    </span>
</div>
