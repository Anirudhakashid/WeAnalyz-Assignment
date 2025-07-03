import React from "react";

const TicketDetailsModal = ({ ticket, onClose }) => {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
        <h2 className="text-xl font-bold mb-4 text-center">Ticket Details</h2>

        <div className="space-y-1">
          <p>
            <strong>Ticket No:</strong> {ticket.id}
          </p>
          <p>
            <strong>Date:</strong> {ticket.date}
          </p>
          <p>
            <strong>Name:</strong> {ticket.name}
          </p>
          <p>
            <strong>Dept:</strong> {ticket.department}
          </p>
          <p>
            <strong>Title:</strong> {ticket.subject}
          </p>
          <p>
            <strong>Description:</strong> {ticket.description}
          </p>
          <p>
            <strong>Category:</strong> {ticket.category}
          </p>
          <p>
            <strong>Type:</strong> {ticket.type}
          </p>
          <p>
            <strong>Priority:</strong> {ticket.priority}
          </p>
          <p>
            <strong>Status:</strong> {ticket.status}
          </p>
          <p>
            <strong>Attachment:</strong>{" "}
            {ticket.attachment ? (
              <a href={ticket.attachment} className="text-blue-500 underline">
                Download
              </a>
            ) : (
              "None"
            )}
          </p>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsModal;
