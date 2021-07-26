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

        this.requiredElement;
        this.requiredList = [];

        this.edipiList = [];
        this.edipiElement;

        this.pivList = [];

        this.phonesList = [];
        this.emailsList = [];

        this.findElements(this.containerElement);
        this.initializeElements(this.validationElements);
	}

    findElements()
    {
        this.validationElements.push(this.containerElement.querySelectorAll('input.required'));
        this.validationElements.push(this.containerElement.querySelectorAll('input.EDIPI'));
        this.validationElements.push(this.containerElement.querySelectorAll('input.PIV'));
        this.validationElements.push(this.containerElement.querySelectorAll('input.phone'));
        this.validationElements.push(this.containerElement.querySelectorAll('input.email'));
    }

    initializeElements(validationList)
    {
        console.log(validationList);
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
                    this.phonesList.push(new clsPhone(element));
                }

                // Instanciate EDIPI Elements
                if (element.classList.contains('EDIPI'))
                {
                    this.edipiList.push(new clsEDIPI(element));
                    this.edipiElement = element;
                }

                if (element.classList.contains('PIV'))
                {
                    this.pivList.push(new clsPIV(element, this.edipiElement));
                }

                if (element.classList.contains('email'))
                {
                    this.emailsList.push(new clsEmail(element));
                }
            });

        });
    }

}