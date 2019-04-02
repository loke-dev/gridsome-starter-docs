const fs = require('fs')
const slugify = require('@sindresorhus/slugify')

const title = process.argv[2]
const docsDir = './content/docs'

if (!title) {
  console.log('❌  Please specify a page title.')
  return
}

const basename = `${slugify(title)}`

if (fs.existsSync(`${docsDir}/${basename}.md`)) {
  console.log(`❌  Error: ${docsDir}/${basename}.md already exists.`)
  return
}

const contents = `---
title: "${title}"
description: ""
---
`

fs.writeFile(`${docsDir}/${basename}.md`, contents, () => console.log(`✔ Created ${docsDir}/${basename}.md`))
