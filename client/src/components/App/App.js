import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DBConnectionForm from "../DBConnectionInput/DBConnectionForm";
import styles from "./app.module.css";
import TranscribionControllers from "../TranscribationControllers/TranscribarionControllers";
const App = () => {
    return _jsxs("div", {
        className: styles.wrapper,
        children: [
            _jsx("h3", {
                children:
                    "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0434\u043E \u0431\u0430\u0437\u0438 \u0434\u0430\u043D\u0438\u0445",
            }),
            _jsx(DBConnectionForm, {}),
            _jsx("hr", {}),
            _jsx(TranscribionControllers, {}),
        ],
    });
};
export default App;
