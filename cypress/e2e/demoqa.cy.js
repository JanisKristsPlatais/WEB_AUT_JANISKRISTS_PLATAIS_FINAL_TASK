import { FormPage} from "../pageObjects/formPage";

describe('DEMO QA', () => {
  context("Final Task", () => {
    beforeEach(() => {
      FormPage.visit();
    });
    it('Automation Practice Form', () => {
      const name="John";
      const surname="Doe";
      const email="johndoe@gmail.com";
      const gender="Male";
      const number="22222222";
      const subjects = "Economics";
      const hobbies = "Music";
      const picture = "image.png";
      const address="John Street 21";
      const state = "NCR";
      const city = "Delhi";
      

      FormPage.firstNameField.type(name);
      FormPage.LastNameField.type(surname);
      FormPage.emailField.type(email);
      FormPage.genderButton.contains(gender).click();
      FormPage.mobileField.type(number);
      FormPage.dateOfBirthField.click();
      FormPage.monthSelect.select("1");
      FormPage.yearSelect.select("1930");
      FormPage.daySelect.click();
      FormPage.subjectsField.type(subjects+"{enter}")
      FormPage.hobbiesButton.contains(hobbies).click();
      FormPage.uploadFile.selectFile("files/"+picture);
      FormPage.currentAddressField.type(address);
      FormPage.stateAndCityField.click();
      FormPage.stateField.type(state+"{enter}");
      FormPage.cityField.type(city+"{enter}");
      FormPage.submitButton.click();
      
      FormPage.nameValidate.should("have.text",name+" "+surname);
      FormPage.emailValidate.should("have.text",email);
      FormPage.genderValidate.should("have.text",gender);
      FormPage.mobileValidate.should("have.text",number);
      FormPage.dateValidate.should("have.text","28 February,1930");
      FormPage.subjectsValidate.should("have.text",subjects);
      FormPage.hobbiesValidate.should("have.text",hobbies);
      FormPage.pictureValidate.should("have.text",picture);
      FormPage.addressValidate.should("have.text",address);
      FormPage.stateCityValidate.should("have.text",state+" "+city);








  })
})
})
