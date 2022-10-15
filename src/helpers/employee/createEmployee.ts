interface Valid {
    valid: boolean;
    error: string;
}
interface isFormValid {
    valid: boolean;
    errors: string[];
}
/**
 * 
 * @param formData The data to validate from createEmployee form
 * @returns 
 */
export function isFormValid(formData: any):isFormValid{
    const isValid: Valid[] = []
    Object.keys(formData).forEach((key) => {
        switch (typeof formData[key]) {
            case "string":
                const v: Valid = formData[key] !== null && formData[key].length >= 2 ? { valid: true, error: "" } : { valid: false, error: `${translateKeyForm(key)} must be at least 2 characters long` }
                isValid.push(v)
                break

            case "object":
                //could be a recursive but I think it is not necessary
                if (formData[key] === null) {
                    isValid.push({ valid: false, error: `${translateKeyForm(key)} is required` })
                    return
                }
                Object.keys(formData[key]).forEach((objKey: string) => {
                    const v: Valid = formData[key][objKey] !== null && formData[key][objKey].length >= 2 ? { valid: true, error: "" } : { valid: false, error: `${translateKeyForm(objKey)} must be at least 2 characters long` }
                    isValid.push(v)
                })
                break

            default: break
        }
    })
    return { valid: isValid.findIndex((v) => !v.valid) === -1, errors: isValid.filter((v) => !v.valid).map((v) => v.error) }
}

/**
 * 
 * @param key The key to translate
 * @returns The key translated to an human readable string
 */
function translateKeyForm(key: string) {
    const keys = [{ name: "First Name", key: "firstName" }, { name: "Last Name", key: "lastName" }, { name: "Date of birth", key: "birthDay" }, { name: "Start date", key: "startDate" }, { name: "Street", key: "street" }, { name: "City", key: "city" }, { name: "State", key: "state" }, { name: "Zip code", key: "zip" }, { name: "Department", key: "department" }]
    return keys.find((k) => k.key === key)?.name
}