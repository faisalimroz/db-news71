import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../Search/Search';

const NavBar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const nav = (
        <>
            <li>
                <Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            </li>
            <li>
                <button onClick={() => handleDropdownToggle('bangladesh')}>
                    বাংলাদেশ
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {openDropdown === 'bangladesh' && (
                    <ul className="dropdown-menu absolute bg-white text-black shadow-lg mt-10 z-10">
                        <li onClick={() => handleDropdownToggle('জাতীয়')}><Link to='/category/জাতীয়'>জাতীয়</Link></li>
                        <li onClick={() => handleDropdownToggle(null)}><Link to='/category/অর্থনীতি'>অর্থনীতি</Link></li>
                        <li onClick={() => handleDropdownToggle(null)}><Link to='/category/রাজনীতি'>রাজনীতি</Link></li>
                    </ul>
                )}
            </li>

            <li>
                <button onClick={() => handleDropdownToggle('bibag')}>
                    বিভাগীয় সংবাদ
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {openDropdown === 'bibag' && (
                    <ul className="dropdown-menu absolute bg-white text-black shadow-lg mt-10 z-10">
                        <li><Link>ঢাকা</Link></li>
                        <li><Link>চট্টগ্রাম</Link></li>
                        <li><Link>রাজশাহী</Link></li>
                        <li><Link>খুলনা</Link></li>
                        <li><Link>বরিশাল</Link></li>
                        <li><Link>সিলেট</Link></li>
                        <li><Link>রংপুর</Link></li>
                        <li><Link>ময়মনসিংহ</Link></li>
                    </ul>
                )}
            </li>

            <li><Link> আন্তর্জাতিক</Link></li>
            <li>
                <button onClick={() => handleDropdownToggle('kheladula')}>
                    খেলাধুলা
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {openDropdown === 'kheladula' && (
                    <ul className="dropdown-menu absolute bg-white text-black shadow-lg mt-10 z-10">
                        <li><Link>ক্রিকেট</Link></li>
                        <li><Link>ফুটবল</Link></li>
                    </ul>
                )}
            </li>
            <li><Link>চাকরি</Link></li>
            <li><Link>লাইফস্টাইল</Link></li>
            <li><Link>বিনোদন</Link></li>

            <li>
                <button onClick={() => handleDropdownToggle('feature')}>
                    ফিচার
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {openDropdown === 'feature' && (
                    <ul className="dropdown-menu absolute bg-white text-black shadow-lg mt-10 z-10">
                        <li><Link>শিক্ষা</Link></li>
                        <li><Link>ধর্ম</Link></li>
                        <li><Link>সাহিত্য</Link></li>
                        <li><Link>স্বাস্থ্য</Link></li>
                        <li><Link>তথ্যপ্রযুক্তি</Link></li>
                        <li><Link>ভ্রমণ</Link></li>
                        <li><Link>জোকস</Link></li>
                        <li><Link>মতামত</Link></li>
                        <li><Link>প্রবাস</Link></li>
                    </ul>
                )}
            </li>
        </>
    );

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-blue-500 text-white w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2 font-semibold">DBNEWS71</div>
                        <div className='lg:hidden block'>
                            <SearchBar />
                        </div>
                        <div className="hidden flex-none lg:block">
                            <div className="flex justify-center items-center h-full ">
                                <ul className="menu menu-horizontal ">
                                    {nav}
                                    <SearchBar />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-blue-500 text-white min-h-full w-80 p-4">
                        {nav}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
