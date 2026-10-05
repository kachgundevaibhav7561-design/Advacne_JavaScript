export let message = "es6 module";

export function users(name)
{
    console.log(`Hello ${name}`);

}

export class test{
    constructor(){
        console.log("Iam usin module Constructor calling");
    }
}
