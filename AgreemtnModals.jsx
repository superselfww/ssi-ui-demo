import { Description, Dialog, DialogTitle } from "@headlessui/react"

const AgreementModals = ({ openModal, setOpenModal }) => {
    return (
        <>
            <Dialog open={openModal === 'help'} onClose={() => setOpenModal(null)} className="fixed z-50 inset-0 flex items-center justify-center">
                <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
                <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
                    <DialogTitle className="text-lg font-bold mb-2">Help</DialogTitle>
                    <Description className="mb-4 text-gray-600">If you need help, please contact our support team at <a href="mailto:support@superself.com" className="text-primary underline">support@superself.com</a> or visit our FAQ section in the app.</Description>
                    <button onClick={() => setOpenModal(null)} className="mt-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-orange-500 transition">Close</button>
                </div>
            </Dialog>
            <Dialog open={openModal === 'privacy'} onClose={() => setOpenModal(null)} className="fixed z-50 inset-0 flex items-center justify-center">
                <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
                <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
                    <DialogTitle className="text-lg font-bold mb-2">Privacy Policy</DialogTitle>
                    <Description className="mb-4 text-gray-600">We respect your privacy. Your data is stored securely and will never be shared with third parties without your consent. For more details, please read our full privacy policy on our website.</Description>
                    <button onClick={() => setOpenModal(null)} className="mt-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-orange-500 transition">Close</button>
                </div>
            </Dialog>
            <Dialog open={openModal === 'terms'} onClose={() => setOpenModal(null)} className="fixed z-50 inset-0 flex items-center justify-center">
                <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
                <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
                    <DialogTitle className="text-lg font-bold mb-2">Terms of Service</DialogTitle>
                    <Description className="mb-4 text-gray-600">By using this app, you agree to follow our community guidelines and terms. Please use the app responsibly and respectfully. For full terms, visit our website.</Description>
                    <button onClick={() => setOpenModal(null)} className="mt-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-orange-500 transition">Close</button>
                </div>
            </Dialog>
        </>
    )
}

export default AgreementModals;