function calculate(no1, no2, op) {
    let value = null
    switch(op) {
        case "+": {
            value = no1 + no2
            break
        }
        case "-": {
            value = no1 - no2
            break
        }
    }
    return value
}
