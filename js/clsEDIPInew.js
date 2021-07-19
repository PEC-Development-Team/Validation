class clsEDIPI
{
	constructor(target)
	{
		this.target = target;
		this.isValid;
		this.EDIPI = this.target.value;

		//Validation Trigger
		this.target.addEventListener('input', this.validationTrigger.bind(this));

		//Addition of default messages.
		this.placeDefaultTooltips();
	}

	validationTrigger()
	{
		this.EDIPI = this.target.value;
		this.EDIPIValidator(this.EDIPI);
	}

	EDIPIValidator(EDIPItoValidate)
	{
		if (EDIPItoValidate === '' || null)
		{
			this.target.classList.remove('is-valid', 'is-invalid');
			return;
		}
		this.isValid = this.EDIPIValidationTest(EDIPItoValidate);
		this.validationToggle(this.isValid);
	}


	EDIPIValidationTest(EDIPI)
    {
       return /^(\d(?!1{7}|2{7}|3{7}|4{7}|5{7}|6{7}|7{7}|8{7}|9{7}|0{7}|012345|123456|234567|345678|456789|567890|098765|987654|876543|765432|654321|543210)){10}$/.test(EDIPI);
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
		invalidTooltip.innerHTML = "Must be a valid EDIPI";
		this.target.parentNode.appendChild(invalidTooltip);
	}

}