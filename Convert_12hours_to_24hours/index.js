
// Convert 12 hrs to 24hrs

const convert12To24 = (time12h)=>{
    const [time,modifier] = time12h.split(" ")

    let [hours,minutes] = time.split(":")

    if(hours === "12"){
        hours = "00"
    }
    if(modifier === "PM"){
        hours = parseInt(hours) + 12
    }

    return `${hours}:${minutes}`;

}

console.log(convert12To24("02:02 PM"));
console.log(convert12To24("04:06 PM"));
console.log(convert12To24("12:00 PM"));
console.log(convert12To24("12:00 PM"));