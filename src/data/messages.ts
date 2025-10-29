export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

// Initial sample messages
export const contactMessages: ContactMessage[] = [
  {
    id: "msg-1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    subject: "Product Inquiry",
    message: "I'm interested in the 18V Cordless Drill Driver. Is it available in blue?",
    date: "2023-06-15T10:30:00Z",
    read: false
  },
  {
    id: "msg-2",
    name: "Sarah Johnson",
    email: "sarah@company.com",
    phone: "+1 (555) 987-6543",
    subject: "Bulk Order",
    message: "We would like to place a bulk order for 50 units of the 125mm Angle Grinder. Can you provide a quote?",
    date: "2023-06-14T14:15:00Z",
    read: true
  },
  {
    id: "msg-3",
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+1 (555) 456-7890",
    subject: "Technical Support",
    message: "I'm having trouble with my circular saw. It keeps overheating after 10 minutes of use.",
    date: "2023-06-13T09:45:00Z",
    read: false
  }
];