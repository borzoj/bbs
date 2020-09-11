function bracketMatches(opening, closing) {
    if (opening == '(' && closing == ')') {
        return true
    }
    if (opening == '{' && closing == '}') {
        return true
    }
    if (opening == '[' && closing == ']') {
        return true
    }
    return false
}

function balanceBrackets(string) {
    let stack = []
    const chars = string.split("")
    for (var i = 0; i < chars.length; i++) {
        const currentChar = chars[i]
        if (currentChar=='{' || currentChar=='[' || currentChar=='(') {
            stack.push(currentChar)
        } else if (currentChar=='}' || currentChar==']' || currentChar==')') {
            const topChar = stack.pop();
            if (!bracketMatches(topChar, currentChar)) {
                return false;
            }
        } 
    }
    return stack.length == 0;
}

module.exports = balanceBrackets;
