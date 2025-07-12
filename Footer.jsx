import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full bg-white  py-8 px-4 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
            <div className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} Super-Self Institute. All rights reserved.</div>
            <div className="flex gap-4">
                <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            </div>
        </footer>
    )
}
