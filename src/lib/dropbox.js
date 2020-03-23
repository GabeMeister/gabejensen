const getJournalContents = callback => {
    fetch("https://content.dropboxapi.com/2/files/download", {
        "method": "POST",
        "headers": {
            "authorization": `Bearer ${process.env.REACT_APP_DROPBOX_ACCESS_TOKEN}`,
            "dropbox-api-arg": "{\"path\": \"/jrnl/journal.txt\"}"
        }
    })
        .then(resp => resp.text())
        .then(text => {
            // Split on newlines get rid of blank lines, and get it in reverse order
            let arr = text
                .split('\n')
                .filter(line => line)
                .map(line => {
                    let tokens = line.split(' ');

                    let date = new Date(`${tokens[0]} ${tokens[1]}`);
                    let timeStr = date.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    });
                    let dayStr = date.toLocaleDateString(undefined, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    });

                    let text = tokens.slice(2).join(' ');
                    text = text.charAt(0).toUpperCase() + text.slice(1);

                    return {
                        time: timeStr,
                        date: dayStr,
                        text: text
                    };
                })
                .reverse();

            callback(arr);
        });
}

export default getJournalContents;