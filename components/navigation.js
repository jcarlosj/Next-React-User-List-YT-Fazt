/** Next */
import Link from 'next/link';

/** Component */
const Navigation = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/services">
                    <a>Services</a>
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;