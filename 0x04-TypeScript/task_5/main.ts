interface MajorCredits {
    credit: number;
    brand: "Major";
}
interface MinorCredits {
    credit: number;
    brand: "Minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number{
    if (subject1.brand == 'Major' && subject2.brand == 'Major') {
        return subject1.credit + subject2.credit;
    }
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number{
    if (subject1.brand == 'Minor' && subject2.brand == 'Minor') {
        return subject1.credit + subject2.credit;
    }
}
