function timeAgo(date) {
    const now = new Date();
    const diffInSeconds = Math.round((now - new Date(date)) / 1000);

    if (diffInSeconds < 10) {
        return 'just now';
    }

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 }
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
        }
    }

    return `${diffInSeconds} seconds ago`;
}

const element = document.getElementById('date-post').innerHTML;
// console.log(timeAgo(element));

document.getElementById('date-post-ago').innerHTML = '<i class="fa fa-clock-o"></i> ' + timeAgo(element);