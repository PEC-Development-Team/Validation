class clsPhone
{
   constructor(options)
   {
       if (!options)
       {
           throw 'Options must be defined for the phone class';
       }
       this.options = options;

       //I don't need this twice do I?
       this.containerElement = this.options.containerElement;

       this.createElement();
   }

   createElement()
   {
       let containerContent;
       this.isValid = true;
       this.PhoneNumber = '';

       //I think I can do this more simply now.
       T.ajax
           ({
               auth: true,
               method: 'GET',
               url: '/content/templates/TEAMclsPhone.html',
               dataType: 'HTML',
               success: function (result)
               {
                   containerContent = result;
               },
               error: function (result)
               {

               }
           });

       if (typeof this.options.containerElement === 'undefined' ||
!this.options.containerElement)
       {
           throw 'options.containerElement must be defined: TEAMclsModal.js';
       }

       this.containerElement = this.options.containerElement;  
       this.containerElement.innerHTML = containerContent;

       this.input =
this.containerElement.querySelector('.TEAMclsPhoneInput');
       this.validationPopover =
this.containerElement.querySelector('.TEAMclsPhoneAlert');
//-----------------------------------------------------------
       this.input.addEventListener('input',
this.ValidationTrigger.bind(this));

       this.input.addEventListener('blur', this.FormatTrigger.bind(this));
   }

   ValidationTrigger()
   {
       this.PhoneNumber = this.input.value;
       this.PhoneValidator(this.PhoneNumber);
   }

   FormatTrigger()
   {
       if (!this.isValid) return;
       this.input.value = this.FormatPhone(this.input.value);
   }
//-------------------------------------------------------------
   PhoneValidator(numberToTest)
   {
       this.isValid = this.PhoneValidationTest(numberToTest);
       const showValidation = numberToTest !== "" && !this.isValid;
       this.ValidationDisplay(showValidation);
   }


   PhoneValidationTest(PhoneNumber)
   {
       return
/(^\D*\d{3}\D*\d{3}\D*\d{4}\D*$|^\d{4}$|^$)/.test(PhoneNumber);
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

   FormatPhone(PhoneNumber) 
   {
       if (!PhoneNumber | PhoneNumber === '')
       {   
           this.Reset();
           return null;
       }
       const PhoneFormat = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
       this.PhoneNumber = PhoneNumber.replace(PhoneFormat, '$1$2$3');
       this.PhoneNumberFormatted = PhoneNumber.replace(PhoneFormat, '($1) $2-$3');
       this.input.value = this.PhoneNumberFormatted;
       this.PhoneValidator(this.input.value);
       return this.PhoneNumberFormatted;
   }

   Reset()
   {
       this.input.value = '';
       this.PhoneNumber = '';
       this.PhoneNumberFormatted = '';
       this.isValid = true;
       this.ValidationDisplay();
   }
}   