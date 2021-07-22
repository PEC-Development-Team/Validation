class clsPIV
{
	constructor(target)
	{
		this.target = target;
		this.isValid;
		this.PIV = this.target.value;


		//Validation Trigger
		this.target.addEventListener('input', this.validationTrigger.bind(this));

		//Addition of default messages.
		this.placeDefaultTooltips();
	}

	validationTrigger()
	{
		this.PIV = this.target;
		this.PIVvalidator(this.PIV);
	}

	PIVvalidator(PIVtoValidate)
	{
		if (PIVtoValidate === '' || null)
		{
			this.target.classList.remove('is-valid', 'is-invalid');
			return;
		}
		this.isValid = this.PIVvalidationTest(PIVtoValidate);
		this.validationToggle(this.isValid);
	}

	PIVvalidationTest(PIV)
	{
		
	}
}