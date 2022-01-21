class Bank {

    createAccount() {
        let person_name = uname.value;
        let account_number = acno.value;
        let account_type = actype.value;
        let bal = balance.value;
        let pwd = pass.value;

        let user = {
            person_name, account_number, account_type, bal, pwd
        }

        localStorage.setItem(account_number, JSON.stringify(user))

        alert("Account created successfully. Login to proceed.")

        location.href = "bank_login.html"

    }

    // validateAccountNumber(acno){
    //     return acno in localStorage?true:false;
    // }


    authenticate() {
        let account_number = acno.value;
        let password = pass.value;

        if (account_number in localStorage) {
            let user = JSON.parse(localStorage.getItem(account_number))
            if (user.pwd == password) {
                sessionStorage.setItem(account_number, JSON.stringify(user))
                alert("Login success")
                location.href = "home_page.html"
            }
            else {
                alert("invalid credentials")
            }
        }
        else {
            alert("invalid account number")
        }
    }

    logout() {
        sessionStorage.clear();
        location.href = "bank_login.html"
    }

    balanceEnquiry() {
        let user = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`Your available balance is ${user.bal}`)
    }

    fundTransfer() {
        let to_acno = toaccno.value
        let amt = amount.value

        if (to_acno in localStorage){
            let user = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
            console.log(user.bal);

            if (user.bal >= amt){

                let sndr = JSON.parse(localStorage.getItem(user.account_number))
                let rcvr = JSON.parse(localStorage.getItem(to_acno))
                user.bal-=amt
                sndr.bal-=amt
                rcvr.bal+=amt

                sessionStorage.setItem(user.account_number, JSON.stringify(user))
                localStorage.setItem(sndr.account_number, JSON.stringify(sndr))
                localStorage.setItem(rcvr.account_number, JSON.stringify(rcvr))
            }


            else{
                alert("Insufficient balance. Transaction failed!")
            }
        }
        else{
            alert ("Invalid account number. Transaction failed!")
        }
        
    }
}

var bank = new Bank()