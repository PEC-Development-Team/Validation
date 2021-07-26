class clsPIV
{
	constructor(target, edipiElement)
	{
		this.target = target;
		this.isValid;
		this.PIV = this.target.value;
		this.edipiElement = edipiElement;
		this.EDIPI = edipiElement.value;
		console.log(edipiElement);

		//Validation Trigger
		this.target.addEventListener('input', this.validationTrigger.bind(this));

		//Addition of default messages.
		this.placeDefaultTooltips();
	}

	validationTrigger()
	{
		this.PIV = this.target.value;
		this.pivValidator(this.PIV);
	}

	pivValidator(pivToValidate)
	{
		if (pivToValidate === '' || null)
		{
			this.target.classList.remove('is-valid', 'is-invalid');
			return;
		}
		this.EDIPI = this.edipiElement.value;
		this.isValid = this.PIVvalidationTest(pivToValidate);
		this.validationToggle(this.isValid);
	}

	PIVvalidationTest(PIV)
	{
		let regex = new RegExp(`${this.EDIPI}`);
		console.log(regex);
		if (regex.test(PIV))
		{
			return /^\d{16}$/.test(PIV);
		}
		return false;
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
		invalidTooltip.innerHTML = "Must be 16 digits and include EDIPI.";
		this.target.parentNode.appendChild(invalidTooltip);
	}
}