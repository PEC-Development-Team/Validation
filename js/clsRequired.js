class clsRequired
{
	constructor(targets, submitBtn)
	{
		this.targets = targets;
		this.isValid = true;
		this.submitBtn = submitBtn;
		//Validation Trigger
		this.submitBtn.addEventListener('click', this.validationTrigger.bind(this));
	}

	validationTrigger()
	{
		this.isValid = true;
		this.targets.forEach(target => 
			{
				if (target.value === '' || null)
				{
					console.log(target.value);
					this.placeRequiredTooltip(target);
					target.classList.remove('is-valid');
					target.classList.add('is-invalid');
					this.isValid = false;
					return;
				}
				target.classList.remove('is-invalid');
				target.classList.add('is-valid');
			});
	}

	// validationTriggerOff(target)
	// {

	// }

	placeRequiredTooltip(target)
	{
		this.removeOldTooltip(target);
		let invalidTooltip = document.createElement('div');
		invalidTooltip.classList.add('invalid-tooltip');
		invalidTooltip.innerHTML = "Required";
		target.parentNode.appendChild(invalidTooltip);
	}

	removeOldTooltip(element)
	{
		const parent = element.parentElement;
        let oldTooltips = [parent.querySelectorAll('.invalid-tooltip')];
        oldTooltips.push(parent.querySelectorAll('.valid-tooltip'));
        oldTooltips.forEach(tooltipList => 
        {
            tooltipList.forEach(tooltip => tooltip.remove());
        });
	}
}