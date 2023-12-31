export const loginBody = {email: "", password: ""}

export function validateLoginBody(register: typeof loginBody): String | typeof loginBody{
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if(register.email == '') return 'Email is Empty'
    if(register.password == '') return 'Password is Empty'
    if(!expression.test(register.email)) return 'Email is incorrect'
    return register
}