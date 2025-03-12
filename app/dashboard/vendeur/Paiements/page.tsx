"use client";

import { useState } from "react";
import { Table, Badge, Card } from "react-bootstrap";
import { FaCheckCircle, FaClock, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

interface Payment {
  id: number;
  name: string;
  email: string;
  amount: string;
  date: string;
  status: "success" | "pending" | "failed";
}

const paymentsData: Payment[] = [
  { id: 1, name: "Alice Dupont", email: "alice@example.com", amount: "49,99€", date: "25/02/2025", status: "success" },
  { id: 2, name: "Jean Martin", email: "jean@example.com", amount: "19,99€", date: "24/02/2025", status: "pending" },
  { id: 3, name: "Lucie Bernard", email: "lucie@example.com", amount: "99,99€", date: "23/02/2025", status: "failed" },
];

export default function Payments() {
  const [payments] = useState<Payment[]>(paymentsData);

  const getStatusBadge = (status: "success" | "pending" | "failed") => {
    switch (status) {
      case "success":
        return <Badge bg="success"><FaCheckCircle /> Réussi</Badge>;
      case "pending":
        return <Badge bg="warning" text="dark"><FaClock /> En attente</Badge>;
      case "failed":
        return <Badge bg="danger"><FaTimesCircle /> Échoué</Badge>;
    }
  };

  return (
    <Card className="shadow-sm p-4">
      <h4 className="mb-3">💳 Paiements Finalisés</h4>
      <Table hover responsive className="align-middle">
        <thead className="table-light">
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Montant</th>
            <th>Date</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.name}</td>
              <td>{payment.email}</td>
              <td><strong>{payment.amount}</strong></td>
              <td>{payment.date}</td>
              <td>{getStatusBadge(payment.status)}</td>
              <td>
                <button className="btn btn-outline-primary btn-sm">
                  <FaInfoCircle /> Détails
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
