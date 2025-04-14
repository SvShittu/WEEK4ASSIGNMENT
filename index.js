// Question 1
function checkJambResult(score) {
    if (score >= 180) {
      console.log("Passed")
    } else {
      console.log("Failed")
    }
  }
  
  // Example
  checkJambResult(250) 
  //(passed logged as the result)
  checkJambResult(140) 
  //(failed logged as the result)


  //Question 2
  function checkVotingEligibility(age) {
    if (age >= 18) {
      console.log("You are eligible to vote")
    } else {
      console.log("Not eligible")
    }
  }
  
  // Example 
  checkVotingEligibility(50) 
  // Outputs: You are eligible to vote
  checkVotingEligibility(12) 
  // Outputs: Not eligible
  
  
//Question 3

function evaluateStudent(name, score) {
    if (score >= 90) {
      console.log("Excellent")
    } else if (score >= 75) {
      console.log("Good")
    } else if (score >= 50) {
      console.log("Average")
    } else {
      console.log("Fail")
    }
  }
  
  // Example 
  console.log(evaluateStudent("Alice", 92)) 
  // Outputs: Excellent
  console.log(evaluateStudent("Bob", 78))  
  // Outputs: Good
  console.log(evaluateStudent("Charlie", 55)) 
  // Outputs: Average
  console.log(evaluateStudent("Dave", 40))  
  // Outputs: Fail
  

  //Question 4
  function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
      console.log("Access granted")
    } else {
      console.log("Access denied")
    }
  }
  
  // Example 
  console.log(checkAccess(true, true))  
  // Outputs: Access granted
  console.log(checkAccess(true, false)) 
  // Outputs: Access denied
  console.log(checkAccess(false, true)) 
  // Outputs: Access denied
  console.log(checkAccess(false, false)) 
  // Outputs: Access denied
  

  // Question 5
  function checkScores(scores) {
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] > 50) {
        console.log("Pass")
      } else {
        console.log("Fail")
      }
    }
  }
  
  // Example 
  const studentScores = [75, 40, 90, 50, 66]
  checkScores(studentScores)
  // Output:
  // Pass
  // Fail
  // Pass
  // Fail
  // Pass
  

  //Question 6
  const passBothExams = (mathScore, englishScore) => {
    if(mathScore >= 50 && englishScore >= 50){
      console.log("Yes")
    } else {
      console.log("No")
    }
      }
  
  // Example 
  console.log(passBothExams (60, 70)) 
  // Outputs: Yes
  console.log(passBothExams (45, 80)) 
  // Outputs: No
  console.log(passBothExams (90, 40)) 
  // Outputs: No
  

  //Question 7
  function checkSignup(email, phoneNumber) {
    if (email || phoneNumber) {
      console.log("Signup allowed")
    } else {
      console.log("Signup denied")
    }
  }
  
  // Example 
  console.log(checkSignup("svshittu@gmail.com", ""))
   // Outputs: Signup allowed
  console.log(checkSignup("", "1234567890"))       
  // Outputs: Signup allowed
  console.log(checkSignup("", ""))             
  // Outputs: Signup denied

  
  //Question 8
  function validateCredentials(username, password) {
    if (username === "" || password === "") {
      console.log("Invalid input")
    }else{
    console.log("Valid input")
  }
     }
  // Example 
  console.log(validateCredentials("youui3", "koll"))
  // Outputs: Valid input
  console.log(validateCredentials("", "pyjjj"))   
   // Outputs: Invalid input
  console.log(validateCredentials("u88900", "")) 
  // Outputs: Invalid input
  console.log(validateCredentials("", ""))     
  // Outputs: Invalid input
  
  //Question 9

  function workersCheck(hoursWorked) {
  hoursWorked >= 40 ?  console.log("Full-time") : console.log("Part-time")
         }
  
  // Example 
  console.log(workersCheck(45)) 
  // Outputs: Full-time
  console.log(workersCheck(30)) 
  // Outputs: Part-time
  

  //Question 10
  const largerNumber = (num1, num2) =>{
    if(num1 > num2 ){
    console.log(num1)
    } else {
      console.log(num2)
    }
  }

// Example 
console.log(largerNumber(10, 20))   
// Outputs: 20
console.log(largerNumber(30, 15)) 
// Outputs: 30
console.log(largerNumber(5, 5)) 
// Outputs: 5
