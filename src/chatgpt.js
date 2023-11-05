
const apiKey = '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';

export function getResponseFromChatGPT(message) {

    return `
    Ingredients: 2/5
    The product does not mention the use of organic ingredients, and it includes a patented formula, which may or may not be eco-friendly.
    Packaging: 2/5
    The package dimensions are provided, but there is no information about the materials used. Without more details, it's unclear whether the packaging is sustainable or recyclable.
    Certifications: 1/5
    The product description does not mention any recognized eco-friendly certifications. It's uncertain whether the product has undergone any certification processes.
    Sustainable Sourcing: 2/5
    There is no information provided regarding the brand's sourcing practices or whether they responsibly and sustainably source their ingredients. Without this information, it's challenging to assess their sustainability efforts.
    Recyclability: 2/5
    While the package dimensions are provided, there is no explicit mention of the packaging being recyclable or if the brand offers any recycling or refill programs. More information is needed to evaluate this aspect.
    Overall Rating: 2/5
    While the package dimensions are provided, there is no explicit mention of the packaging being recyclable or if the brand offers any recycling or refill programs. More information is needed to evaluate this aspect.
    Final Verdict: The product lacks sufficient information to confidently determine its eco-friendliness. It falls short in various categories, including certifications, sustainable sourcing, and recyclability.    
    `


    console.log("hhhhhh")
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