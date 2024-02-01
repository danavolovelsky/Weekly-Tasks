const studySpots = document.querySelector("#studySpots");
const low = document.querySelector("#low"); // button for descending  order
const high = document.querySelector("#high"); // button for ascending order

let ratingArray= []; //Array to store data

//Getting the data from the google sheet
async function getData () {
    try {
        const response = await fetch ('https://opensheet.elk.sh/1JVzI251KwjmqybTsCJ-avCFF005ErVaVDW7kwJzaAcU/Tabellenblatt1')
        const data = await response.json()

        ratingArray = data;
        displayData(ratingArray)
    } catch (err){
        console.log(err);
    }
}
        function displayData(data){
            studySpots.innerHTML = "";
//Displaying data from each row
        data.forEach((row) => {
            const container = document.createElement('div')
            const name = document.createElement('h2')
            const rating = document.createElement('h2')
            const picture = document.createElement('img')
            const prosButton = document.createElement('button')
            const consButton = document.createElement('button')  
            const pros = document.createElement('p')
            const cons = document.createElement('p')  

            container.append(name)
            container.append(rating)
            container.append(picture)
            container.append(pros)
            container.append(cons)
            container.append(prosButton)
            container.append(consButton)
        
            studySpots.append(container)
            container.classList.add('container')
            name.innerText = row.study_spots
            rating.innerText = row.rating
            picture.src = row.url
            prosButton.innerText = "Pro"
            consButton.innerText = "Con"
            pros.innerText = row.Pros
            cons.innerText = row.Cons

            picture.setAttribute('alt', `Picture of the study spot ${row.study_spot}`);

            pros.style.display = "none";
            cons.style.display = "none";
        //Sort buttons functualities
            prosButton.addEventListener('click', () => {
                pros.style.display = 'block';
                prosButton.style.display = "none";
            });
        
            consButton.addEventListener('click', () => {
                cons.style.display = 'block';
                consButton.style.display = "none";

            });
        
        } )
    }

// Event listener for sorting in descending order
high.addEventListener('click', () => {
    ratingArray.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)); // Sort in descending order
    displayData(ratingArray); // Display sorted data
    window.scrollTo(0, 0); // Scroll to top of the page
});

low.addEventListener('click', () => {
    ratingArray.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating)); // sort in ascending order
    displayData(ratingArray);
    window.scrollTo(0, 0);
});

getData();