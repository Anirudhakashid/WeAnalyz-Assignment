import React, { useState } from "react";
import TicketDetail from "../Components/TicketDetail";

const tickets = [
  {
    id: 1234,
    subject: "Login issue",
    status: "In Progress",
    support: "Tech support",
    date: "13/08/21",
    rating: 0,
  },
  {
    id: 1124,
    subject: "New ticket issue",
    status: "On hold",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1224,
    subject: "New request",
    status: "Closed",
    support: "Tech support",
    date: "13/08/21",
    rating: 4,
  },
  {
    id: 1244,
    subject: "Ticket submission",
    status: "In Progress",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1114,
    subject: "Login issue",
    status: "In Progress",
    support: "Tech support",
    date: "3/08/21",
    rating: 0,
  },
  {
    id: 1333,
    subject: "Password reset",
    status: "Closed",
    support: "Tech support",
    date: "15/08/21",
    rating: 5,
  }, // extra ticket to show pagination
];

const TICKETS_PER_PAGE = 5;

const MyTicket = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const totalPages = Math.ceil(tickets.length / TICKETS_PER_PAGE);
  const startIdx = (currentPage - 1) * TICKETS_PER_PAGE;
  const currentTickets = tickets.slice(startIdx, startIdx + TICKETS_PER_PAGE);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">List of Ticket</h2>
      <input
        type="text"
        placeholder="Find ticket"
        className="p-2 border mb-4 w-full rounded"
      />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 ">
            <th>Ticket No.</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Support by</th>
            <th>Date</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {currentTickets.map((ticket) => (
            <tr key={ticket.id} className="text-center border-t">
              <td
                className="text-blue-600 underline cursor-pointer px-4 py-2 "
                onClick={() => setSelectedTicket(ticket)}
              >
                {ticket.id}
              </td>
              <td>{ticket.subject}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-white ${
                    ticket.status === "Closed"
                      ? "bg-gray-600"
                      : ticket.status === "On hold"
                      ? "bg-blue-500"
                      : "bg-green-600"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>
              <td>{ticket.support}</td>
              <td>{ticket.date}</td>
              <td>
                {"★".repeat(ticket.rating)}
                {"☆".repeat(5 - ticket.rating)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            className="px-3 py-1 border rounded bg-gray-100"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 border rounded bg-gray-100"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
      <TicketDetail
        ticket={selectedTicket}
        onClose={() => setSelectedTicket(null)}
      />
    </div>
  );
};

export default MyTicket;
