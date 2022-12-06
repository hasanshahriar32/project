import { DarkThemeToggle, Flowbite } from "flowbite-react";
import "./App.css";
import Routes from "./Components/Routes/Routes";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

Sentry.init({
  dsn: "https://f3b29daeccb14f06915845c2428069f6@o4504226635055104.ingest.sentry.io/4504226640297984",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
function App() {
  return (
    <Flowbite
      theme={{
        theme: {
          alert: {
            color: {
              primary: "bg-primary",
            },
          },
        },
      }}
    >
      <div className="dark:bg-gray-800">
        <QueryClientProvider client={queryClient}>
          <Routes> </Routes>
        </QueryClientProvider>
      </div>
    </Flowbite>
  );
}

export default App;
