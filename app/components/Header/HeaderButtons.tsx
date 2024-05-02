import Link from "next/link"

const links = [
    { name: 'HOME', href: '/' },
    { name: 'BLOG', href: '/' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' },
]
export function HeaderButtons({ onCloseMenu }: { onCloseMenu: () => void }) {
    return (
        <div className="absolute bottom-0 w-full">
            <>
                {links.map((link) => (
                    <Link key={link.name} href={link.href} onClick={onCloseMenu}>
                        <div className="p-10 border-t-2 border-white w-full flex justify-center cursor-pointer transition hover:bg-white hover:text-darkBlue">
                            <b className="text-6xl">{link.name}</b>
                        </div>
                    </Link>
                ))}
            </>
        </div>
    );
}