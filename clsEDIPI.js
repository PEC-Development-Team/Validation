class clsEDIPI
{
   constructor(options)
   {
       if (!options)
       {
           throw 'Options must be defined for the EDIPI class';
       }
       this.options = options;
       this.createElement();
   }

   createElement()
   {
       let containerContent =
           `<div class="TEAMclsEDIPIContainer">
               <input class="TEAMclsEDIPIInput" type="text" />
               <span class="TEAMclsEDIPIAlert">Must be a valid EDIPI.</span>
           </div> 
           `
       this.isValid = false;
       this.EDIPI = '';

       if (typeof this.options.containerElement === 'undefined' ||
!this.options.containerElement)
       {
           throw 'Container element must be defined in EDIPI options.';
       }

       this.containerElement = this.options.containerElement;
       this.containerElement.innerHTML = containerContent;

       this.input =
this.containerElement.querySelector('.TEAMclsEDIPIInput');
       this.validationPopover =
this.containerElement.querySelector('.TEAMclsEDIPIAlert');

       this.input.addEventListener('input',
this.ValidationTrigger.bind(this));
   }

   ValidationTrigger()
   {
       this.EDIPI = this.input.value;
       this.Validator(this.EDIPI);
   } 

   Validator(EDIPIToTest)
   {
       this.isValid = this.EDIPIValidationTest(EDIPIToTest);
       const showValidation = EDIPIToTest !== "" && !this.isValid;
       this.ValidationDisplay(showValidation);
   }

   EDIPIValidationTest(EDIPI)
   {
       return
/^(\d(?!1{7}|2{7}|3{7}|4{7}|5{7}|6{7}|7{7}|8{7}|9{7}|0{7}|012345|123456|2345
67|345678|456789|567890|098765|987654|876543|765432|654321|543210)){10}$/.te
st(EDIPI);
   }

   ValidationDisplay(show)
   {
       if (show)
       {
           this.validationPopover.style.display = "inherit";
       }
       else
       {
           this.validationPopover.style.display = "none";
       }
   }

   Reset()
   {
       this.input.value = '';
       this.EDIPI = '';
       this.isValid = false;
       this.validationPopover.style.display = "none";
   }
}