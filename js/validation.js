class clsValidator
{
	constructor(options)
	{
		if (!options || typeof options === undefined) 
		{
            throw "Options object must be defined, with at least options.containerElement.";
        }
        if (options.containerElement === undefined || !options.containerElement) 
        {
            throw "You must specify a container element in the clsValidator options object!";
        }

        this.options = options;
        this.containerElement = this.options.containerElement;
        this.submitBtn = this.options.submitBtn;
        this.validationElements = [];
        console.log(this.validationElements);
        this.requiredList = [];
        this.requiredElement;
        this.phones = [];
        this.EDIPIS = [];
        this.submitBtn = document.querySelector('.submitBtn');


        this.findElements(this.containerElement);
        this.initializeElements(this.validationElements);
	}

    findElements()
    {
        this.validationElements.push(this.containerElement.querySelectorAll('input.required'));
        this.validationElements.push(this.containerElement.querySelectorAll('input.phone'));
        this.validationElements.push(this.containerElement.querySelectorAll('input.EDIPI'));
    }

    initializeElements(validationList)
    {
        validationList.forEach(List => 
        {
            List.forEach(element => {

                // Remove old tooltips
                const parent = element.parentElement;
                let oldTooltips = [parent.querySelectorAll('.invalid-tooltip')];
                oldTooltips.push(parent.querySelectorAll('.valid-tooltip'));
                oldTooltips.forEach(tooltipList => 
                {
                    tooltipList.forEach(tooltip => tooltip.remove());
                });

                // Remove prior validation classes
                element.classList.remove("is-valid", "is-invalid");

                // Add required elements to list
                if (element.classList.contains('required'))
                {
                    this.requiredList.push(element);
                }

                // Instanciate Required Element
                this.requiredElement = new clsRequired(this.requiredList, this.submitBtn);

                // Instanciate Phone Elements
                if (element.classList.contains('phone'))
                {
                    this.phones.push(new clsPhone(element));
                }

                // Instanciate EDIPI Elements
                if (element.classList.contains('EDIPI'))
                {
                    this.EDIPIS.push(new clsEDIPI(element));
                }
            });

        });
    }

}