class clsPhone
{
	constructor(target)
	{
		this.target = target;
		this.isValid;
		this.phoneNumber = this.target.value;

		//Triggers for the validation
		this.target.addEventListener('input', this.validationTrigger.bind(this));
		this.target.addEventListener('blur', this.formatTrigger.bind(this));

		//Removal of messages currently in the HTML and addition of new message.
		//this.removeOldTooltips();
		this.placeDefaultTooltips();
	}	

	validationTrigger()
	{
		this.phoneNumber = this.target.value;
		this.phoneValidator(this.phoneNumber);
	}

	formatTrigger()
	{
		if (!this.isValid) return;
		this.target.value = this.formatPhone(this.target.value);
	}

	phoneValidator(numberToValidate)
	{
		if (numberToValidate === "") 
			{
				this.target.classList.remove('is-valid', 'is-invalid');
				return;
			}
		this.isValid = this.phoneValidationTest(numberToValidate);
		this.validationToggle(this.isValid);
	}

	phoneValidationTest(numbertoTest)
	{
		return /(^\D*\d{3}\D*\d{3}\D*\d{4}\D*$|^\d{4}$|^$)/.test(numbertoTest);
	}

	validationToggle(showIfTrue)
	{
		if(showIfTrue)
		{
			this.target.classList.remove('is-invalid');
			this.target.classList.add('is-valid');
			return;
		}
		this.target.classList.remove('is-valid');
		this.target.classList.add('is-invalid');
	}

	formatPhone(numberToFormat)
	{
		if (!numberToFormat || numberToFormat === '')
		{
			return null;
		}
		const phoneFormat = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
		this.phoneNumber = numberToFormat.replace(phoneFormat, '$1$2$3');
		this.phoneNumberFormatted = numberToFormat.replace(phoneFormat, '($1) $2-$3');
		this.target.value = this.phoneNumberFormatted;
		this.phoneValidator(this.target.value);
		return this.phoneNumberFormatted;
	}

	placeDefaultTooltips()
	{
		let invalidTooltip = document.createElement('div');
		invalidTooltip.classList.add('invalid-tooltip');
		invalidTooltip.innerHTML = "Must be a 10 digit phone number or 4 digit extension";
		this.target.parentNode.appendChild(invalidTooltip);

		//let validTooltip = document.createElement('div');
		//validTooltip.classList.add('valid-tooltip');
		//validTooltip.innerHTML = "Looks Good!";
		//this.target.parentNode.appendChild(validTooltip);
	}
}