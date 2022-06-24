import * as core from '@actions/core'
import * as formats from 'telegram-format'

async function run(): Promise<void> {
  try {
    const inputs = core.getInput('text').split('\n')
    const type =
      (core.getInput('type') as 'html' | 'markdown' | 'markdownv2') ??
      'markdownv2'
    for (let i = 0; i < inputs.length; i++)
      core.setOutput(i.toString(), formats[type].escape(inputs[i]))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
