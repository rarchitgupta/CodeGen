import { Noto_Sans_Mono } from 'next/font/google'

const notoSansMono = Noto_Sans_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
  })
  
  export const fonts = {
    notoSansMono,
  }