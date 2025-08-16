function canJump(nums) {
    if(nums[0] == 0){
      if(nums.length == 1){
        return true;
      }else{
        return false;
      }
    }
    let jump = 0;

    for (let index = 1; index < nums.length; index++) {
      if(jump == nums.length - 1){
        return true;
      }
      const element = nums[jump];
      if(element){
        if(jump == 0){
          jump = 1;  
        }else{
          jump += element;
        }
      }else{
        console.log(false);
        return false;
      }
    }
    console.log("teste")
    return true;
    
};

function canJump(nums) {
    let position = 0;

    // Enquanto não chegamos ou passamos do último índice
    while (position <= nums.length - 1) {
        const jump = nums[position];

        // Se não podemos pular, ficamos presos
        if (jump === 0) {
            return false;
        }

        if (position === 0) {
            // Primeiro pulo: só vai +1
            position += 1;
        } else {
            // A partir daqui, sempre pulamos o valor que tem no array
            position += jump;
        }

        // Se chegamos ou passamos do último índice
        if (position == nums.length - 1) {
            return true;
        }
    }

    // Se sair do loop sem ter chegado no fim
    return false;
}

canJump([2,3,1,1,4]);