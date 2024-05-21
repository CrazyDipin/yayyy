# Add Hero Block
pyxl_ai__jit_plugin.AddHeroBlock(
    hero={
        "title": "Welcome, My Love",
        "subtitle": "Every moment with you is a treasure",
        "button1": "Discover",
        "button1Link": "#features",
        "imagePrompt": "romantic couple"
    },
    pageUrl="/",
    websiteId=website_id
)

# Add Features Block with "I love you more" button
pyxl_ai__jit_plugin.AddFeaturesBlock(
    features={
        "imagePrompt": "heart",
        "title": "Our Love Story",
        "points": [
            {"title": "The Beginning", "description": "It all started with a smile."},
            {"title": "Adventures", "description": "Every adventure with you is unforgettable."},
            {"title": "I Love You More", "description": "No matter how many times you click, I will always love you more."}
        ]
    },
    pageUrl="/",
    websiteId=website_id
)

# Add Contact Form
pyxl_ai__jit_plugin.AddFormBlock(
    form={
        "title": "Send a Love Note",
        "inputs": [
            {"inputName": "Name", "inputType": "text"},
            {"inputName": "Message", "inputType": "textarea"},
            {"inputName": "Email", "inputType": "email"}
        ],
        "sendButtonName": "Send"
    },
    pageUrl="/",
    websiteId=website_id
)
