function startup() {
  let status = 'ready'; // there is no way to access this from outside the function
  return function() {
    console.log('The system is ready.');
  };
}


// 'status' is only available to the closure formed by the anonymous 
// function returned by 'startup'