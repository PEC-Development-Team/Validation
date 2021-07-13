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
        this.validationElements = [];
        console.log(this.validationElements);
        this.phones = [];

        this.findElements(this.containerElement);
        this.initializeElements(this.validationElements);
	}

    findElements()
    {
        this.validationElements.push(this.containerElement.querySelectorAll('input.phone'));
        this.validationElements.push(this.containerElement.querySelectorAll('input.EDIPI'));
        console.log(this.validationElements);
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

                // Instanciate Phone Elements
                if (element.classList.contains('phone'))
                {
                    this.phones.push(new clsPhone(element));
                }

                // Instanciate EDIPI Elements

            });

        });
    }

}