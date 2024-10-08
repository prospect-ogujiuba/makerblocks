import { store, getContext } from "@wordpress/interactivity"

store("makerblocks/interactivity", {
  actions: {
    toggleSkyColor: () => {
      const context = getContext()
      context.showSkyColor = !context.showSkyColor
    },
    toggleGrassColor: () => {
      const context = getContext()
      context.showGrassColor = !context.showGrassColor
    },
    accessExample: () => {
      const context = getContext()
      alert(`The sky color is ${context.attributes.skyColor}`)
    }
  }
})
