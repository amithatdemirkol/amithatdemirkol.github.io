<!DOCTYPE html>
<html>
<head>
	<title>Currency Calculator</title>
    <link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>
	<h1>Currency Calculator</h1>
	<form method="post">
		<label>Amount:</label>
		<input type="text" name="amount" required><br><br>
		<label>From Currency:</label>
		<select name="from_currency" required>
			<option value="">Select Currency</option>
			<option value="USD">USD</option>
			<option value="EUR">EUR</option>
			<option value="CAD">CAD</option>
		</select><br><br>
		<label>To Currency:</label>
		<select name="to_currency" required>
			<option value="">Select Currency</option>
			<option value="USD">USD</option>
			<option value="EUR">EUR</option>
			<option value="CAD">CAD</option>
		</select><br><br>
		<input type="submit" name="submit" value="Convert">
	</form>

	<?php
	if(isset($_POST['submit'])){
		$amount = $_POST['amount'];
		$from_currency = $_POST['from_currency'];
		$to_currency = $_POST['to_currency'];

				// Conversion rates (hardcoded)
				$conversion_rates = array(
					'USD' => array(
						'USD' => 1,
						'EUR' => 0.85,
						'CAD' => 1.25
					),
					'EUR' => array(
						'USD' => 1.18,
						'EUR' => 1,
						'CAD' => 1.47
					),
					'CAD' => array(
						'USD' => 0.8,
						'EUR' => 0.68,
						'CAD' => 1
					)
				);

		$conversion_rate = $conversion_rates[$from_currency][$to_currency];
		$conversion_result = $amount * $conversion_rate;

		echo "<br><b>Converted Amount:</b> ".$conversion_result." ".$to_currency;
	}
	?>
</body>
</html>
