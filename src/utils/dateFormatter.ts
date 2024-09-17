export default function formatDate(dateString: string) {
    const date = new Date(dateString);

    // Create a formatter with options for day, month, and year
    const formatter = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    // Format the date
    const formattedDate = formatter.format(date);

    // Add ordinal suffix
    const day = date.getDate();
    const getOrdinalSuffix = (day: number) => {
        if (day > 3 && day < 21) return 'th'; // catch 4th-20th
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return `${formattedDate.replace(/\d+/, day + getOrdinalSuffix(day))}`;
}


