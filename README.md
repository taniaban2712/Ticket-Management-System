# TicketDesk

## Overview:
This project aims to develop a ticket management system that allows users to create, update, and manage tickets, along with setting priority to the problems and tracking the progress of solutions to the problem faced by the customer by the management end. This project is built using Next.js, Tailwind CSS, and MongoDB.
## Features:
* **Ticket creation and management:** Users will be able to create and track tickets for a variety of purposes, such as reporting issues, requesting assistance, or submitting feedback.
* **Ticket prioritization:** Users will be able to set the priority of tickets to ensure that the most important problems are addressed first.
* **Ticket progress tracking:** Users will be able to track the progress of tickets to see how they are being handled and when they are estimated to be resolved.
## Use Cases of the Application:
The user lands on the Dashboard with existing tickets and the user can create a ticket by clicking the *ticket icon* on the leftmost corner of the navbar.

![image](https://github.com/taniaban2712/Ticket-Management-System/assets/110692684/75e59af5-4fe2-408a-8115-6c084b7f604e)

The user can enter the title and description of the problem and choose the category the problem falls into. After setting the priority, progress, and status of the problem, the user will be able to create the ticket.

![image](https://github.com/taniaban2712/Ticket-Management-System/assets/110692684/b6d686d3-2d55-4fde-8d5e-6322b04990ed)

The user will be able to see the newly created ticket under the chosen category on the dashboard as shown below.

![image](https://github.com/taniaban2712/Ticket-Management-System/assets/110692684/3d16ce65-5054-4e6a-95f6-6401c1811517)

To update a ticket, the user needs to click on an existing ticket on the dashboard and update the details.

![image](https://github.com/taniaban2712/Ticket-Management-System/assets/110692684/78015d27-3737-4a10-90c2-2dea1d2031a6)

The user can see the changes reflected in the dashboard.

![image](https://github.com/taniaban2712/Ticket-Management-System/assets/110692684/615d28ba-cacf-41c3-bc1e-1befc9052b72)

## Getting Started

Clone this repository,
```bash
git clone https://github.com/taniaban2712/Ticket-Management-System.git
```
Install the dependencies:
```bash
cd Ticket-Management-System
npm install
```
Start the development Server:
Install the dependencies:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
