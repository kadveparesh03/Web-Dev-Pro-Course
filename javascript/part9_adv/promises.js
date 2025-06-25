function fetchData(){
    return new Promise((resolve,reject )=> {
        setTimeout(()=>{
            let success=true;
            if (success){
                resolve("Data Fetched Successfully")
            }else {
                reject("Error fetching Data");
        }
        },3000);

    })
}

fetchData()
    .then((data)=>{
        console.log(data)
        return `Paresh`;
    })
    .then((value)=> {
        console.log(value);
    })
    .catch((error)=>console.error(error))