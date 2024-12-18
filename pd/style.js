let inputEle= document.getElementById("location-input")
let tempEle= document.getElementById("temp-value")
let locEle= document.getElementById("location")
let weatherdescElement=document.getElementById("weather-desc")
let btnElement=document.getElementById("btn")
const apikey='a916f3dd0b9d0c2d5b7df12ffe9347e8';
btnElement.onclick=function(){
    if(inputEle.value=="")
        alert("please enter some location")
    else{
        let loc=inputEle.value
        console.log(loc)
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        console.log("this is url",url)
        fetch(url).then(res => res.json())
        .then(data=>{
            console.log(data)   
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            tempEle.innerText=Math.floor(feels_like-273);
            locEle.innerText=name;
            weatherdescElement.innerText=description

        })
        .catch(()=>{
            alert("Enter valid location")
        })
        inputEle.value=""
    }
}
