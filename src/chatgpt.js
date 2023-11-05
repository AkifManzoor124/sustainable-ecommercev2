
const apiKey = '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';

export function getResponseFromChatGPT(message) {
    console.log("hhhhhh")
    console.log(message);
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
        return data.choices[0].text.trim();
    }).catch(error => {
        console.error(error);
    });
}