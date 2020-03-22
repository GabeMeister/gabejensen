const getJournalContents = callback => {
    console.log(process.env.REACT_APP_DROPBOX_ACCESS_TOKEN);

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
                .map(line => ({
                    text: line
                }))
                .reverse();

            callback(arr);
        });
}

export default getJournalContents;