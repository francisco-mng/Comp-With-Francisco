import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comp With Francisco - ISTN2IP Exam Mentorship Program",
  description: "Helping you get cracked before your ISTN2IP exams with personalized mentorship, clear explanations, and a proven track record of transforming students from confusion to clarity faster than anything else you'll find elsewhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script type="text/javascript">
        {
          //Tracking code for Microsoft Clarity, a user behavior analytics tool
          //This code snippet initializes Clarity on the website, allowing the site
          //owner to track user interactions and gain insights into how users are 
          //engaging with the site. The "wu4fcb1nli" is the unique project ID for this 
          //specific Clarity instance.
          ` (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wu4fcb1nli");`
        }
    </script>

      </head>
      <body className="min-h-full flex flex-col">
        {children}

        
        </body>
    </html>
  );
}
