import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export const metadata = {
    title: "base metadata title", //Responsible for the title of a webpage that is displayed on the browser tab. It's crucial for SEO as it helps search engines understand what the webpage is about.
    description: 'base metadata subtitle', //This metadata provides a brief overview of the webpage content and is often displayed in search engine results.
    keywords: ['palm beach art', 'palm beach galleries', 'palm beach fine art', 'fine art', 'art for sale'],  //For the search engine
    //favicon: '???' The small icon in the browser bar, like the G for google or the red youtube play button when you have that tab open
}


const RootLayout = ( {children} ) => {
    return (
        <html lang = "en">
        <head>
            <title>base rootlayout title</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/icons/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/icons/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
         </head>
            <body>
                <div className = "main">
                    <div className = "gradient" />
                </div>

                <main className = "app">
                    <Nav />
                    {children}
                    <Footer />
                </main>
            </body>

        </html>    
    )
}

export default RootLayout