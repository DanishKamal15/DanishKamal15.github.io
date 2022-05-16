
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    
    <style>
      body {
        background-color: whitesmoke;
      }
      input {
        width: 40%;
        height: 9%;
        border: 1px;
        border-radius: 05px;
        padding: 8px 15px 8px 15px;
        margin: 10px 0px 15px 0px;
        box-shadow: 1px 1px 2px 1px grey; 
      }
    </style>
  </head>
  <body>
    <h1 align="center">UPDATE TO DATA</h1>
    <form action="update.php" align="center" method="POST">
      <input
        type="text"
        name="name"
        placeholder="enter your name"
        required
      /><br />
      <input
        type="number"
        name="age"
        placeholder="enter your age"
        required
      /><br />
      <input
        type="number"
        name="number"
        placeholder="enter your number "
        required
      /><br />
      <input type="submit" value="UPDATE DATA" name="update" />
    </form>
  </body>
</html>
