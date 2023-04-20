#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Michael Kohler'),
  tagline: chalk.white('Mozilla Rep, Open Source Enthusiast, Software Engineer'),
  work: chalk.white('Senior Engineer at Klarna Bank AB'),
  mastodon: chalk.blueBright('@mkohler@mkohler.dev'),
  twitter: chalk.blueBright('https://twitter.com/KohlerSolutions'),
  matrix: chalk.blueBright('@mkohler@mkohler.dev'),
  github: chalk.blueBright('https://github.com/MichaelKohler'),
  web: chalk.blueBright('https://mkohler.dev'),
  other: chalk.white('mkohler, cyphix0'),
  npx: chalk.white('npx michaelkohler'),
  labelWork: chalk.white.bold('      Work:'),
  labelMastodon: chalk.white.bold('  Mastodon:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelMatrix: chalk.white.bold('    Matrix:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelOther: chalk.white.bold('     Alias:'),
  labelCard: chalk.white('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const tagline = `${data.tagline}`
const working = `${data.labelWork}  ${data.work}`
const mastodon = `${data.labelMastodon}  ${data.mastodon}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const matrix = `${data.labelMatrix}  ${data.matrix}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const othering = `${data.labelOther}  ${data.other}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline +
  tagline + newline + newline +
  working + newline +
  mastodon + newline +
  twittering + newline +
  matrix + newline +
  githubing + newline +
  webing + newline +
  othering + newline +
  newline + carding

console.log(chalk.blueBright(boxen(output, options)))
