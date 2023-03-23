// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation) {
    //returns the number of blocks given a value
    const hqlocation = 42;
    return Math.abs(pickuplocation -hqlocation);
  }

  function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264; // the number of feet in one city block
    const blocksAway = distanceFromHqInBlocks(someValue); // calculate the distance in blocks using the distanceFromHqInBlocks function
    const distanceInFeet = blocksAway * feetPerBlock; // calculate the distance in feet by multiplying the distance in blocks by the feet per block
    return distanceInFeet; // return the distance in feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const feetPerBlock = 264; // the number of feet in one city block
    const distanceInBlocks = Math.abs(destination - start); // calculate the distance in blocks between the two locations
    const distanceInFeet = distanceInBlocks * feetPerBlock; // calculate the distance in feet by multiplying the distance in blocks by the feet per block
    return distanceInFeet; // return the distance in feet
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distanceInFeet = distanceTravelledInFeet(start, destination); // calculate the distance travelled in feet using the distanceTravelledInFeet() function
    let farePrice;
  
    if (distanceInFeet <= 400) {
      farePrice = 0; // the first 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02; // 2 cents per foot for distances between 400 and 2000 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      farePrice = 25; // $25 for distances between 2000 and 2500 feet
    } else {
      farePrice = 'cannot travel that far'; // distances over 2500 feet are not allowed
    }
  
    return farePrice; // return the calculated fare price
  }
