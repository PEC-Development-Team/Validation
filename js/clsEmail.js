class clsEmail
{
	constructor(target)
	{
		this.target = target;
		this.isValid;
		this.email = this.target.value;

		//Validation Trigger
		this.target.addEventListener('input', this.validationTrigger.bind(this));

		//Addition of default messages.
		this.placeDefaultTooltips();
	}

	validationTrigger()
	{
		this.email = this.target.value;
		this.emailValidator(this.email);
	}

	emailValidator(emailToValidate)
	{
		if (emailToValidate === '' || null)
		{
			this.target.classList.remove('is-valid', 'is-invalid');
			return;
		}
		this.isValid = this.emailValidationTest(emailToValidate);
		this.validationToggle(this.isValid);
	}


	emailValidationTest(email)
    {
    	email = email.toLowerCase();
      return /^[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(airforce.com|mail.mil)$/.test(email);
    }

    validationToggle(showIfTrue)
	{

		this.placeDefaultTooltips();
		if(showIfTrue)
		{
			this.target.classList.remove('is-invalid');
			this.target.classList.add('is-valid');
			return;
		}
		this.target.classList.remove('is-valid');
		this.target.classList.add('is-invalid');
	}

	placeDefaultTooltips()
	{
		const parent = this.target.parentElement;
    	let oldTooltips = [parent.querySelectorAll('.invalid-tooltip')];
     	oldTooltips.push(parent.querySelectorAll('.valid-tooltip'));
     	oldTooltips.forEach(tooltipList => 
     	{
         tooltipList.forEach(tooltip => tooltip.remove());
     	});
		let invalidTooltip = document.createElement('div');
		invalidTooltip.classList.add('invalid-tooltip');
		invalidTooltip.innerHTML = "Valid mail.mil or airforce.com email required.";
		this.target.parentNode.appendChild(invalidTooltip);
	}

}