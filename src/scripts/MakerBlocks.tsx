import { createRoot, type Root } from "react-dom/client"
import type { ComponentType } from "react"

import Header from "../blocks-dev/header/Header"
import MakerStarter from "./apps/makerstarter/MakerStarter"

interface ComponentConfig {
  id: string
  component: ComponentType<Record<string, unknown>>
  name: string
}

class MakerBlocks {
  private componentRegistry: ComponentConfig[]
  private roots: Map<string, Root> = new Map()

  constructor() {
    this.componentRegistry = [
      { id: "makerblocks-app", component: MakerStarter, name: "Makerstarter" },
      // { id: "makerblocks-header", component: Header, name: "Header" },
    ]

    this.init()
  }

  /**
   * Parse component props from data attribute
   */
  private parseComponentProps(element: HTMLElement, componentName: string): Record<string, unknown> {
    const propsData = element.getAttribute("component-data")
    let props: Record<string, unknown> = {}

    if (propsData) {
      try {
        props = JSON.parse(propsData)
      } catch (e) {
        console.warn(`Failed to parse ${componentName} component props:`, e)
      }
    }

    return props
  }

  /**
   * Mount a single React component
   */
  private mountComponent(config: ComponentConfig, element: HTMLElement): void {
    const { component: Component, name } = config
    const props = this.parseComponentProps(element, name)

    try {
      const root = createRoot(element)
      this.roots.set(config.id, root)
      root.render(<Component {...props} />)
    } catch (error) {
      console.error(`Failed to mount ${name} component:`, error)
    }
  }

  /**
   * Initialize all components present on the page
   */
  private initializeComponents(): void {
    this.componentRegistry.forEach((config) => {
      const element = document.getElementById(config.id)

      if (element) {
        this.mountComponent(config, element)
      }
    })
  }

  /**
   * Initialize the MakerBlocks system
   */
  private init(): void {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        this.initializeComponents()
      })
    } else {
      this.initializeComponents()
    }
  }

  /**
   * Manually mount a specific component (for dynamic usage)
   */
  public mountById(componentId: string): void {
    const config = this.componentRegistry.find((c) => c.id === componentId)
    const element = document.getElementById(componentId)

    if (config && element) {
      this.mountComponent(config, element)
    } else {
      console.warn(`Component or element not found for ID: ${componentId}`)
    }
  }

  /**
   * Unmount a specific component
   */
  public unmountById(componentId: string): void {
    const root = this.roots.get(componentId)
    if (root) {
      root.unmount()
      this.roots.delete(componentId)
    }
  }
}

export default MakerBlocks
