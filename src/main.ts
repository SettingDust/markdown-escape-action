import * as core from '@actions/core'
import escape from 'markdown-escape'

async function run(): Promise<void> {
  try {
    core.setOutput('text', escape(core.getInput('text')))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
