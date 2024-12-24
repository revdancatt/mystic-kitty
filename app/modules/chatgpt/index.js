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
    return {
      text: '',
      model
    }
  }
}

export const getTokenCount = async (messages) => {
  const count = await encode(JSON.stringify(messages)).length
  // console.log('Token count: ', count)
  return count
}

// Work out the cost of the tokens that we are sending to gpt
// based on 'gpt-4' costs
export const getTokenInputCost = async (tokenCount, model = global.data.openai.CHAT_MODEL) => {
  // Costs per million tokens
  // Load in the token costs from the data/token_costs.json file
  const costs = JSON.parse(fs.readFileSync('data/token_costs.json', 'utf8'))

  // If the model is not in the costs object, return 0
  // If the model is not in the costs object, return 0
  if (!costs[model]) return 0

  const tokenCost = tokenCount / 1000000 * costs[model].input
  let tokenCostFixed = tokenCost.toFixed(2)
  if (tokenCostFixed === '0.00') tokenCostFixed = '0.01'
  // We want to format this as a dollar amount
  return `$${tokenCostFixed}`
}

export const getTokenOutputCost = async (tokenCount, model = global.data.openai.CHAT_MODEL) => {
  // Costs per million tokens
  // Load in the token costs from the data/token_costs.json file
  const costs = JSON.parse(fs.readFileSync('data/token_costs.json', 'utf8'))

  // If the model is not in the costs object, return 0
  if (!costs[model]) return 0

  const tokenCost = tokenCount / 1000000 * costs[model].output
  let tokenCostFixed = tokenCost.toFixed(2)
  if (tokenCostFixed === '0.00') tokenCostFixed = '0.01'
  // We want to format this as a dollar amount
  return `$${tokenCostFixed}`
}
