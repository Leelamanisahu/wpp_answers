const currentTimeAndDate = ()=>{
    const dt = new Date();
    let dateNumber = dt.getDay();
    let day ;
    switch (dateNumber) {
        case 0:
            day = 'sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednsday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
    
        default:
            console.log("invalid day")
            break;
    }
    
    const time = dt.toLocaleTimeString();
    console.log("Today is :",day)
    console.log("Current time is",time)
}

currentTimeAndDate();