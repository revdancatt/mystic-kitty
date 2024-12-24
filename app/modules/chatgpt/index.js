import fs from 'fs'
import axios from 'axios'
import { encode } from 'gpt-3-encoder'

export const gptCompletion = async (messages, model = global.data.openai.CHAT_MODEL, saveLog = false, saveOutput = true) => {
  let response = null
  // Make sure we have somewhere to store the call report
  if (!global.callReport) global.callReport = {}
  if (!global.callReport[model]) {
    global.callReport[model] = {
      success: 0,
      fail: 0
    }
  }

  // Attempt to call the model
  try {
    const query = {
      model,
      messages
    }
    response = await axios.post('https://api.openai.com/v1/chat/completions',
      query,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${global.data.openai.API_KEY}`
        },
        timeout: 300000,
        request_timeout: 600
      })
    const text = response.data.choices[0].message.content.trim().replace(/[\r\n]+/g, '\n').replace(/[\t ]+/g, ' ')

    return {
      text,
      model
    }
  } catch (err) {
    return null
  }
}

export const getTokenCount = async (messages) => {
  const count = await encode(JSON.stringify(messages)).length
  return count
}

// Costs per million tokens
// Load in the token costs from the data/token_costs.json file
const costs = JSON.parse(fs.readFileSync('data/token_costs.json', 'utf8'))

// Work out the cost of the tokens that we are sending to gpt
// based on 'gpt-4' costs
export const getTokenInputCost = async (messages, version = global.data.openai.CHAT_MODEL) => {
  // If the model is not in the costs object, return 0
  if (!costs[version]) return 0
  const tokenCost = await getTokenCount(messages) / 1000000 * costs[version].input
  // We want to format this as a dollar amount
  return `${tokenCost.toFixed(2)}`
}

export const getTokenOutputCost = async (messages, version = global.data.openai.CHAT_MODEL) => {
  // If the model is not in the costs object, return 0
  if (!costs[version]) return 0
  const tokenCost = await getTokenCount(messages) / 1000000 * costs[version].output
  // We want to format this as a dollar amount
  return `${tokenCost.toFixed(2)}`
}
