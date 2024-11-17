export const usersData = [
  {
    id: 1,
    name: "John Doe",
    role: "user",
    email: "john@example.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "user",
    email: "jane@example.com"
  }
];

export const ordersData = {
  1: [ // Orders for User ID 1 (John Doe)
    {
      id: "ORD001",
      itemWeight: "2.5 kg",
      status: "Delivered",
      customerName: "John Doe",
      deliveryDate: "2024-01-15"
    },
    {
      id: "ORD002", 
      itemWeight: "1.8 kg",
      status: "In Transit",
      customerName: "John Doe",
      deliveryDate: "2024-01-20"
    }
  ],
  2: [ // Orders for User ID 2 (Jane Smith)
    {
      id: "ORD003",
      itemWeight: "3.2 kg",
      status: "Delivered",
      customerName: "Jane Smith",
      deliveryDate: "2024-01-18"
    },
    {
      id: "ORD004", 
      itemWeight: "1.5 kg",
      status: "In Transit",
      customerName: "Jane Smith",
      deliveryDate: "2024-01-22"
    }
  ]
}; 