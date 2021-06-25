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
	}
}