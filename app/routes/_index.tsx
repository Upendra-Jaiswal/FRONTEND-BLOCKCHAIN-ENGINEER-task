import type { MetaFunction } from "@remix-run/node";
import Header from "../../Header";
import ContactInfo from "../Componenets/ContactInfo";
import Activities from "../Componenets/Activities";

import profilephoto from "../images/profilephoto.jpg";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../Componenets/Header";
import "../styles/index.css";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = "fc89d5383a457fe1fb25e0b6b0a3d0f4";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, sepolia];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const user = {
    name: "John Doe",
    profilePicture: profilephoto,
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    activities: [
      {
        title: "Posted a new blog article",
        date: "2024-06-01",
        description: "Wrote an article on React best practices.",
      },
      {
        title: "Commented on a friend's post",
        date: "2024-06-02",
        description: "Shared my thoughts on a friend's recent project.",
      },
      {
        title: "Joined a new group",
        date: "2024-06-03",
        description: "Became a member of the JavaScript Enthusiasts group.",
      },
      {
        title: "Completed a new course",
        date: "2024-06-10",
        description: "Finished an advanced TypeScript course on Udemy.",
      },
      {
        title: "Attended a tech conference",
        date: "2024-06-15",
        description: "Participated in the annual Web Development Summit.",
      },
      {
        title: "Contributed to an open-source project",
        date: "2024-06-20",
        description:
          "Fixed bugs and added features to a popular React library.",
      },
      {
        title: "Published a tutorial video",
        date: "2024-06-25",
        description: "Released a video tutorial on using GraphQL with React.",
      },
      {
        title: "Organized a coding meetup",
        date: "2024-07-01",
        description: "Hosted a local meetup for JavaScript developers.",
      },
      {
        title: "Started a new side project",
        date: "2024-07-05",
        description: "Initiated a new personal project for a weather app.",
      },
      {
        title: "Reviewed a tech book",
        date: "2024-07-10",
        description:
          "Posted a review of 'JavaScript: The Good Parts' on my blog.",
      },
    ],
  };
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="font-sans p-4">
          <Header name={user.name} profilePicture={user.profilePicture} />
          <ContactInfo email={user.email} phone={user.phone} />
          <Activities activities={user.activities} />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// export function links() {
//   return [{ rel: "stylesheet", href: styles }];
// }

export function ErrorBoundary({ error }) {
  return (
    <main>
      <h1>An error occured</h1>
      <p>{error.message}</p>
    </main>
  );
}
