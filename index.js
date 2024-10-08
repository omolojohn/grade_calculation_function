function calculateGrade(marks) {
    // If marks are greater than 79, return 'A'
    if (marks > 79) {
        return 'A';
    // If marks are between 60 and 79 (including 79), return 'B'
    } else if (marks >= 60) {
        return 'B';
    // If marks are between 50 and 59 (including  59), return 'C'
    } else if (marks >= 50) {
        return 'C';
    // If marks are between 40 and 49 (including  49), return 'D'
    } else if (marks >= 40) {
        return 'D';
    // If marks are less than 40, return 'E'
    } else {
        return 'E';
    }
}
// Test cases with console.log
console.log(calculateGrade(90)); // Output: 'A'
console.log(calculateGrade(78)); // Output: 'B'
console.log(calculateGrade(57)); // Output: 'C'
console.log(calculateGrade(49)); // Output: 'D'
console.log(calculateGrade(11)); // Output: 'E'