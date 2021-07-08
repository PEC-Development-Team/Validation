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
        this.validationElements = this.containerElement.querySelectorAll('input.phone');
        this.phoneCount = 0;
        this.phones = [];

        this.initializeElements(this.validationElements);

        //this.findElements(this.containerElement);
        //this.validate(this.validationElements);
	}

    // findElements(targetElement)
    // {
    //     this.validationElements = targetElement.querySelectorAll('input.phone');
    // }

    initializeElements(elements)
    {
        //elements.forEach(element => element.value = "");
        elements.forEach(element => element.classList.remove("is-valid", "is-invalid"));
        elements.forEach(element => 
        {
            if (element.classList.contains('phone'))
            {
                this.phoneCount += 1;
                this.phones.push(new clsPhone(element));
            }
        });
    }
}
``