import 'primeicons/primeicons.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="flex top-0 flex-col h-screen p-3 bg-blue-900 w-20 text-white font-GabaritoReguler shadow-lg shadow-gray-400">
                <div className="space-y-3">
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {[
                                { to: '/', icon: 'pi-objects-column', tip: 'Dashboard' },
                                { to: '/Contact', icon: 'pi-table', tip: 'Contact' },
                                { to: '#', icon: 'pi-sign-out', tip: 'Logout', isExternal: true }
                            ].map((item, index) => (
                                <li key={index} className="rounded-sm tooltip tooltip-right" data-tip={item.tip}>
                                    <Link
                                        to={item.to}
                                        className={`flex items-center p-2 space-x-3 rounded-md pi ${item.icon} btn btn-ghost w-14`}
                                    >
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
