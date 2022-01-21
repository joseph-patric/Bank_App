// localStorage

// localStorage.setItem("username","admin")
// localStorage.setItem("password","admin@123")

var person1={pname:"ram", accno:1000, balance:20000, password:"qwerty123"}
var person2={pname:"Arun", accno:1001, balance:10000, password:"admin123"}

localStorage.setItem(person1.accno, JSON.stringify(person1))
localStorage.setItem(person2.accno, JSON.stringify(person2))

function getBalance(acno){
    if(acno in localStorage){
        let user=JSON.parse(localStorage.getItem(acno))
        console.log(user.balance);
    }
    else{
        console.log("Invalid account number");
    }
}

function authenticate(acno,pass){
    if (acno in localStorage){
        let user=JSON.parse(localStorage.getItem(acno))
        if (user.password==pass){
            console.log("Login successfull");
        }
        else{
            console.log("Password invalid");
        }
    }
    else{
        console.log("Invalid account number");
    }
}