// components/GetSession.tsx

import { useSession } from "next-auth/react";

interface GetSessionProps {
  onSessionChange: (session: any) => void;
}

const GetSession: React.FC<GetSessionProps> = ({ onSessionChange }) => {
  const { data: session } = useSession();

  // Call the callback function with the session data
  if (onSessionChange) {
    onSessionChange(session);
  }

  return null; // This component doesn't render anything directly
};

export default GetSession;
