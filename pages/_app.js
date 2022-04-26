import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import store from "@/rematch/store";
import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/custom.css";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
