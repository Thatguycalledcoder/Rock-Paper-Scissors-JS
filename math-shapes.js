function square_diagonal(x) {
    let result = x * Math.sqrt(2)
    console.log(result);
}

square_diagonal(9);

function triangle_area(x, y, z) {
    let sp = (x+y+z)/2
    let result = Math.sqrt(sp * (sp - x) * (sp - y) * (sp - z))
    console.log(result);
}

triangle_area(5,6,7);

const pi = 3.14

function circumference(r) {
    return 2 * pi * r;
}

function circle_sa(r) {
    return pi * r**2;
}

function circle_properties(r) {
    let circumference = circumference(r),
    surface_area = circle_sa(r);
    console.log(`The circumference and surface area are ${circumference} and ${surface_area} respectively.`);
}

circle_properties(4);

function bigger_number(a, b) {
    if (a > b) 
        console.log(a);
    else
        console.log(b);
}

bigger_number(8, 15);

function is_even(x) {
    if (x % 2 == 0)
        console.log(`${x} is an even number`);
    else
        console.log(`${x} is an odd number`);
}

is_even(6)