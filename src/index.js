// Fetch dogs' data from the Server
// Please not that this server was deleted so it is likely not to work
fetch("http://localhost:3000/pups")
.then(res => res.json())
// Display each dog's data by calling the displayyAllDogs()
.then(dog => dog.forEach(element => displayAllDogs(element) ))
// Displays all dogs names in a list
const displayAllDogs = dogs =>{
    // Create a list
    const list = document.createElement('li');
    list.id = 'dog-list';
    dogChar = dogs.isGoodDog;
    // Create an html element displaying the name og the dog
    list.innerHTML = `
    <p>
        <span id='dog-name'>${dogs.name}</span>
    </p>
    `;
    // Append the html element to the div
    document.querySelector("#dog-bar").appendChild(list)
    // Event listens to click and displays the details
    document.querySelector("#dog-list").addEventListener('click', () => dogDetails(dogs))
}
// Displays a dog's name, image and character
const dogDetails = oneDog => {
    // Target the div
    const singleDog = document.querySelector("#dog-info")
    // Global variable that stores the particular dog's id
    dogId = oneDog.id;
    // Create html element with the dog's name, image and character
    singleDog.innerHTML = `
        <img id='dog-id' alt=${oneDog.name} src='${oneDog.image}'>
        <h2>${oneDog.name}</h2>
        <button id='dog-btn'>${oneDog.isGoodDog}</button>
    `;
    // Assign the buton content to a variable
    dogBtn = document.querySelector("#dog-btn").textContent;
    // Check if the above variable is true then reassign it
    if (dogBtn === true){
        dogBtn = `Good Dog`;
    }else{
        dogBtn = `Bad Dog`;
    }
    // Append the html elements to the div
    document.querySelector("#dog-info").appendChild(singleDog)
    // Event listens to a click and changes the dog character and updates the server
    document.querySelector("#dog-btn").addEventListener('click', () => {
        if(dogBtn === 'Good Dog'){
            dogBtn = false;
            updateChar();
        }else{
            dogBtn = true;
            updateChar();
        }
    })
}
// Updates the server with the current value isGoodDog
const updateChar = () => {
    fetch(`http://localhost:3000/pups/${dogId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({isGoodDog: dogBtn})
    })
    .then(res => res.json())
    // Executes dogDetails() again with the new value for isGoodDog
    .then(data => dogDetails(data))
    .catch(err => console.log(err))
}
// Update button
document.querySelector("#good-dog-filter").addEventListener('click', e => {
    e.preventDefault();
    onOff = document.querySelector("#good-dog-filter").textContent
    if (onOff === 'Filter good dogs: OFF'){
        onOff = 'Filter good dogs: ON'
        if (onOff === 'Filter good dogs: ON'){
            document.querySelector
        }
    }else{
        onOff = 'Filter good dogs: OFF'
    }
})
// Will work on this logic tomorrow
const filterDogs = () =>{
    if (dogChar === true){
        document.querySelector("#dog-btn").textContent = 8;
    }else{
        document.querySelector("#dog-btn").textContent = 9;
    }
    
}
