import { getCurrentUser } from "../utils/auth";
import ProducerPanel from "../components/ProducerPanel";
import ConsumerPanel from "../components/ConsumerPanel";

export default function Dashboard() {
  const user = getCurrentUser();

  if (!user) return <h2>Unauthorized</h2>;

  return (
    <div>
      <h2>Welcome {user.role.toUpperCase()}</h2>
      {user.role === "producer" ? <ProducerPanel /> : <ConsumerPanel />}
    </div>
  );
}

