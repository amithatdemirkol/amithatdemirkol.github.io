<!DOCTYPE html>
<html lang="en">
<head>
    <title>User Registration Form Preview</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<body>
    <h1>Preview</h1>
    <?php

    if (empty($_POST['name'])) {
        echo "Name: Not Provided <br>";
    } else {
        echo $_POST['name'] . "<br>";
    }

    if (empty($_POST['username'])) {
        echo "Username: Not Provided <br>";
    } else {
        echo $_POST['username'] . "<br>";
    }

    if (empty($_POST['password'])) {
        echo "Password: Not Provided <br>";
    } else {
        echo $_POST['password'] . "<br>";
    }

    if (empty($_POST['address'])) {
        echo "Address: Not Provided <br>";
    } else {
        echo $_POST['address'] . "<br>";
    }

    if ($_POST['country'] == "none" || empty($_POST['country'])) {
        echo "Country: Not Provided <br>";
    } else {
        echo $_POST['country'] . "<br>";
    }

    if (empty($_POST['zipcode'])) {
        echo "Zip: Not Provided <br>";
    } else {
        echo $_POST['zipcode'] . "<br>";
    }

    if (empty($_POST['email'])) {
        echo "Email: Not Provided <br>";
    } else {
        echo $_POST['email'] . "<br>";
    }

    if (empty($_POST['sex'])) {
        echo "Sex: Not Provided <br>";
    } else {
        echo $_POST['sex'] . "<br>";
    }

    if (empty($_POST['language'])) {
        echo "Language: Not Provided <br>";
    } else {
        for ($i = 0; $i < sizeof($_POST['language']); $i++) {
            echo $_POST['language'][$i] . "<br>";
        }
    }

    if (empty($_POST['about'])) {
        echo "About: Not Provided <br>";
    } else {
        echo $_POST['about'] . "<br>";
    }

    ?>
</body>
</html>