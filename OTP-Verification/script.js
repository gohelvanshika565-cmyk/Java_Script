const verifybtn = document.getElementById('verifybtn');
verifybtn.addEventListener('click',verifyOTP);

function verifyOTP(){
    const correctOTP = "1234";
    const MaxAttempts = 3;
    let attempts = 0;
    let userOTP="";

    do{
        userOTP = prompt(`Enter OTP ${attempts} / ${MaxAttempts}: `);
        attempts++;

        if(userOTP === correctOTP){
            document.getElementById('result').innerText ="OTP Verify Successfully.!";
            return;
        }

    }while(userOTP != correctOTP && attempts < MaxAttempts);
}