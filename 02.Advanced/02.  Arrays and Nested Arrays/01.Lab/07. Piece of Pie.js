function solve(...params){
    let result;
    let start = params[0].indexOf(params[1]);
    let end  = params[0].indexOf(params[2]);
    result = params[0].slice(start, end + 1);
    return result;
}

// console.log(solve(['Pumpkin Pie',
//  'Key Lime Pie',
//  'Cherry Pie',
//  'Lemon Meringue Pie',
//  'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie'));

// console.log(solve(['Apple Crisp',
//  'Mississippi Mud Pie',
//  'Pot Pie',
//  'Steak and Cheese Pie',
//  'Butter Chicken Pie',
//  'Smoked Fish Pie'],
// 'Pot Pie',
// 'Smoked Fish Pie'))