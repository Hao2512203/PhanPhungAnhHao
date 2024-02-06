function checkPrime(n){
    let is_Check = true;
    if (n == 0 || n == 1  ){
      is_Check = false;
    }
    for(i = 2 ; i < n/2; i++){
      if(n%i == 0){
        is_Check = false;
      }
    }
    if(is_Check){
      console.log (n + ' la so nguyen to') ;
    }
    else{
      console.log(n + ' khong phai la so nguyen to') ;
    }
  }
  checkPrime(5);