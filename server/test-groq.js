const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function testModel(modelId) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: "user", content: "hello" }],
            model: modelId,
        });
        console.log(`✅ Success with model: ${modelId}`);
    } catch (error) {
        console.log(`❌ Failed with model: ${modelId} - Error: ${error.status} ${error.message}`);
    }
}

async function run() {
    await testModel("openai/gpt-oss-120b");
    await testModel("qwen/qwen3.6-27b");
}

run();
