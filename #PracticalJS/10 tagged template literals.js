const p1 = "Sakib";
const p2 = "Tamim";

console.log(`We have ${p1} and ${p2} in our cricket team.`);

let modifier = function(string, ...agrs) { //...agrs = *args
    console.log(string);
    console.log(agrs);

    result = "";
    for (part in string) {
        result += string[part] += (agrs[part] !== undefined ? ("Mr. " + agrs[part]) : "");
    }

    return result;
}

console.log(modifier`We have ${p1} and ${p2} in our cricket team.`);