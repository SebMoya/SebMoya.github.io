class Person {
constructor(FirstName, LastName, Age, Img, Country) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.Img = Img;
        this.Country = Country;
    }
}

const personArr = [];
const cardlist = document.getElementById("cardList");


async function getPersons() {
const personUrl = "https://randomuser.me/api/?results=10";
const response = await fetch(personUrl);
const data = await response.json();
const results = data.results; 

 for (const person of results) {

     const p = new Person(
        person.name.first,
        person.name.last,
        person.dob.age,
        person.picture.large,
        person.location.country
        );
            
    personArr.push(p);
    };

    displayCustomers();
}

getPersons();

function displayCustomers() {
for (const client of personArr) {
    const p = document.createElement("p");
    const cardTitle = document.createElement("h2");
    const cardBody = document.createElement("div");
    const img = document.createElement("img");
    const card = document.createElement("div");

    p.classList.add("card-text")
    cardTitle.classList.add("card-title");
    cardBody.classList.add("card-body");
    img.classList.add("card-img-top")
    card.classList.add("card");
    card.style = "width: 35rem";
    img.alt= "clientpic";

    cardTitle.innerText = `${client.FirstName} ${client.LastName}`
    p.innerText = `Ålder:${client.Age}, Land: ${client.Country}`
    img.src = client.Img;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(p);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardlist.appendChild(card);
}
}