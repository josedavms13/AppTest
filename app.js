const users = [
    {
        nombre : 'Pablo',
        id: 1,
        Email: 'pablo@gmail.com',
        NumDogs: 2,
        Dogs: [ 'Perro A', 'Perro B'
        ]
    }
]


// ======================== SHOW/HIDE GENERAL FUNCTIONS ==================

//#region Show-Hide Forms


function OpenForm(id){

    //Id passed in HTML

    document.getElementById(id).classList.remove('d-none');

}

function CloseForm(id){
    document.getElementById(id).classList.add('d-none');
}


//#endregion



//========================= SET NAME OF EACH DOG TEXT INPUTS =================

//#region Form Number of Dogs

function getNumbOfDogs(){

    const NumbOfDogs = document.getElementById('dog-number').value;

    generateInputs(NumbOfDogs);


    return NumbOfDogs;
    // console.log(NumbOfDogs);

}

function generateInputs(number){
    const numbOfInputsContainer = document.getElementById('dog-names-container');
    // console.log(numbOfInputsContainer)
    let toPrint = ''

    if(number > 0){
        toPrint += `
        <div class="tittle">
            <h4> Ingresa el nombre de los perros </h4>
        </div>
    `
    }
    for(let i = 0 ; i < number; i++){
        toPrint += `
        <div class="m-2"
        <label for="dog1 class="display-block">Nombre</label>
        <input type="text class="display-block" name="dogname" id="d${i}"><br>      
        </div>
        `
    }


    // console.log(toPrint)

    numbOfInputsContainer.innerHTML = toPrint;

}

function resetAddDogsNameForm(){

    document.getElementById('dog-number').value = 0;
    generateInputs();


}

function Agregate(){
    getNamesFromImputs('dog-name-input');
    resetAddDogsNameForm();
}

//#endregion





function getNamesFromImputs(htmlClass){


    const dogNames = [];
    const ForLoopLimit = getNumbOfDogs();
    console.log(ForLoopLimit);

    // const i = 1;


    for (let i = 0; i < ForLoopLimit; i++) {

        const id = `d${i}`
        const name = document.getElementById(id).value;
        
        console.log(name);

    }


    // console.log(dogNames);


}






