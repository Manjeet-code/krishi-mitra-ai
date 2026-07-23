export const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'https://krishi-mitra-ai-backend.onrender.com';

export const APP = {

    name: "KrishiMitra AI",

    tagline: "Kisanon Ka Sacha Sathi",

    description:
        "AI Powered Smart Agriculture Assistant for Indian Farmers.",

    stats: [

        {
            number: "50K+",
            label: "Farmers"
        },

        {
            number: "25+",
            label: "AI Features"
        },

        {
            number: "98%",
            label: "Accuracy"
        },

        {
            number: "24/7",
            label: "Support"
        }

    ]

}