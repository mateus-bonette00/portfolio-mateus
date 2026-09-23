import { getCurrentLocale } from '../i18n/routes'

const RESUME_ASSETS = {
  'pt-BR': {
    path: '/Mateus_Bonette_Curriculo.pdf',
    filename: 'Mateus_Bonette_Curriculo.pdf',
  },
  en: {
    path: '/Mateus_Bonette_Resume_EN.pdf',
    filename: 'Mateus_Bonette_Resume_EN.pdf',
  },
} as const

const resumeAsset = RESUME_ASSETS[getCurrentLocale()]

export const RESUME_PDF_PATH = resumeAsset.path
export const RESUME_DOWNLOAD_FILENAME = resumeAsset.filename

const profileBuildVersion = import.meta.env.VITE_BUILD_ID ?? '1'
export const PROFILE_IMAGE_PATH = `/images/profile-2.jpg?v=${profileBuildVersion}`
