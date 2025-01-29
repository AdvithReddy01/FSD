
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" placeholder="Enter your name" id="q">
    <button type="submit" id="w">Submit</button>
    <script>
        function greet(name) {
            console.log(`Hello ${name}`);
        }

        function greetfun(callback) {
            console.log("Good Morning!");
            callback();
        }

        let c=document.getElementById('w')
        c.addEventListener('click', function() {
            const a = document.getElementById('q');
            const name = a.value;
            greetfun(() => greet(name));
        });
    </script>
</body>
</html>

          
