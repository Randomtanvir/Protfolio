// app/dashboard/_components/DashboardTable.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { getAllMessages } from "@/utils/message";
import { debounce } from "lodash";
import MessageReadModal from "./MessageReadModal";
import { useRouter } from "next/navigation";
import Pagination from "./Pagenation";

const statusColors = {
  read: "bg-green-500/10 text-green-500",
  "in-progress": "bg-yellow-500/10 text-yellow-500",
  new: "bg-blue-500/10 text-blue-500",
};

const DashboardTable = () => {
  const [messages, setMessages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(""); // immediate input display
  const [searchTerm, setSearchTerm] = React.useState(""); // debounced search
  const [open, setOpen] = React.useState(false);
  const [readingMessage, setReadingMessage] = React.useState(null);
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const [limit] = React.useState(5);
  const [pagination, setPagination] = React.useState({
    total: 0,
    totalPages: 0,
  });

  // Debounced search
  const debouncedSearch = React.useMemo(
    () =>
      debounce((value) => {
        setSearchTerm(value);
        setPage(1); // Reset to first page on new search
      }, 800),
    []
  );

  React.useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  // Fetch messages
  React.useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const { data, totalPages, total } = await getAllMessages(
          searchTerm,
          page,
          limit
        );
        setMessages(data);
        setPagination({ totalPages, total });
      } catch (error) {
        console.log("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [searchTerm, page, limit]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // immediate input update
    debouncedSearch(value);
  };

  const handleClick = (message) => {
    setMessages((prev) =>
      prev?.map((msg) =>
        msg._id === message._id ? { ...msg, read: true } : msg
      )
    );
    setReadingMessage(message);
    setOpen(true);
  };

  const handleClose = (id) => {
    setOpen(false);
    setReadingMessage(null);
    if (id) {
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    }
    router.refresh();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 mb-20 md:mb-0 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/10 rounded-2xl p-6">
      {/* Table Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Messages
        </h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input
            type="text"
            placeholder="Search Messages..."
            value={inputValue}
            onChange={handleChange}
            className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200/10">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/10">
            {messages?.map((msg, index) => (
              <motion.tr
                key={msg._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:bg-gray-50/5 transition-colors cursor-pointer"
                onClick={() => handleClick(msg)}
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {msg.name}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {msg.email}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {msg.createdAt.split("T")[0]}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      !msg.read ? statusColors.new : statusColors.read
                    }`}
                  >
                    {!msg.read ? "New" : "Read"}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {messages?.length === 0 && (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            No messages found.
          </div>
        )}
      </div>

      {open && readingMessage && (
        <MessageReadModal
          activity={readingMessage}
          isOpen={open}
          onClose={handleClose}
          router={router}
        />
      )}

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={pagination.totalPages}
        totalCount={pagination.total}
        limit={limit}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default DashboardTable;
