let pass;

const fullName = document.getElementById("full-name");
const id = document.getElementById("passport");
const orgIssued = document.getElementById("passport-place");
const dateIssued = document.getElementById("passport-date");
const birthPlace = document.getElementById("birth-place");
const birthDate = document.getElementById("birth-date");
const homeAddress = document.getElementById("residence");
const department = document.getElementById("department");
const jobTitle = document.getElementById("job");
const purposeOfStay = document.getElementById("purpose");
const dateOfStay = document.getElementById("visit-date");
const accompPerson = document.getElementById("attendant");
const coordPerson = document.getElementById("coordinator");

const submitBtn = document.getElementById("submit-btn");
const clearForm = document.getElementById("clear-form-btn");

const dialog = document.getElementById("form-sent-dialog");
const closeDialog = document.getElementById("close-btn");

dateIssued.max = new Date().toISOString().split("T")[0];
birthDate.max = new Date().toISOString().split("T")[0];
dateOfStay.min = new Date().toISOString().split("T")[0];

class personData {

    constructor(passObj) {
        const {
            name,
            id,
            orgIssued,
            dateIssued,
            birthPlace,
            birthDate,
            homeAddress,
            department,
            jobTitle,
            purposeOfStay,
            dateOfStay,
            accompPerson,
            coordPerson
        } = passObj;

        this.name = name;
        this.id = id; 
        this.orgIssued = orgIssued;
        this.dateIssued = dateIssued;
        this.birthPlace = birthPlace;
        this.birthDate = birthDate;
        this.homeAddress = homeAddress;
        this.department = department;
        this.jobTitle = jobTitle;
        this.purposeOfStay = purposeOfStay;
        this.dateOfStay = dateOfStay;
        this.accompPerson = accompPerson;
        this.coordPerson = coordPerson; 

        this.obj = passObj;
    }

    toJSON(){
        return JSON.stringify(this.obj)
    }

}

function getFormData() {
    return {
        name: fullName.value,
        id: id.value,
        orgIssued: orgIssued.value,
        dateIssued: dateIssued.value,
        birthPlace: birthPlace.value,
        birthDate: birthDate.value,
        homeAddress: homeAddress.value, 
        department: department.value,
        jobTitle: jobTitle.value,
        purposeOfStay: purposeOfStay.value,
        dateOfStay: dateOfStay.value,
        accompPerson: accompPerson.value,
        coordPerson: coordPerson.value
    }
}

function checkEmptyInputs(formData){  
    for (const [key, value] of Object.entries(formData)) {
        if(!value){
            return false;
        }
    }

    return true;
}


submitBtn.addEventListener("click", e => {
    e.preventDefault();

    const formData = getFormData();

    if(checkEmptyInputs(formData)){
        pass = new personData(formData);
        // show modal window informing successful operation
        dialog.showModal();
        // clear form
        clearForm.click();
    }else{
        alert("Заполните пустые поля")
    }; 
     
});

closeDialog.addEventListener('click', e => {
    dialog.close();
})

export function getPersonData() {
    return pass;
}


