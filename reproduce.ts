/** @format */

type PrdFormFieldsParamDefault = string | number | boolean | unknown[] | null;
type PrdFormFields<T> = {
	name: string;
	details: { [key: string]: T | PrdFormFields<T> | PrdFormFields<T>[] };
};

type PrdDataObject<
	T =
		| PrdFormFieldsParamDefault
		| Record<string, PrdFormFieldsParamDefault>
		| Record<string, PrdFormFieldsParamDefault>[],
> = {
	type: string | null;
	title: string | null;
	chosenLanguage: string | null;
	formFields: PrdFormFields<T>[] | null;
};

type FormFieldName =
	| "product details"
	| "objectives"
	| "stakeholders"
	| "functional requirements"
	| "non-functional requirements"
	| "assumptions and constraints"
	| "dependencies"
	| "acceptance criteria"
	| "risk analysis"
	| "priority effort"
	| "version history";

const prdDetails: PrdDataObject = {
	type: null,
	title: null,
	chosenLanguage: null,
	formFields: null,
};

if (prdDetails.formFields) {
	const internalFormFields = prdDetails.formFields.reduce(
		(fieldsObject, field) => {
			const name = field.name as FormFieldName;
			fieldsObject[name] = field.name;
			return fieldsObject;
		},
		{} as { [key in FormFieldName]: FormFieldName }
	);
}
