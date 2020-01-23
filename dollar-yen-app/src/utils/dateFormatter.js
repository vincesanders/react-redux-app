export default date => {
    //YYYY-MM-DD
    const dateSeparated = date.split('-')
    let year = dateSeparated[0];
    let month = dateSeparated[1];
    let day = dateSeparated[2];

    switch (month) {
        case '01': month = 'January';
        case '02': month = 'February';
        case '03': month = 'March';
        case '04': month = 'April';
        case '05': month = 'May';
        case '06': month = 'June';
        case '07': month = 'July';
        case '08': month = 'August';
        case '09': month = 'September';
        case '10': month = 'October';
        case '11': month = 'November';
        case '12': month = 'December';
    }

    return `${month} ${day}, ${year}`;
}