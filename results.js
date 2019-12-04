<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="layout.css">
  <title>Results</title>
  <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script type="text/javascript">

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "My First Chart in CanvasJS"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
			]
		}
		]
	});
	chart.render();
}
</head>

<body>
  <img src="https://styleguide.umbc.edu/files/2019/01/UMBC-primary-logo-RGB-1024x236.png" alt="Image">

  <h1>Admin Login > Term > Result Page</h1>
  <h2>Fall 2020</h2>
    <div class="result">
      <table>
        <tr>
          <th>Class Name</th>
          <th>Votes</th>
        </tr>
        <tr>
          <td>IS147</td>
          <td>24</td>
        </tr>
        <tr>
          <td>IS247</td>
          <td>30</td>
        </tr>
        <tr>
          <td>IS300</td>
          <td>42</td>
        </tr>
        <tr>
          <td>IS310</td>
          <td>52</td>
        </tr>
        <tr>
          <td>IS410</td>
          <td>30</td>
        </tr>
        <tr>
          <td>IS420</td>
          <td>25</td>
        </tr>
        <tr>
          <td>IS425</td>
          <td>34</td>
        </tr>
        <tr>
          <td>IS436</td>
          <td>15</td>
        </tr>
        <tr>
          <td>IS450</td>
          <td>20</td>
        </tr>
        <tr>
          <td>IS451</td>
          <td>32</td>
        </tr>
      </table>
    </div>

    <h2>Resources Requested</h2>
    <textarea rows="5" cols="50" value="Here is some text input" name="request" maxlength="60">
    </textarea>
    <br>
    <textarea rows="5" cols="50" value="Here is some text input" name="request" maxlength="60">
    </textarea>
    <br>
    <textarea rows="5" cols="50" value="Here is some text input" name="request" maxlength="60">
    </textarea>
    <br>
    <textarea rows="5" cols="50" value="Here is some text input" name="request" maxlength="60">
    </textarea>
    <br>
    <textarea rows="5" cols="50" value="Here is some text input" name="request" maxlength="60">
    </textarea>
    <br>
</body>
