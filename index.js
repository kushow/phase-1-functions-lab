function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(startBlock - endBlock);
    return blocks * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start);
let fare ;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
  
    return fare;
  }
  

  