import React, { useState } from "react";
import { Copy, X } from "lucide-react";

interface Member {
  email: string;
  role: "Admin" | "Editor" | "Viewer";
}

const AddTeamMembers: React.FC = () => {
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState<Member[]>([]);
  const [copied, setCopied] = useState(false);

  const handleAddMember = () => {
    if (email.trim() && !members.find((m) => m.email === email)) {
      setMembers([...members, { email, role: "Admin" }]);
      setEmail("");
    }
  };

  const handleRemove = (email: string) => {
    setMembers(members.filter((m) => m.email !== email));
  };

  const handleRoleChange = (email: string, role: Member["role"]) => {
    setMembers(
      members.map((m) => (m.email === email ? { ...m, role } : m))
    );
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText("https://example.com/invite");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    
      <div className="flex flex-col gap-3 bg-neutral-800 p-6 rounded-2xl shadow-xl h-fit w-full max-w-md">
        <div className="border-b border-neutral-300 pb-2 mb-4">
        <h2 className="text-lg font-semibold  text-neutral-300 mb-1">Add Team Members</h2>
        <p className="text-sm text-neutral-300 mb-4">
          Add collaborators to manage the artist profile
        </p>
        </div>

        {/* Share Link Section */}
        <div className="flex items-center justify-between bg-neutral-800 rounded-lg px-3 py-2 mb-4">
          <div>
            <p className="text-xs text-gray-300">Invite members via a sharable link</p>
            <p className="text-xs text-gray-300">Anyone with the link can view</p>
          </div>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1 text-neutral-300 bg-neutral-800 border-neutral-400 border-1 hover:bg-gray-500 px-3 py-1 rounded-md text-sm"
          >
            <Copy size={14} />
            {copied ? "Copied" : "Copy Link"}
          </button>
        </div>

        {/* Input Field */}
        <div className="flex items-center gap-2 mb-3">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-neutral-800 border border-neutral-500 rounded-md px-3 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleAddMember}
            className="border border-[#00FFA3] rounded-md text-[#00FFA3] text-xl font-bold px-2 py-1 "
          >
            +
          </button>
        </div>

        {/* Members List */}
        {members.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-neutral-300 mb-2">
              Added {members.length} member{members.length > 1 ? "s" : ""}
            </p>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {members.map((member) => (
                <div
                  key={member.email}
                  className="flex items-center justify-between bg-neutral-800 border-1 border-neutral-400 rounded-md px-3 py-2"
                >
                  <span className="text-sm text-neutral-300">{member.email}</span>
                  <div className="flex items-center gap-2">
                    <select
                      value={member.role}
                      onChange={(e) =>
                        handleRoleChange(member.email, e.target.value as Member["role"])
                      }
                      className="bg-neutral-800 text-sm text-white rounded-md px-2 py-1"
                    >
                      <option>Admin</option>
                      <option>Editor</option>
                      <option>Viewer</option>
                    </select>
                    <button
                      onClick={() => handleRemove(member.email)}
                      className="text-gray-400 hover:text-red-400"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between mt-4 ">
          <button className="px-5 py-2 border border-[#00FFA3] rounded-md text-[#00FFA3]">
            Cancel
          </button>
          <button className="px-6 py-2 bg-[#00FFA3] text-black font-Read w-35 rounded-lg hover:bg-[#00e695] transition">
            {members.length > 0 ? "Send" : "Done"}
          </button>
        </div>
      </div>
    
  );
};

export default AddTeamMembers;
