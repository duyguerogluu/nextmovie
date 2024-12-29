import React from 'react';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';

function Header() {
    return (
        <header>
            <div>
             <Link href="/">
                <FaPlayCircle/> DUYGUFLIX
             </Link>
            </div>
        </header>

    );
}

export default Header;

