
const apiKey = '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';

export function getResponseFromChatGPT(message) {
    const url = "https://api.openai.com/v1/chat/completions";
    const body = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": `${message}`
            }
        ]
    };
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
    };
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("ChatGPT API request failed.");
        }
    }).then(data => {
        console.log(data);
        return data.choices[0];
    }).catch(error => {
        console.error(error);
    });
}