import { r as t, e as p, d as u, j as s, B as g } from "./index.js";
import { P as h } from "./PageNav-e2daa83c.js";
import "./Logo-8eff5a47.js";
const x = "_login_s7lyp_1",
    f = "_form_s7lyp_8",
    j = "_row_s7lyp_22",
    w = "_loginBtn_s7lyp_28",
    a = { login: x, form: f, row: j, loginBtn: w };
function N() {
    const [o, l] = t.useState("jack@example.com"),
        [n, r] = t.useState("qwerty"),
        { handleLogin: m, isAuthenticated: i } = p(),
        c = u();
    function d(e) {
        e.preventDefault(), m(o, n);
    }
    return (
        t.useEffect(() => {
            i && c("/app");
        }, [i]),
        s.jsxs("main", {
            className: a.login,
            children: [
                s.jsx(h, {}),
                s.jsxs("form", {
                    className: a.form,
                    onSubmit: d,
                    children: [
                        s.jsxs("div", {
                            className: a.row,
                            children: [
                                s.jsx("label", {
                                    htmlFor: "email",
                                    children: "Email address",
                                }),
                                s.jsx("input", {
                                    type: "email",
                                    id: "email",
                                    onChange: (e) => l(e.target.value),
                                    value: o,
                                }),
                            ],
                        }),
                        s.jsxs("div", {
                            className: a.row,
                            children: [
                                s.jsx("label", {
                                    htmlFor: "password",
                                    children: "Password",
                                }),
                                s.jsx("input", {
                                    type: "password",
                                    id: "password",
                                    onChange: (e) => r(e.target.value),
                                    value: n,
                                }),
                            ],
                        }),
                        s.jsx("div", {
                            className: a.loginBtn,
                            children: s.jsx(g, {
                                type: "primary",
                                children: "Login",
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
export { N as default };
