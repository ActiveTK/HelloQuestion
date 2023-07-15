import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ActiveTK.に匿名で質問 - ActiveTK.jp',
  description: 'ActiveTK․に匿名で質問ができます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="author" content="ActiveTK." />
        <meta name="robots" content="All" />
        <meta name="copyright" content="Copyright &copy; 2023 ActiveTK. All rights reserved." />
        <link rel="canonical" href="https://hello.activetk.jp/" />
        <meta name="description" content="ActiveTK․に匿名で質問ができます。" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ActiveTK5929" />
        <meta name="twitter:creator" content="@ActiveTK5929" />
        <meta name="twitter:title" content="ActiveTK.に匿名で質問 - ActiveTK.jp" />
        <meta name="twitter:image" content="https://www.activetk.jp/icon/activetk-v2_40x40.png" />
        <meta property="og:title" content="ActiveTK.に匿名で質問 - ActiveTK.jp" />
        <meta property="og:description" content="ActiveTK․に匿名で質問ができます。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hello.activetk.jp/" />
        <meta property="og:site_name" content="ActiveTK.に匿名で質問 - ActiveTK.jp" />
        <meta property="og:locale" content="ja_JP" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
