/*   Michael Whalen
     Michael_Whalen@student.uml.edu
     Michael Whalen Computer Science Student in 91.61 GUI Prgoramming I Umass Lowell
     10/25/20
     Multiplication table made using javascript with html/css. This is the javascript for the page.
*/

//This function reads in the numbers and generates a table based off input given.
function readInNumbers()
{
  //Read in values
  var a = parseInt(document.getElementById("minRowNumber").value);
  var b = parseInt(document.getElementById("maxRowNumber").value);
  var c = parseInt(document.getElementById("minColumnNumber").value);
  var d = parseInt(document.getElementById("maxColumnNumber").value);

      //Change "test" (error message paragraph) to be empty at the beginning of every call to readInNumbers()
      document.getElementById("test").innerHTML="";

      //Error handling section testing all possible outcomes

      //These 4 if statements make sure that the input entered is an integer. If they are not the user will be notified to change the incorrect value(s).
      if(Number.isInteger(a)!=true)
      {
        document.getElementById("test").innerHTML="Please enter an integer";
        return;
      }

      if(Number.isInteger(b)!=true)
      {
        document.getElementById("test").innerHTML="Please enter an integer";
        return;
      }
      if(Number.isInteger(c)!=true)
      {
        document.getElementById("test").innerHTML="Please enter an integer";
        return;
      }
      if(Number.isInteger(d)!=true)
      {
        document.getElementById("test").innerHTML="Please enter an integer";
        return;
      }

       //if min row is greater than max row than return error message
      if(a > b){
        document.getElementById("test").innerHTML="Please enter a lower minimum row number";
        return;
      }
      //if min col is greater than max col than return error message
      if(c > d)
      {
            document.getElementById("test").innerHTML="Please enter a lower minimum column number";
            return;
      }

         //If a table already exists delete it
          if(document.querySelector(".myDiv"))
          {
            var remove= document.querySelector(".myDiv")
            var parent1= remove.parentElement;
            parent1.removeChild(remove);
          }
  // X and Y get the proper number of rows and columns needed
  var x_bound= (b-a) + 1;
  var y_bound= (d-c) + 1;


  var i;
  var j;
  var test1=0;
  var test2=0;
  var test1Array= new Array(y_bound);
  var test2Array= new Array(x_bound);


//A big help for a lot of my code is linked below this comment. This helped me create my table.
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
  var body = document.getElementsByTagName("body")[0];




  // creates a <table> element and a <tbody> element and a <div>
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var wrapper = document.createElement("div");
  wrapper.classList.add("myDiv");

  // creating all cells
  for (var i = 0; i <=x_bound; i++) {
    // creates a table row
    var row = document.createElement("tr");


    for (var j = 0; j <=y_bound; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");

      //Make sure top left corner is blank
      if(i==0 && j==0){
        var cellText = document.createTextNode('');
      }
      //If i==0 then fill in the beginning of each column
      else if(i==0){
        var cellText = document.createTextNode(c++);
        test1=cellText.nodeValue;
        test1Array[j]=test1;

      }
      //If j==0 then fill in the beginning of each row
      else if(j==0){
        var cellText = document.createTextNode(a++);
        test2=cellText.nodeValue;
        test2Array[i]=test2;
      }
      //After storing the beginning column and row values. I stored them each in an array and then multiply the values from each array with each other in sequential order.
      else{
      var cellText = document.createTextNode(test1Array[j]*test2Array[i]);

    }
    //Link everything together
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);

  //put <table> inside the <div>
  wrapper.appendChild(tbl);

  // appends <wrapper> into <body>
  body.appendChild(wrapper);
  //Create border for each td element
  tbl.setAttribute("border", "2");
 //Create an id for the table so later on I can delete it whenever the submit button is pressed
  tbl.setAttribute("id","myTable");

}
