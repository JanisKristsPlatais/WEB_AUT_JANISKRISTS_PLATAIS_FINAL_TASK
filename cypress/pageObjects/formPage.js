import { BasePage } from "./basePage";
export class FormPage extends BasePage {
    static get url() {
      return "automation-practice-form";
    }
    static get firstNameField(){
        return cy.get("#firstName");
    }
    static get LastNameField(){
        return cy.get("#lastName");
    }
    static get emailField(){
        return cy.get("#userEmail");
    }
    static get genderButton(){
        return cy.get("#genterWrapper");
    }
    static get mobileField(){
        return cy.get("#userNumber");
    }
    static get dateOfBirthField(){
        return cy.get("#dateOfBirthInput");
    }
    static get monthSelect(){
        return cy.get('.react-datepicker__month-select');
    }
    static get yearSelect(){
        return cy.get('.react-datepicker__year-select');
    }
    static get daySelect(){
        return cy.get('.react-datepicker__day').not('.react-datepicker__day--outside-month');
    }
   

    static get subjectsField(){
        return cy.get("#subjectsContainer");
    }
    static get hobbiesButton(){
        return cy.get("#hobbiesWrapper");
    }
    static get uploadFile(){
        return cy.get("#uploadPicture");
    }
    static get currentAddressField(){
        return cy.get("#currentAddress");
    }
    static get stateAndCityField(){
        return cy.get("#stateCity-wrapper");
    }
    static get stateField(){
        return cy.get("#state");
    }
    static get cityField(){
        return cy.get("#city");
    }
    static get submitButton(){
        return cy.get("#submit");
    }


    static get nameValidate(){
        return cy.get('td').contains("Student Name").next('td');
    }
    static get emailValidate(){
        return cy.get('td').contains("Student Email").next('td');
    }
    static get genderValidate(){
        return cy.get('td').contains("Gender").next('td');
    }
    static get mobileValidate(){
        return cy.get('td').contains("Mobile").next('td');
    }
    static get dateValidate(){
        return cy.get('td').contains("Date of Birth").next('td');
    }
    static get subjectsValidate(){
        return cy.get('td').contains("Subjects").next('td');
    }
    static get hobbiesValidate(){
        return cy.get('td').contains("Hobbies").next('td');
    }
    static get pictureValidate(){
        return cy.get('td').contains("Picture").next('td');
    }
    static get addressValidate(){
        return cy.get('td').contains("Address").next('td');
    }
    static get stateCityValidate(){
        return cy.get('td').contains("State and City").next('td');
    }
  }