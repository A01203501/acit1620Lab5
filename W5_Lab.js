const namesList = [
  { name: "Ali" },
  { name: "Celeste" },
  { name: "Joomi" },
  { name: "Adam" } ]

const searchName = "Celeste"

for (let name in namesList){
  if (namesList[name].name == searchName){
    console.log("Success");    
  }
}