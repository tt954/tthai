/**
 * Sanity CLI Configuration
 * This file configures the Sanity CLI tool with project-specific settings
 * and customizes the Vite bundler configuration.
 * Learn more: https://www.sanity.io/docs/cli
 */
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
  },
  studioHost: process.env.SANITY_STUDIO_HOST,
  autoUpdates: true,
})
