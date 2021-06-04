import * as core from '@actions/core'
import escape from 'markdown-escape'

async function run(): Promise<void> {
  try {
    const inputs = core.getInput('text').split('⭐')
    for (let i = 0; i < inputs.length; i++) {
      core.setOutput(i.toString(), escape(inputs[i]))
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
