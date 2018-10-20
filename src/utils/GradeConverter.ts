
const UStoEU = (grade) => {
    const gradeDict = {
        'A': 5.0,
        'B+': 4.5,
        'B': 4,
        'C+': 3.5,
        'C': 3,
        'D+': 2.5,
        'D': 2
    };
    return gradeDict[grade];
};

const EUtoUS = (grade) => {
    const gradeDict = {
        5.0: 'A',
        4.5: 'B+',
        4: 'B',
        3.5: 'C+',
        3: 'C',
        2.5: 'D+',
        2: 'D'
    };
    return gradeDict[grade];
};

const gradeConverter = (grade: string | number) => {
    if (typeof grade === 'string') {
        return UStoEU(grade);
    } else if (typeof grade === 'number') {
        return EUtoUS(grade);
    } else {
        return null;
    }
};

export default gradeConverter;
