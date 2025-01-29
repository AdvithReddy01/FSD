
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   
    <form  id="form">
        <label for="name">name</label>
        <input type="text" id="name" name="name">
        <label for="pass">password</label>
        <input type="password" name="pass" id="pass">
        <label for="amount">amount</label>
        <input type="text" name="amount" id="amount">
        <input type="submit" id="submit">
    </form>
</body>

<script>
    const Name = document.getElementById('name');
    const pass = document.getElementById('pass');
    const amt = document.getElementById('amount');
    const submit = document.getElementById('submit');
    
    const NAME = "RAM";
    const PASS = "RAM";
    const AMT = 100;

    const verifyDetails = (name, pass, amt, callback) => {
        setTimeout(() => {
            if (NAME !== name || PASS !== pass || amt > AMT) {
                console.log("Name and password are incorrect or amount exceeds limit");
            } else {
                callback(amt);
            }
        }, 5000);
    };

    function payment(amt) {
        setTimeout(() => {
            console.log("Payment is Done");
            console.log("Amount in the account is");
            console.log(AMT - amt);
        }, 5000);
    }

    submit.addEventListener("click", (e) => {
            e.preventDefault()
        const name = Name.value;
        const passValue = pass.value;
        const amtValue = parseInt(amt.value, 10);
        verifyDetails(name, passValue, amtValue, payment);
    });
</script>
</html>














