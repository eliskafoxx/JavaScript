let i
let x

for (i = 1; i <= 10; i++) {
    //console.log(i)

    if ((((((i === 1) || (i === 2)) || (i === 4)) || (i === 5)) || (i === 7)) || (i === 8)) {
        console.log(i + " little, ")
    }

    else if (((i === 3) || (i === 6)) || (i === 9))
        console.log(i + " little Indians, ")

    else if (i === 10) {
        console.log(i + " little Indian boys")
    }
}

for (x = 10; x >= 1; x--) {
    //console.log(x)

    if ((((((x === 10) || (x === 9)) || (x === 7)) || (x === 6)) || (x === 4)) || (x === 3)) {
        console.log(x + " little ")
    }

    else if ((((x === 7)) || (x === 5)) || (x === 2)) {
        console.log(x + " little Indians ")
    }

    else if (x === 1) {
        console.log(x + " little Indian boy")
    }

}