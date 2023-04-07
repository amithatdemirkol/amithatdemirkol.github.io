<!DOCTYPE html>
<html>
<head>
	<title>Registration Form</title>
	<link rel="=styşesheet" href="style.css">
</head>
<body>
	<h2>Registration Form</h2>
	<form action="Activity4-preview.php" method="POST">
		<label for="name">Name:</label>
		<input type="text" name="name" id="name" required><br>

		<label for="surname">Surname:</label>
		<input type="text" name="surname" id="surname" required><br>

		<label for="password">Password:</label>
		<input type="password" name="password" id="password" required><br>

		<label for="address">Address:</label>
		<input type="text" name="address" id="address" required><br>

		<label for="country">Country:</label>
		<select name="country" id="country" required>
			<option value="">Please select a country</option>
			<option value="USA">USA</option>
			<option value="Canada">Canada</option>
			<option value="UK">UK</option>
			<option value="France">France</option>
			<option value="Germany">Germany</option>
			<option value="Spain">Spain</option>
			<option value="Italy">Italy</option>
			<option value="Japan">Japan</option>
			<option value="China">China</option>
		</select><br>

		<label for="zipcode">Zip Code:</label>
		<input type="text" name="zipcode" id="zipcode" required><br>

		<label for="email">Email:</label>
		<input type="email" name="email" id="email" required><br>

		<label for="sex">Sex:</label>
		<input type="radio" name="sex" value="male" id="male" required>
		<label for="male">Male</label>
		<input type="radio" name="sex" value="female" id="female" required>
		<label for="female">Female</label><br>

		<label for="language">Language:</label>
		<input type="checkbox" name="language[]" value="English" id="english">
		<label for="english">English</label>
		<input type="checkbox" name="language[]" value="French" id="french">
		<label for="french">French</label>
		<input type="checkbox" name="language[]" value="German" id="german">
		<label for="german">German</label><br>
		<input type="checkbox" id="German" name="language[]" value="German"><br>

		</div>
		<span for="about">About:</span>
		<textarea id="about" name="about"></textarea> <br>
		<label></label>
		<input type="submit" id="sumbitbtn" value="submit">
	</form>
</body>
</html>