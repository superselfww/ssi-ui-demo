import React, { useState } from "react";

const InviteFriendsSection = () => {
  const [copied, setCopied] = useState(false);
  const inviteLink = `${window.location.origin}/register?ref=joywelch`;

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#EE9737] mb-2">Invite Friends</h2>
        <p className="text-gray-600 text-sm mb-4">
          Share your unique invite link with friends and help them join our community!
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        <div className="w-full flex items-center bg-[#f8fafc] rounded-lg border border-gray-200 px-3 py-2">
          <input
            type="text"
            value={inviteLink}
            readOnly
            className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
          />
          <button
            onClick={handleCopy}
            className="ml-2 px-3 py-1 bg-[#EE9737] text-white rounded-lg text-xs font-semibold hover:bg-orange-400 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex gap-3 mt-2">
          <a
            href={`https://wa.me/?text=Join%20me%20on%20this%20platform!%20${encodeURIComponent(inviteLink)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.484 1.34 4.995l-1.409 5.151a1.001 1.001 0 0 0 1.236 1.236l5.151-1.409a9.96 9.96 0 0 0 4.995 1.34c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.001a7.96 7.96 0 0 1-4.09-1.151l-.292-.174-3.057.837.837-3.057-.174-.292a7.96 7.96 0 0 1-1.151-4.09c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.396-5.563c-.242-.121-1.434-.707-1.655-.788-.221-.081-.382-.121-.543.121-.161.242-.623.788-.764.95-.141.161-.282.181-.523.06-.242-.121-1.022-.377-1.947-1.202-.72-.642-1.207-1.434-1.35-1.676-.141-.242-.015-.373.106-.494.109-.108.242-.282.363-.423.121-.141.161-.242.242-.403.081-.161.04-.302-.02-.423-.06-.121-.543-1.312-.744-1.797-.196-.471-.396-.406-.543-.414l-.463-.008c-.161 0-.423.06-.646.282-.221.221-.846.827-.846 2.017 0 1.19.866 2.341.986 2.502.121.161 1.703 2.6 4.132 3.543.578.199 1.028.318 1.379.406.579.147 1.106.127 1.523.077.465-.056 1.434-.586 1.637-1.152.202-.566.202-1.051.141-1.152-.06-.101-.221-.161-.463-.282z"/></svg>
            WhatsApp
          </a>
          <a
            href={`mailto:?subject=Join%20me%20on%20this%20platform!&body=Sign%20up%20using%20my%20invite%20link:%20${encodeURIComponent(inviteLink)}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/></svg>
            Email
          </a>
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-6 text-center">
        Earn rewards when your friends join using your link!
      </div>
    </div>
  );
};

export default InviteFriendsSection;
