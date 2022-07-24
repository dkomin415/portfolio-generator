const profileDataArgs = process.argv.slice(2, process.argv.length);

// Notice the lack of parenthesses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
  // This...
  for(let i = 0; i < profileDataArr.length; i++){
    console.log(profileDataArr[i]);
  }

  console.log('====================');
  
  // Is the same as this...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem);
  });
  
  console.log('====================');
  
  // And this...
  profileDataArr.forEach(profileItem => console.log(profileItem));

};

printProfileData(profileDataArgs);