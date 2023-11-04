<?php
$insert= false;
if(isset($_POST['name'])){
    $server = "localhost";
    $username = "root";
    $passowrd = "";
    $names = "trip";

    $con = mysqli_connect($server,$username,$passowrd,$names);

    if(!$con){
        die("connection to this database failed failed due to".mysqli_connect_error());
    }
    // echo "Success connecting to the db";

    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $desc = $_POST['desc'];
    $sql = "INSERT INTO `trips` (`name`, `age`, `gender`, `email`, `phone`, `other`, `dt`) VALUES ('$name', '$age', '$gender', '$phone', '$phone', '$desc', current_timestamp());";
    // echo $sql;
    // 

    if($con->query($sql) ==true){
        // echo "Successfully inserted";
        $insert=true;
    }
    else{
        echo "ERROR: $sql <br> $con->error";
    }

    $con->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Travel Form</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet">
</head>
<body>
    <img class="image" src="ggsp.jpg" alt="">
    <div class="navbar">
        <h1>Welcome to Guru Gobind Singh Trip form Project</h1>
        <p>Enter your details to confirm your participation in the trip</p>
        <?php
        if($insert==true){
            echo "<p class='green'> Thanks for submtting your form. We are happy to see you joining us for the trip!! </p>";
        }
        ?>
    </div>
    <div class="container">

        <form action="backend.php" method="POST">
            <input type="text" name="name" id="name" placeholder="Enter your name">
            <input type="text" name="age" id="age" placeholder="Enter your age">
            <input type="text" name="gender" id="gender" placeholder="Enter your gender">
            <input type="email" name="email" id="email" placeholder="Enter your email">
            <input type="phone" name="phone" id="phone" placeholder="Enter your phone">
            <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Enter any other information here"></textarea>
            <button class="btn">Submit</button>
        </form>
    </div>
    <script src="index.js"></script>
</body>
</html>


<!-- INSERT INTO `trip` (`sno`, `name`, `age`, `gender`, `email`, `phone`, `other`, `dt`) VALUES ('1', 'Anup tarwade', '18', 'male', 'anupsss@gmail.com', '4878456532', 'hello there!!', 'current_timestamp(6).000000'); -->
