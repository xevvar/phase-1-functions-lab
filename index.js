// Code your solution in this file!

function distanceFromHqInBlocks(customerStreet){
    return Math.abs(42 - customerStreet)
  
}


function distanceFromHqInFeet(perBlock){
   let inFeet = distanceFromHqInBlocks(perBlock);

   return inFeet * 264

}   

function distanceTravelledInFeet(block1 , block2){
   return  Math.abs((block1-block2) * 264)

}

function calculatesFarePrice(street1 , street2){
    let distance = distanceTravelledInFeet(street1 , street2);

    if (distance <= 400){
        return 0
    }else if ((distance > 400) && (distance <= 2000)){
        let charge = (distance - 400) * 0.02

        return charge
    }else if ((distance > 2000) && (distance <= 2500)){
        return 25
    }else if (distance > 2500){
        return 'cannot travel that far'
    }


}