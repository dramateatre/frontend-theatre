import './globals.css'

import { ReactNode } from 'react'
import initTranslations from '@/libs/i18n/i18n'
import { dir } from 'i18next'
import TranslationsProvider from '@/libs/i18n/TranslationsProvider'
import localFont from 'next/font/local'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

const playwrite = localFont({
    src: '../../../public/fonts/playwrite/PlaywriteAUQLD-Thin.ttf',
    display: 'swap',
    variable: '--font-playwrite',
})

const georgian = localFont({
    src: '../../../public/fonts/georgian/arial_geo-italic.ttf',
    display: 'swap',
    variable: '--font-georgian',
})

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['meta']
    const { t } = await initTranslations(locale, i18nNamespaces)

    // Define your production URL here
    const productionUrl = 'https://batumitheatre.ge'

    return {
        title: {
            default: t('default'),
            template: `%s | ${t('default')}`,
        },
        description: t('descriptionMain'),
        openGraph: {
            title: t('default'),
            description: t('descriptionMain'),
            type: 'website',
            locale: locale,
            url: productionUrl,
            siteName: 'Batumi Drama Theatre',
            images: [
                {
                    url: `${productionUrl}/opengraph-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Batumi Drama Theatre',
                },
            ],
        },
    }
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: ReactNode
    params: { locale: string }
}) {
    const i18nNamespaces = ['contact', 'main', 'repertory']
    const { resources } = await initTranslations(locale, i18nNamespaces)

    return (
        <html lang={locale} dir={dir(locale)}>
            <body className={`${georgian.variable} ${playwrite.variable}`}>
                <TranslationsProvider
                    namespaces={i18nNamespaces}
                    locale={locale}
                    resources={resources}
                >
                    <Header />
                    {children}
                    <Footer locale={locale} />
                </TranslationsProvider>
            </body>
        </html>
    )
}
