const convertTemp = () =>{

        const numTemp = document.getElementById('number_info').value;
        const selectVal = document.getElementById('seloptions');
        const selValues = seloptions.options[selectVal.selectedIndex].value;

        const celToFeh = (cels) =>{
            let fahrenheit = Math.round((cels *9/5) + 32);
            return fahrenheit;
        }

        const fehToCel =(fahr) =>{
            let celcius = Math.round((fahr - 32) * 5/9);
            return celcius;
        }

        let result;
        if (selValues =='cels'){
            result = celToFeh(numTemp);
            document.getElementById('rescontainer').innerHTML= result + ' Fehrenheit';
        }
        else{
            result = fehToCel(numTemp);
            document.getElementById('rescontainer').innerHTML= result + ' Celcius';
        }
        document.getElementsById("number_info").innerHTML ="";
}

const clear_btn =() =>{
    
    document.getElementById("rescontainer").innerHTML ="Your Result Here";
}