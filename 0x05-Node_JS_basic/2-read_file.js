function countStudents(path) {
    const fileSystem = require('fs');

    const readf = fileSystem.readFileSync(path, 'utf-8');
    if (readf == null) {
        console.log('Cannot load the database');
    } else {
        let countSE = 0
        let countCS = 0
        lineCount = readf.split('\n');
        const txt = /SWE/
        const ttxt = /CS/
        const lineNum = lineCount.length
        for (let i = 0; i < lineNum; i++) {
            if (txt.test(lineCount[i])) {
                countSE++
            }
            if (ttxt.test(lineCount[i])) {
                countCS++
                }
        }
        console.log(`Number of students: ${readf.length}, ${lineNum}`);
        const user = lineCount
        console.log(`Number of students: ${countCS}, CS: ${user}`);
        console.log(`Number of students: SE: ${countSE}`);
        }
}
module.exports = countStudents
