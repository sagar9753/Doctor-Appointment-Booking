const convertTime = (time) => {
    const timeParts = time.split(':')
    let hour = parseInt(timeParts[0]);

    let amOrpm = 'am';

    if (hour >= 12) {
        amOrpm = 'pm'
        if (hour > 12)
            hour -= 12
    }

    return hour.toString().padStart(2, '0') + ":" + timeParts[1].padStart(2, '0') + " " + amOrpm
}
export default convertTime