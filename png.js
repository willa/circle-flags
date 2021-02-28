const {
  promises: { readdir },
} = require('fs')
const svgexport = require('svgexport')

const main = async () => {
  const flags = await readdir('./flags')

  svgexport.render(
    flags
      .filter((flag) => flag.includes('.svg'))
      .map((flag) => ({
        input: `./flags/${flag}`,
        output: [`./png/${flag.replace('.svg', '.png')} 200:200`],
      }))
  )
}

main()
