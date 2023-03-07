import footerLinks from '../../../json/footerLinks.json'
export function LoginFooter(): JSX.Element {
    return (
        <footer className="hidden justify-center p-2 text-sm text-white dark:text-dark-secondary lg:flex">
            <nav className="flex flex-wrap justify-center gap-4 gap-y-2">
                {footerLinks.map(([linkName, href]) => (
                    <a
                        className="custom-underline"
                        target="_blank"
                        rel="noreferrer"
                        href={href}
                        key={linkName}
                    >
                        {linkName}
                    </a>
                ))}
                <p>© {new Date().getFullYear()} Twitter, Inc.</p>
            </nav>
        </footer>
    )
}
