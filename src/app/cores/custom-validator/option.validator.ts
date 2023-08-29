import { AbstractControl } from "@angular/forms";

export function OptionValidator(keys: string[]) {
    return (group: AbstractControl) => {
        const checkValid = keys.some((key) => group.value[key])
        console.log(checkValid,keys);
        
        if(!checkValid) group.get(keys[0])?.setErrors({ optionError: "You need to add at least on data" })
        else group.get(keys[0])?.setErrors(null)
        return null
    }
}