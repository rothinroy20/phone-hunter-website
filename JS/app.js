const allPhone = () => {
    document.getElementById("Phone-container").innerHTML = "";
    document.getElementById("spinner").style.display = "block";
    // const searchValue = document.getElementById("search-box").value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => showPhoneDetails(data.phone));

};

const showPlayerDetails = (phones) => {
    for (const phone of phones) {
        const parent = document.getElementById("Phone-container");
        const div = document.createElement("div");
        div.innerHTML = `<div class="card border p-5">
            <div class="pro-pic">
                <img class="w-50" src="${phone.strThumb}" alt="">
            </div>
            <h2>Name: ${phone.strphone}</h2>
          `;
        parent.appendChild(div);
        console.log(phone);
    }
};

const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(response => response.json())
        .then((data) => setDetails(data.phone[0]));
};

const setDetails = (info) => {
    console.log(info.strGender);
}
document.getElementById("details-container").innerHTML = `
    <div>
    <img src="" alt="">
    <h1>name: ${info.strphone}</h1>
    </div>
    `
};