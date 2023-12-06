interface MajorCredits {
    credit: number;
    brand: "Major";
}
interface MinorCredits {
    credit: number;
    brand: "Minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return subject1.credit + subject2.credit;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return subject1.credit + subject2.credit;
}
