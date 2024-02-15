class Service{
    constructor(Name, price, description, imageUrl) {
        this.Name = Name;
        this.price = price;
        this.description = description
        this.imageUrl = imageUrl; 
    }
}

const allServices = [new Service("Fönster tvätt", 100, "En grundlig fönstertvätt!","../Images/fonsterputs.webp"), new Service("Dammsugning", 100, "Dammsugning extra allt","../Images/dammsugare.webp"), new Service("Storstäd", 500, "super duper städning", "../Images/storstadning.webp")];
const userCartArr = [];

const serviceList = document.querySelector("#products");
const userCart = document.querySelector("#userCart");
const addbtn = document.getElementById("AddBtn");
const removebtn = document.getElementById("RemoveBtn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var img = document.getElementById("imgModal");
var pMod = document.getElementById("pModal");
var hMod = document.getElementById("hModal");

let newService;

function addServices() {
for (const chore of allServices) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = `${chore.Name} pris: ${chore.price}kr`;
    button.id = chore.Name;
    button.classList.add("btn");
    li.appendChild(button)
    serviceList.appendChild(li);

    button.onclick =  () => {
        newService = chore;
        modal.style.display = "block";
        img.src = newService.imageUrl;
        pMod.innerText = newService.description;
        hMod.innerText = newService.Name;
};  
}
span.onclick = function() {
  modal.style.display = "none";}

  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    addbtn.onclick = () => {
            addProductToCart(newService);
    };
}

function addProductToCart(selected) {
    userCartArr.push(selected);

    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = `${selected.Name} pris: ${selected.price}kr`;
    button.classList.add("btn");
    button.id = `${selected.Name}1`;
    li.appendChild(button);
    userCart.appendChild(li);

    button.onclick = () => {
        newService = selected;
    };

    removebtn.onclick = () => {
        removeProductFromCart(selected);
    };
}

function removeProductFromCart(selected) {
    const index = userCartArr.indexOf(selected);
        userCartArr.splice(index, 1);
        userCart.innerHTML = "";
        for (const chore of userCartArr) {
                const li = document.createElement("li");
                const button = document.createElement("button");
                button.innerText = `${chore.Name} pris: ${chore.price}kr`;
                button.classList.add("btn");
                button.id = `${chore.Name}1`;
                li.appendChild(button);
                userCart.appendChild(li);
        }; 
}

addServices();