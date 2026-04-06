require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop and merge arrays
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }

  // Step 5: Get today's date
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};