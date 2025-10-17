import React from "react"
import Link from "next/link";

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm mb-5">
            <div className="flex-1">
                <a href="" className="ml-5 text-xl font-bold no-underline hover:no-underline">
                Fonda Safaja
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a>La Carta</a></li>
                <li><a>Sobre Nosaltres</a></li>
                <li><a>Contacte</a></li>
                <li>
                    <details>
                <summary>!</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;