const helper = require('./utils/helper_functions');

/***************************/
/**** Helper functions *****/
/***************************/

function createPassports() {
  const input = helper.readInput('day4');
  const passports = input.split("\n\n");
  for (i in passports) passports[i]=passports[i].replace(/\n/g, " ");
  return passports
}

function isValidBirthYear(filed_value) {
  let year = parseInt(filed_value);
  if (year < 1920 || year > 2002) return false;
  return true;
}

function isValidIssueYear(filed_value) {
  let year = parseInt(filed_value);
  if (year < 2010 || year > 2020) return false;
  return true;
}

function isValidExpirationYear(filed_value) {
  let year = parseInt(filed_value);
  if (year < 2020 || year > 2030) return false;
  return true;
}

function isValidHight(filed_value) {
  let hight = filed_value;
  if (hight.includes("cm")) {
    hight = parseInt(hight.replace(/cm/, ""));
    if (hight < 150 || hight > 193) return false;
  } else if (hight.includes("in")) {
    hight = parseInt(hight.replace(/in/, ""))
    if (hight < 59 || hight > 76) return false;
  } else return false;
  return true;
}

function isValidHairColor(filed_value) {
  let hair_color = filed_value;
  if (!hair_color.includes("#")) return false;
  hair_color = hair_color.replace(/#/g, "");
  if (hair_color.length !== 6) return false;
  if (!/[^a-z0-9]*$/.test(hair_color)) return false;
  return true;
}

function isValidEyeColor(filed_value) {
  let valid_ecl = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  if (!valid_ecl.includes(filed_value)) return false;
  return true;
}

function isValidPassportId(filed_value) {
  let passport_id = filed_value;
  if (passport_id.length !== 9) return false;
  if (!/[0-9]*$/.test(passport_id)) return false;
  return true;
}

function isValidPassport(passportArray) {
  for (field of passportArray) {
    let filed_id=field.split(":")[0]
    let filed_value=field.split(":")[1]
    if (
      filed_id === "byr" && isValidBirthYear(filed_value) == false ||
      filed_id === "iyr" && isValidIssueYear(filed_value) == false || 
      filed_id === "eyr" && isValidExpirationYear(filed_value) == false ||
      filed_id === "hgt" && isValidHight(filed_value) == false ||
      filed_id === "hcl" && isValidHairColor(filed_value) == false ||
      filed_id === "ecl" && isValidEyeColor(filed_value) == false ||
      filed_id === "pid" && isValidPassportId(filed_value) == false
    ) return false;
  }
  return true
}

/***************************/
/* End of helper functions */
/***************************/

function part1(passports) {
  let sum = 0;
  for (passport of passports) {
    let passportArray=passport.split(" ");
    if (passportArray.length === 8 || passportArray.length === 7 && !passport.includes("cid")) sum++
  }
  return sum
}

function part2(passports) {
  let sum = 0;
  for (passport of passports) {
    let passportArray = passport.split(" ");
    if (passportArray.length === 8 || passportArray.length === 7 && !passport.includes("cid")) {
      if (isValidPassport(passportArray)) sum++
    }
  }
  return sum
}

const passports=createPassports();

const part1_result = part1(passports);
const part2_result = part2(passports);

console.log("Day 4:");
console.log("-> Part 1:", part1_result);
console.log("-> Part 2:", part2_result);
