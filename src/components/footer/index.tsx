import Logo from '@public/assets/images/logo.png';
import FeatherIcon from 'feather-icons-react';
// import PaymentIcons from '@/assets/images/payments.png';
const Footer = () => {
    return (
        <footer className="bg-black text-slate-50">
            <div className="container px-6 py-12 mx-auto">
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <div className="md:mx-3 xl:text-2xl dark:text-white">
                        <a href="#">
                            <img className="w-auto h-7" src={Logo.src} alt="" />
                        </a>
                        <p className="mt-6 text-sm">the quick brown fox jumps over a lazy dog!</p>
                        {/* <img className="pt-2" src={PaymentIcons.src} alt="payment we accept" width="200"/> */}
                    </div>
                    
                    <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                        <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            <span>Latest Products</span>
                            <FeatherIcon icon="arrow-right" size="12"/>
                        </a>
                    </div>
                </div>
                
                <hr className="my-6 border-slate-600 md:my-10 dark:border-gray-700" />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <p className="font-semibold">HELP</p>

                        <div className="flex flex-col items-start mt-1 space-y-2 text-sm">
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Aabbc</a>
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Aabbcc</a>
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Aabbcc</a>
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Aabbcc</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">LINKS</p>

                        <div className="flex flex-col items-start mt-1 space-y-2 text-sm">
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Aabbcc</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">HEADING</p>

                        <div className="flex flex-col items-start mt-1 space-y-2 text-sm"> 
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Aabbcc</a>
                        </div>

                        <p className="font-semibold mt-3">HEADING</p>
                        <div className="flex flex-col items-start mt-1 space-y-2 text-sm">
                        <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Aabbcc</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">LEGAL</p>

                        <div className="flex flex-col items-start mt-1 space-y-2 text-sm">
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Privacy Policy</a>
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Terms of Service</a>
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Refund Policy</a>
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Brand Kit</a>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">INFORMATION</p>

                        <div className="flex flex-col items-start mt-1 space-y-2 text-sm">
                            <a href="/about" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">About Us</a>
                            <a href="/terms" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Terms of Service</a>
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Refund Policy</a>
                            <a href="#" className="text-slate-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-slate-50">Brand Kit</a>
                        </div>
                    </div>
                </div>
                
                <hr className="my-6 border-slate-600 md:my-10 dark:border-gray-700" />
                
                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <div className='flex space-x-2'>
                        <FeatherIcon icon="facebook" size="18" strokeWidth="1"/>
                        <FeatherIcon icon="twitter" size="18" strokeWidth="1"/>
                        <FeatherIcon icon="instagram" size="18" strokeWidth="1"/>
                    </div>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;