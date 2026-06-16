const Couponbtn = document.getElementById('Couponbtn');
Couponbtn.addEventListener('click',rightcoupon);

function rightcoupon(){
    const correctCoupon = "SAVE50";
    const MaxAttempts = 3;
    let attempts = 0;
    let usercoupon = "";

    do{
        usercoupon = prompt (`Enter Coupon Code ${attempts} / ${MaxAttempts}:`);
        attempts++;

        if(usercoupon === correctCoupon){
            document.getElementById('result').innerText = "Coupon Applied Successfully!";
            return;
        }
    }while(usercoupon != correctCoupon && attempts < MaxAttempts);

}