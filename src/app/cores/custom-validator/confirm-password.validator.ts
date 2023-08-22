import { AbstractControl, FormGroup } from "@angular/forms";

export function comparePassword(form: FormGroup) {
    if (!form) return null
    return form.value['password'] === form.value['cpassword'] ? null : { error: 'Value is not match' }
}

export function MustMatch(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const control = group.get(controlName);
        const matchingControl = group.get(matchingControlName);

        if (!control || !matchingControl) {
            return null;
        }

        // return if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: "Value is not match" });
        } else {
            matchingControl.setErrors(null);
        }
        return null;
    }
}