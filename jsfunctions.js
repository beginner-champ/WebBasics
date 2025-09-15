<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JavaScript Loops and conditions</title>
</head>
<body>
<h1>Javascript Output</h1>
<pre id="output"></pre>
<script>
let output= "";
let num = 7;
if (num < 10)
{
if (num % 2 == 0)
{
console.log(num,"is an even number less than 10.\n");
}
else
{
console.log(num,"is an odd number less than 10.\n");
}
}
else{
    console.log(num,"is not less than 10.");
}
document.getElementById("output").textContent = output;
</script>
</body>
</html>